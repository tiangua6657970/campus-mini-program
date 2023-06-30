<script>
  import { useUserinfoStore } from '@/stores/user-center'
  import { relaunchToLogin } from '@/common/navigates'

  export default {
    onLaunch: function () {
      if (!useUserinfoStore.data.type) {
        relaunchToLogin()
      }
      console.log('App Launch')
    },
    onShow: function () {
      console.log('App Show')
    },
    onHide: function () {
      console.log('App Hide')
    }
  }
</script>

<style lang="scss">
  /*每个页面公共css */
  @import './uni_modules/vk-uview-ui/index.scss';
  @import 'static/iconfont.css';
  @import 'common/style/components.scss';
</style>