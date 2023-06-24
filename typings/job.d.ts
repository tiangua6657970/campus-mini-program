/**
 * 职位详情数据模型
 */
interface Job {
  /**
   * 地址
   */
  address: string
  /**
   * 区域代码
   */
  areaCode: string
  /**
   * 城市代码
   */
  cityCode: string
  /**
   * 城市
   */
  city: string
  /**
   * 专业ID
   */
  depatmentId: number
  /**
   * 专业名称
   */
  depatmentName: string
  /**
   * 学历要求
   */
  educationLevel: string
  enterprise: Company
  /**
   * 企业ID
   */
  enterpriseId: number
  /**
   * ID
   */
  id: string
  /**
   * 任职要求
   */
  jobRequirement: string
  /**
   * 岗位职责
   */
  jobResponsibility: string
  /**
   * 最高薪资
   */
  maxSalary: number
  /**
   * 最低薪资
   */
  minSalary: number
  /**
   * 招聘人数
   */
  needNum: number
  /**
   * 岗位名称
   */
  positionName: string
  /**
   * 省份代码
   */
  provinceCode: string
  /**
   * 状态
   */
  status: string
  /**
   * 工作经验
   */
  workExperience: number
  /**
   * 工作类型
   */
  workType: string
}
