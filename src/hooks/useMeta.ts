import { useEffect } from 'react'

type MetaOptions = {
  title: string
  description?: string
  noIndex?: boolean
  image?: string
  type?: string // og:type
  url?: string // canonical override
  jsonLd?: Record<string, any> | Record<string, any>[]
}

function upsertMeta(selector: string, attrs: Record<string,string>) {
  let el: HTMLElement | null = document.querySelector(selector)
  if (!el){
    el = document.createElement('meta')
    Object.entries(attrs).forEach(([k,v]) => {
      if (k === 'name' || k === 'property'){ (el as any)[k] = v } else el!.setAttribute(k,v)
    })
    document.head.appendChild(el)
  } else {
    Object.entries(attrs).forEach(([k,v]) => {
      if (k === 'content') el!.setAttribute('content', v)
      if (k === 'name' || k === 'property'){ (el as any)[k] = v }
    })
  }
  return el
}

function upsertLink(rel: string, href: string){
  let link = document.querySelector(`link[rel='${rel}']`) as HTMLLinkElement | null
  if (!link){
    link = document.createElement('link')
    link.rel = rel
    document.head.appendChild(link)
  }
  link.href = href
}

export function useMeta(titleOrOptions: string | MetaOptions, maybeDescription?: string){
  useEffect(()=>{
    const opts: MetaOptions = typeof titleOrOptions === 'string' ? { title: titleOrOptions, description: maybeDescription } : titleOrOptions
    const { title, description, noIndex, image, type = 'website', url, jsonLd } = opts

    if (title) document.title = title
    if (description) upsertMeta('meta[name="description"]', { name: 'description', content: description })

    const canonical = url || window.location.href.split('#')[0]
    upsertLink('canonical', canonical)

    // Basic robots
    upsertMeta('meta[name="robots"]', { name: 'robots', content: noIndex ? 'noindex, nofollow' : 'index, follow' })

    // Open Graph
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    if (description) upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    if (image) upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image })

    // Twitter
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: image ? 'summary_large_image' : 'summary' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    if (description) upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    if (image) upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })

    // JSON-LD structured data
    if (jsonLd){
      // Remove existing dynamic ld+json
      document.querySelectorAll('script[data-dynamic-jsonld]').forEach(s=> s.parentElement?.removeChild(s))
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.dataset.dynamicJsonld = 'true'
      script.textContent = JSON.stringify(jsonLd, null, 2)
      document.head.appendChild(script)
    }
  }, [titleOrOptions, maybeDescription])
}

export type { MetaOptions }
