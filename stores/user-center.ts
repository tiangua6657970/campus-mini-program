import { computed, reactive } from "vue";
import { __USERINFO__ } from '@/common/keys'

function getLocalUserinfoStore(): Userinfo {
  try {
    return uni.getStorageSync(__USERINFO__)
  } catch (err) {
    console.log('[getLocalUserinfoStore err]', err)
    return {} as unknown as Userinfo
  }
}

export const useUserinfoStore = reactive({
  data: getLocalUserinfoStore(),
  update(userinfo: Userinfo) {
    this.data = userinfo
    this.saveToLocal()
  },
  saveToLocal() {
    uni.setStorageSync(__USERINFO__, this.data)
  }
})