import { computed, reactive, ref } from 'vue'
// @ts-ignore
import amap from '@/common/amap-wx.130'
import { toast } from '@/common/utils'

const locationData = reactive({
  // 如："南宁市西乡塘区衡阳西路11号"
  name: '',
  // 如：南宁市西乡塘区人民政府附近
  desc: '',
  // 纬度
  latitude: '',
  // 经度
  longitude: '',
  // 国
  country: '',
  // 省
  province: '',
  // 市
  city: '',
  // 区
  district: '',
  street: '',
  number: ''
})

export const currentCity = computed(() => locationData.city)
export const currentAddress = computed(() => {
  const { province, city, district } = locationData
  return `${province}-${city}-${district}`
})
export const currentAddressLine = computed(() => `${locationData.street}${locationData.number}`)

export const positionStatus = ref<'reposition' | 'positioning' | 'positionErr'>('reposition')
const positionStatusTextMap = {
  reposition: '重新定位',
  positioning: '正在定位',
  positionErr: '定位出错了'
}
export const positionStatusText = computed(() => positionStatusTextMap[positionStatus.value])

export function refresh() {
  positionStatus.value = 'positioning'
  const aMap = new amap.AMapWX({
    key: '20ae46e916db10f768635c6377ae3585'
  })
  aMap.getRegeo({
    success: (res: [any]) => {
      positionStatus.value = 'reposition'
      const [regeo] = res
      console.log(res, 'res')
      const {
        name,
        desc,
        latitude,
        longitude,
        regeocodeData: { addressComponent }
      } = regeo
      const { country, province, city, district, streetNumber } = addressComponent
      locationData.name = name
      locationData.desc = desc
      locationData.latitude = latitude
      locationData.longitude = longitude
      locationData.country = country
      locationData.province = province
      locationData.city = city
      locationData.district = district
      const { street, number } = streetNumber
      locationData.street = street
      locationData.number = number
    },
    fail: (err: any) => {
      positionStatus.value = 'positionErr'
      toast('获取地理位置失败，可重启小程序')
      console.log('[aMap.getRegeo err]', err)
    }
  })
}

const locationStore = {
  data: locationData,
  currentCity,
  currentAddress,
  currentAddressLine,
  positionStatusText,
  refresh
}
export default locationStore
