import XpSwiper from '@/components/XpSwiper.vue'
import XpGuess from '@/components/XpGuess.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    XpSwiper: typeof XpSwiper
    XpGuess: typeof XpGuess
  }
}
