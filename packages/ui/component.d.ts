import Icon from './src/icon/test.vue'
import Input from './src/input/input.vue'

declare module 'vue' {
  export interface GlobalComponents {
    Icon: typeof Icon,
    Input: typeof Input
  }
} 