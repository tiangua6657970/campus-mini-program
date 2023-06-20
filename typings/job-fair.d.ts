/**
 * 双选会数据模型
 */
interface JobFair {
  /**
   * 地址
   */
  address?: string
  /**
   * 学校ID
   */
  collegeId?: number
  /**
   * 负责人
   */
  director?: string
  /**
   * 结束时间
   */
  endTime: string
  /**
   * 参会企业数
   */
  enterpariseCount?: number
  /**
   * 双选会ID
   */
  id?: number
  /**
   * 在招职位数
   */
  jobCount?: number
  /**
   * 职位ids
   */
  jobIds?: string
  /**
   * 开始时间
   */
  startTime: string
  /**
   * 参与人数
   */
  studentCount?: number
  /**
   * 电话
   */
  tel?: string
  /**
   * 双选会标题
   */
  title?: string
  /**
   * 双选会状态
   */
  status?: 1 | 2 | 3
}
/**
 * 宣讲会数据模型
 */
interface EmployerTalk {
  /**
   * 报名结束时间
   */
  applyEndTime: string;
  /**
   * 报名开始时间
   */
  applyStartTime: string;
  /**
   * 学校ID
   */
  collegeId: number;
  /**
   * 宣讲会详情
   */
  content: string;
  /**
   * 院系名
   */
  depatmentName: string;
  /**
   * 结束时间
   */
  endTime: string;
  enterprise: Company;
  /**
   * 企业ID
   */
  enterpriseId: number;
  id: number;
  /**
   * 职位ids
   */
  jobIds: string;
  jobTags: string;
  meetingRoom: MeetingRoom;
  /**
   * 开始时间
   */
  startTime: string;
  /**
   * 报名人数
   */
  studentCount: number;
  /**
   * 宣讲会标题
   */
  title: string;
}
