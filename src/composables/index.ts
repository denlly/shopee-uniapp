import type { XpGuessInstance } from '@/types/components'
import { ref } from 'vue'

export const useGuessList = () => {
  const guessRef = ref<XpGuessInstance>()

  const onScrollToLower = () => {
    guessRef.value?.getMore()
  }
  return {
    guessRef,
    onScrollToLower,
  }
}
