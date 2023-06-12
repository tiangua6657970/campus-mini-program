import { deepMerge } from '@/common/utils'

export type Methods = 'GET' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH'

export interface HttpRequestConfig {
  baseUrl?: string
  header?: Record<string, string>
  method?: Methods
  dataType?: string
  responseType?: XMLHttpRequestResponseType
  showLoading?: boolean
  loadingText?: string
  loadingTime?: number
  timer?: any
  loadingMask?: boolean
}

export interface HttpResponse {
  code: number
  data: any
}

export interface RequestOptions {
  url: string
  data?: any
  method?: Methods
  header?: Record<string, string>
  dataType?: string
  responseType?: XMLHttpRequestResponseType
}

interface interceptor {
  request?: (config: RequestOptions) => RequestOptions
  response?:(response: HttpResponse) => HttpResponse
}

export class HttpRequest {
  config: HttpRequestConfig = {
    baseUrl: '',
    header: {},
    method: 'GET',
    dataType: 'json',
    responseType: 'json',
    showLoading: true,
    loadingText: '请求中...',
    loadingTime: 800,
    loadingMask: true,
    timer: null
  }
  interceptor: interceptor = {}

  constructor(config: HttpRequestConfig) {
    this.config = deepMerge(this.config, config)
  }

  private combineURL(baseURL: string, relativeURL?: string): string {
    return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL
  }

  async request(options: RequestOptions): Promise<HttpResponse> {
    options.url = this.combineURL(this.config.baseUrl!, options.url)
    options.method = options.method || this.config.method
    options.data = options.data = {}
    options.header = options.header || this.config.header
    options.dataType = options.dataType || this.config.dataType
    options.responseType = options.responseType || this.config.responseType
    if (this.interceptor.request) {
      options = this.interceptor.request(options)
    }
    if (this.config.showLoading && !this.config.timer) {
      this.config.timer = setTimeout(() => {
        uni.showLoading({
          title: this.config.loadingText,
          mask: this.config.loadingMask
        })
        this.config.timer = null
      }, this.config.loadingTime)
    }
    const response = await uni.request(options as UniNamespace.RequestOptions)
    if (this.config.showLoading) {
      uni.hideLoading()
    }
    clearTimeout(this.config.timer)
    this.config.timer = null
    if (response.statusCode === 200) {
      return (this.interceptor.response
        ? this.interceptor.response(response.data as HttpResponse)
        : response.data) as any as Promise<HttpResponse>
    } else {
      return response.data as Promise<HttpResponse>
    }
  }
}
