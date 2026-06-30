import { useCallback, useState } from 'react'

export interface SubmitState {
  isSubmitting: boolean
  error: unknown
}

export function useSubmitState<TArgs extends unknown[], TResult>(
  submit: (...args: TArgs) => Promise<TResult>,
) {
  const [state, setState] = useState<SubmitState>({
    isSubmitting: false,
    error: null,
  })

  const execute = useCallback(
    async (...args: TArgs): Promise<TResult> => {
      setState({ isSubmitting: true, error: null })

      try {
        const result = await submit(...args)
        setState({ isSubmitting: false, error: null })
        return result
      } catch (error) {
        setState({ isSubmitting: false, error })
        throw error
      }
    },
    [submit],
  )

  const reset = useCallback(() => {
    setState({ isSubmitting: false, error: null })
  }, [])

  return { ...state, execute, reset }
}
