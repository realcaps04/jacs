import { useEffect, useState } from 'react'

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}

export function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) {
      setValue(0)
      return
    }

    let raf = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      setValue(Math.round(easeOutCubic(progress) * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])

  return value
}
