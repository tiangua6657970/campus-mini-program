interface PagingParams {
  pageNum?: number
  pageSize?: number
}

interface Id {
  id: string

  [prop: string]: any
}

interface Ids {
  ids: string
}

declare module '@dcloudio/uni-app' {
  export function onLaunch(options?: {}): void

  export function onShow(options?: {}): void

  export function onHide(): void

  export function onError(error?: string): void

  export function onPageNotFound(options?: {}): void

  export function onUniNViewMessage(event?: {
    data?: string
    success?: () => void
    fail?: () => void
    complete?: () => void
  }): void

  // 导出页面的生命周期函数
  export function onLoad(callback: (this: void, query?: Record<string, any>) => void): void

  export function onShow(callback: (this: void) => void): void

  export function onReady(callback: (this: void) => void): void

  export function onHide(callback: (this: void) => void): void

  export function onUnload(callback: (this: void) => void): void

  export function onPullDownRefresh(callback: (this: void) => void): void

  export function onReachBottom(callback: (this: void) => void): void

  export function onShareAppMessage(
    callback: (this: void, options?: { from?: 'button' | 'menu'; target?: {} }) => {} | null | undefined
  ): void

  export function onPageScroll(callback: (this: void, options?: { scrollTop?: number }) => void): void

  export function onResize(callback: (this: void) => void): void

  export function onTabItemTap(
    callback: (
      this: void,
      options?: {
        index?: number
        pagePath?: string
        text?: string
      }
    ) => void
  ): void

  export function onNavigationBarButtonTap(callback: (this: void, options?: { index?: number }) => void): void

  export function onBackPress(callback: (this: void) => void): void
}
