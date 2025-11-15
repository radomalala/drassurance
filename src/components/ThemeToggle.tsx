import React, { useEffect, useRef, useState } from 'react'
import { Moon, Sun, Laptop } from 'lucide-react'
import { useTheme, ThemeMode } from '../hooks/useTheme'

export default function ThemeToggle() {
  const { mode, setMode, effective } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current) return
      if (!ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  const Icon = effective === 'dark' ? Moon : Sun

  const Item = ({ value, label, icon: I }: { value: ThemeMode; label: string; icon: React.ComponentType<{ size?: number }> }) => (
    <button
      onClick={() => { setMode(value); setOpen(false) }}
      className={`w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-slate-800 text-left ${mode === value ? 'text-urgent-red' : ''}`}
    >
      <I size={16} />
      <span>{label}</span>
    </button>
  )

  return (
    <div className="relative" ref={ref}>
      <button
        aria-label="Changer de thème"
        className="inline-flex items-center gap-2 rounded-md border border-gray-200 dark:border-slate-700 px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-slate-800"
        onClick={() => setOpen(v => !v)}
      >
        <Icon size={16} />
        <span className="hidden sm:inline">{mode === 'system' ? 'Système' : mode === 'dark' ? 'Sombre' : 'Clair'}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-md border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg p-1 z-50">
          <Item value="light" label="Clair" icon={Sun} />
          <Item value="dark" label="Sombre" icon={Moon} />
          <Item value="system" label="Système" icon={Laptop} />
        </div>
      )}
    </div>
  )
}
