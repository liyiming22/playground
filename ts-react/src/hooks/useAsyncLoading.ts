/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unicorn/prevent-abbreviations */
import { useState, useEffect, useRef, useCallback } from 'react'

type PromiseAction = (...args: any[]) => Promise<any>

export function useAsyncLoading<A extends PromiseAction>(action: A, wait: number): [A, boolean] {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [pending, setPending] = useState(false)
  const [loading, setLoading] = useState(false)

  const actionWithPending = useCallback(
    (...args: Parameters<A>) => {
      setPending(true)
      const promise = action(...args)
      // eslint-disable-next-line promise/catch-or-return
      return promise
        .then((res) => {
          setPending(false)
          return new Promise((resolve) => resolve(res))
        })
        .catch((error) => console.log(error))
    },
    [action],
  )

  const clearTimerRef = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
  }, [])

  useEffect(() => {
    clearTimerRef()

    timerRef.current = setTimeout(() => {
      setLoading(pending)
    }, wait)

    return clearTimerRef
  }, [wait, pending, clearTimerRef])

  return [actionWithPending as A, loading]
}
