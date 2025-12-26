import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

// Serverless function for sending contact form emails via Resend
// Expects JSON body: { nom, email, tel, sujet, message }

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
    const { nom, email, tel, sujet, message } = body || {}
    if (!nom || !email || !sujet || !message) {
      res.status(400).json({ error: 'Champs requis manquants' })
      return
    }

    const resend = new Resend(resendApiKey)

    const subject = sujet === 'devis' ? 'Demande de devis via Site Internet' : `Demande de contact - ${sujet}`
    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#222">
        <h2 style="margin-top:0">Demande de contact</h2>
        <p><strong>Nom:</strong> ${escapeHtml(nom)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Téléphone:</strong> ${escapeHtml(tel || '—')}</p>
        <p><strong>Sujet:</strong> ${escapeHtml(sujet)}</p>
        <hr style="margin:16px 0" />
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap;word-wrap:break-word">${escapeHtml(message)}</p>
        <hr style="margin:24px 0" />
        <p style="font-size:12px;color:#666">Email envoyé automatiquement depuis le formulaire de contact du site.</p>
      </div>
    `

    const { error } = await resend.emails.send({
      from: sender,
      to: destination,
      subject,
      html,
      replyTo: email
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
