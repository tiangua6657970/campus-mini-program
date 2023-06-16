export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

/**
 * 深度合并
 * @param objs
 */
export function deepMerge(...objs: any[]): any {
  const result = Object.create(null)
  objs.forEach(obj => {
    if (obj) {
      Object.keys(obj).forEach(key => {
        const val = obj[key]
        if (isPlainObject(val)) {
          if (isPlainObject(result[key])) {
            result[key] = deepMerge(result[key], val)
          } else {
            result[key] = deepMerge(val)
          }
        } else {
          result[key] = val
        }
      })
    }
  })
  return result
}
let timeout: number | null | undefined = null
export function debounce(func: Function, wait = 500, immediate = false) {
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout)
  // 立即执行，此类情况一般用不到
  if (immediate) {
    const callNow = !timeout
    timeout = setTimeout(function () {
      timeout = null
    }, wait)
    if (callNow) typeof func === 'function' && func()
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func()
    }, wait)
  }
}

export function calculateNewTime(startTime: string, endTime: string) {
  const start = new Date(startTime)
  const end = new Date(endTime)

  const startStr = `${start.getFullYear()}年 ${start.getMonth() + 1}月${start.getDate()}日 ${start.getHours()}:00`
  const endStr = `${end.getHours()}:00`

  return startStr + `-${endStr}`
}

export function formatDateStartByMonth(time: string) {
  const dateObj = new Date(time)
  const month = dateObj.getMonth() + 1
  const date = dateObj.getDate()
  const hour = dateObj.getHours()
  const minute = dateObj.getMinutes()

  return `${month}月${date}日 ${hour}:${minute}`
}