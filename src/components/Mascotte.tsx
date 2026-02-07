import React from 'react'

type Props = {
  size?: 'sm' | 'md' | 'lg'
  caption?: string
  rounded?: boolean
  className?: string
}

export default function Mascotte({ size = 'lg', caption, rounded = true, className = '' }: Props){
  const dims = size === 'sm' ? 'w-31 h-31' : size === 'md' ? 'w-47 h-47' : 'w-63 h-63'
  return (
    <figure className={`flex flex-col items-center ${className}`}>
      <div className={`relative ${dims}`}>
        <img
          src="/mockups/home.jpg"
          alt="Assurances Auto Résiliés Malussé urgence"
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
