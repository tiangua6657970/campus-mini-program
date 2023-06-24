import { reactive } from 'vue'
import { __HISTORY__ } from '@/common/keys'

interface HistoryStoreType {
  list: Array<string>
  add: (item: string) => void
  remove: (item: string) => void
  clear: () => void
  _saveToLocal: () => void
}

const MAX_COUNT = 8

function getLocalHistoryStore(): string[] {
  try {
    const result = uni.getStorageSync(__HISTORY__)
    if (Object.prototype.toString.call(result) === '[object Array]') {
      return result
    } else {
      return []
    }
  } catch (err) {
    console.log('[getLocalHistoryStore err]', err)
    return []
  }
}

export const historyStore = reactive<HistoryStoreType>({
  list: getLocalHistoryStore(),
  add(item: string) {
    if (item) {
      const index = this.list.findIndex(_ => _ === item)
      if (index === -1) {
        this.list.unshift(item)
        if (this.list.length > MAX_COUNT) {
          this.list.pop()
        }
      } else {
        this.list.splice(index,1)
        this.list.unshift(item)
      }
      this._saveToLocal()
    }
  },
  remove(item) {
    const index = this.list.findIndex(_ => _ === item)
    if (index !== -1) {
      this.list.splice(index, 1)
      this._saveToLocal()
    }
  },
  clear() {
    this.list = []
    this._saveToLocal()
  },
  _saveToLocal() {
    uni.setStorageSync(__HISTORY__, this.list)
  }
})
