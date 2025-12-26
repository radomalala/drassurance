import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

// Serverless function for sending urgent request emails via Resend
// Expects JSON body: { nom, tel, situation }

const resendApiKey = process.env.RESEND_API_KEY
const sender = process.env.RESEND_SENDER_EMAIL || 'onboarding@resend.dev'
const destination = 'sine.sow@prevo.fr'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  if (!resendApiKey) {
    res.status(500).json({ error: 'Missing RESEND_API_KEY' })
    return
  }

  try {
    let body: any = req.body
    if (typeof body === 'string') {
      try { body = JSON.parse(body) } catch { /* ignore parse error */ }
    }
    const { nom, tel, situation } = body || {}
    if (!nom || !tel || !situation) {
      res.status(400).json({ error: 'Champs requis manquants' })
      return
    }

    const resend = new Resend(resendApiKey)

    const subject = 'Urgence résilié'
    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#222">
        <h2 style="margin-top:0;color:#dc2626">🚨 Demande Urgence Résiliation</h2>
        <p><strong>Nom:</strong> ${escapeHtml(nom)}</p>
        <p><strong>Téléphone:</strong> ${escapeHtml(tel)}</p>
        <p><strong>Situation:</strong> ${escapeHtml(situation)}</p>
        <hr style="margin:24px 0" />
        <p style="font-size:12px;color:#666">Email envoyé automatiquement depuis le formulaire Urgence résilié du site.</p>
      </div>
    `

    const { error } = await resend.emails.send({
      from: sender,
      to: destination,
      subject,
      html,
      replyTo: nom
    })

    if (error) {
      res.status(502).json({ error: 'Erreur envoi email', details: error })
      return
    }

    res.status(200).json({ ok: true })
  } catch (err: any) {
    res.status(500).json({ error: 'Erreur serveur', details: err?.message })
  }
}

function escapeHtml(str: string) {
  return str.replace(/[&<>'"]/g, c => {
    switch (c) {
      case '&': return '&amp;'
      case '<': return '&lt;'
      case '>': return '&gt;'
      case '"': return '&quot;'
      case "'": return '&#39;'
      default: return c
    }
  })
}
