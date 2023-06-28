/**
 * tInterview，面试
 */
interface Interview {
  /**
   * 地址
   */
  address: string;
  /**
   * 约定时间
   */
  agreeTime: string;
  /**
   * 联系人
   */
  contact: string;
  /**
   * 创建时间
   */
  createTime: string;
  /**
   * 企业ID
   */
  enterpriseId: number;
  /**
   * 评语
   */
  evaluate: string;
  /**
   * ID
   */
  id: number;
  job: Job;
  /**
   * 职位ID
   */
  jobId: number;
  /**
   * 不符合原因
   */
  notConformReason: string;
  /**
   * 不符合类型
   */
  notConformType: string;
  /**
   * 备注
   */
  remark: string;
  /**
   * 面试结果
   */
  result: string;
  /**
   * 状态
   */
  status: string;
  /**
   * 学生ID
   */
  studentId: number;
  /**
   * 电话
   */
  tel: string;
  /**
   * 更新时间
   */
  updateTime: string;
}