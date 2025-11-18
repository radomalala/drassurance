import React from 'react'

type Props = {
  size?: 'sm' | 'md' | 'lg'
  caption?: string
  rounded?: boolean
  className?: string
}

export default function Mascotte({ size = 'lg', caption, rounded = true, className = '' }: Props){
  const dims = size === 'sm' ? 'w-24 h-24' : size === 'md' ? 'w-40 h-40' : 'w-56 h-56'
  return (
    <figure className={`flex flex-col items-center ${className}`}>
      <div className={`relative ${dims}`}>
        <img
          src="/mockups/mascotte.PNG"
          alt="Mascotte de La Clinique des Assurances Résiliés"
          className={`object-contain ${rounded ? 'rounded-2xl' : ''} w-full h-full shadow-lg bg-white dark:bg-slate-900`}
          loading="eager"
        />
        <div className="pointer-events-none absolute -top-2 -left-2 bg-urgent-red text-white text-xs font-bold px-2 py-1 rounded shadow">
          Code rouge
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-gray-600 dark:text-gray-300 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
