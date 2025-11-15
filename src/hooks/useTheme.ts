import { useEffect, useMemo, useState } from 'react'

export type ThemeMode = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'theme'

function getStoredMode(): ThemeMode {
  if (typeof window === 'undefined') return 'system'
  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (raw === 'light' || raw === 'dark' || raw === 'system') return raw
  return 'system'
}

function prefersDark(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

function applyThemeClass(mode: ThemeMode) {
  const root = document.documentElement
  const useDark = mode === 'dark' || (mode === 'system' && prefersDark())
  root.classList.toggle('dark', useDark)
}

export function useTheme() {
  const [mode, setModeState] = useState<ThemeMode>(() => getStoredMode())

  const effective: 'light' | 'dark' = useMemo(() => {
    if (mode === 'system') return prefersDark() ? 'dark' : 'light'
    return mode
  }, [mode])

  useEffect(() => {
    // Apply immediately on mount
    applyThemeClass(mode)

    // Persist
    try { window.localStorage.setItem(STORAGE_KEY, mode) } catch {}

    // If system, listen for changes
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = () => { if (mode === 'system') applyThemeClass('system') }
    if (mq.addEventListener) {
      mq.addEventListener('change', listener)
    } else if ((mq as any).addListener) {
      (mq as any).addListener(listener)
    }
    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener('change', listener)
      } else if ((mq as any).removeListener) {
        (mq as any).removeListener(listener)
      }
    }
  }, [mode])

  const setMode = (m: ThemeMode) => setModeState(m)

  return { mode, setMode, effective }
}

export default useTheme
