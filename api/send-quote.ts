import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

// Serverless function for sending quote request emails via Resend
// Expects JSON body: { nom, tel, situation, infos }

const resendApiKey = process.env.RESEND_API_KEY
const sender = process.env.RESEND_SENDER_EMAIL || 'onboarding@resend.dev'
const destination = 'sine.sow@prevo.fr'
const bccDestination = 'ratrimosoaeugene@gmail.com'

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
    const { nom, tel, situation, infos } = req.body || {}
    if (!nom || !tel || !situation) {
      res.status(400).json({ error: 'Champs requis manquants' })
      return
    }

    const resend = new Resend(resendApiKey)

    const subject = `Nouveau devis express - ${nom}`
    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#222">
        <h2 style="margin-top:0">Demande de devis express</h2>
        <p><strong>Nom:</strong> ${escapeHtml(nom)}</p>
        <p><strong>Téléphone:</strong> ${escapeHtml(tel)}</p>
        <p><strong>Situation:</strong> ${escapeHtml(situation)}</p>
        <p><strong>Informations complémentaires:</strong><br />${escapeHtml(infos || '—')}</p>
        <hr style="margin:24px 0" />
        <p style="font-size:12px;color:#666">Email envoyé automatiquement depuis le formulaire Devis express.</p>
      </div>
    `

    const { error } = await resend.emails.send({
      from: sender,
      to: destination,
      bcc: bccDestination,
      subject,
      html
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
      case "'": return '&#39;' // eslint-disable-line quotes
      default: return c
    }
  })
}
