/**
 * userInfo，小程序用户表
 */
interface Userinfo {
  /**
   * 用户头像
   */
  avatarUrl: string;
  /**
   * 城市
   */
  city: string;
  /**
   * 国家
   */
  country?: string;
  /**
   * 创建时间
   */
  createTime: Date;
  /**
   * 性别    0-未知、1-男性、2-女性
   */
  gender?: number;
  /**
   * ID
   */
  id: number;
  /**
   * 手机号
   */
  mobile: string;
  /**
   * 关联的学生id/企业id
   */
  modelId: number;
  /**
   * 用户昵称
   */
  nickname: string;
  /**
   * openId
   */
  openId?: string;
  /**
   * 省份
   */
  province: string;
  /**
   * 用户类型
   */
  type: string;
  /**
   * unionId
   */
  unionId?: string;
  /**
   * 更新时间
   */
  updateTime?: Date;
}