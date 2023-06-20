import { ref } from 'vue'
import { toast } from '@/common/utils'

export function useCode() {
  const tips = ref('')
  const seconds = ref(60)
  const uCodeRef = ref()

  function end(ev: string) {
    console.log(ev, 'end')
  }

  function start(ev: string) {
    console.log(ev, 'start')
  }

  function codeChange(ev: string) {
    tips.value = ev
  }
  function getCode() {
    if (uCodeRef.value.canGetCode) {
      uni.showLoading({ title: '正在获取验证码' }).then()
      setTimeout(() => {
        uni.hideLoading()
        toast('验证码已发送')
        uCodeRef.value.start()
      }, 2000)
    } else {
      toast('倒计时结束后再发送')
    }
  }
  return {
    tips,
    seconds,
    uCodeRef,
    start,
    end,
    codeChange,
    getCode
  }
}