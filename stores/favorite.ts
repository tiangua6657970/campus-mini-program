import { __FAVORITE__ } from '@/common/keys'
import { reactive } from 'vue'

function getLocalFavoriteStore(): string[] {
  try {
    const result = uni.getStorageSync(__FAVORITE__)
    if (Object.prototype.toString.call(result) === '[object Array]') {
      return result
    } else {
      return []
    }
  } catch (err) {
    console.log('getLocalFavoriteStore err]', err)
    return []
  }
}
export const favoriteStore = reactive({
  list: getLocalFavoriteStore(),
  add(item: string) {
    if (this._findIndex(item) === -1) {
      this.list.unshift(item)
      this._saveToLocal()
    }
  },
  remove(item: string) {
    const index = this._findIndex(item)
    if (index !== -1) {
      this.list.splice(index, 1)
      this._saveToLocal()
    }
  },
  toggle(item: string) {
    const index = this._findIndex(item)
    if (index === -1) {
      this.list.unshift(item)
    } else {
      this.list.splice(index, 1)
    }
    this._saveToLocal()
    return index !== -1
  },
  clear() {
    this.list = []
    this._saveToLocal()
  },
  _saveToLocal() {
    uni.setStorageSync(__FAVORITE__, this.list)
  },
  _findIndex(item: string) {
    return this.list.findIndex(_ => _ === item)
  }
})
