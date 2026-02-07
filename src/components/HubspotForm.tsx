import React from 'react'

type Props = {
  portalId: string
  formId: string
  region?: string
  version?: 'v1' | 'v2'
  className?: string
}

export default function HubspotForm({ portalId, formId, region = 'eu1', version = 'v1', className }: Props){
  if(version === 'v1'){
    // v1: render frame for auto-quote form
    return (
<div className={className}>
  <script src="https://js-eu1.hsforms.net/forms/embed/146017876.js" defer></script>
  <script type="text/javascript" src="//js-eu1.hsforms.net/forms/embed/v2.js"></script>
  <script dangerouslySetInnerHTML={{__html: `
    hbspt.forms.create({
      portalId: "146017876",
      formId: "0dafab8d-f911-48cd-8a20-ab5a4a405c8e",
      region: "eu1"
    });
  `}} />
  <div className="hs-form-frame" data-region="eu1" data-form-id="ae783fe2-6128-4eb3-8714-26a5aafc84b4" data-portal-id="146017876"></div>
</div>
    )
  }

  // v2: render container for contact form
  return (
    <div className={className}>
      <div id="hbspt-form-contact"></div>
    </div>
  )
}

