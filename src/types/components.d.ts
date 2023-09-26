/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import type XpGuess from '@/components/XpGuess.vue'
import type XpSwiper from '@/components/XpSwiper.vue'
import 'vue'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    XpSwiper: typeof XpSwiper
    XpGuess: typeof XpGuess
  }
}
export type XpGuessInstance = InstanceType<typeof XpGuess>
export type XpSwiperInstance = InstanceType<typeof XpSwiper>
