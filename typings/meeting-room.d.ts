/**
 * meetingRoom，会议室表
 */
interface MeetingRoom {
  /**
   * 地址
   */
  address?: string;
  /**
   * 学校ID
   */
  collegeId?: number;
  /**
   * ID
   */
  id: number;
  /**
   * 名称
   */
  name?: string;
  /**
   * 座位
   */
  seat?: number;
  /**
   * 特色
   */
  special: string;
  /**
   * 状态
   */
  status?: string;
}
