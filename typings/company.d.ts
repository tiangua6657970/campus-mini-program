/**
 * company，企业信息表
 */
/**
 * company，企业信息表
 */
interface Company {
  /**
   * 公司地址
   */
  address?: string;
  /**
   * 公司全称
   */
  companyFullName: string;
  /**
   * 公司简称
   */
  companyShortName?: string;
  /**
   * 公司介绍
   */
  content?: string;
  /**
   * 下班时间
   */
  dayEndTime: string;
  /**
   * 上班时间
   */
  dayStartTime: string;
  /**
   * 联系人
   */
  enterpriseContact?: string;
  /**
   * 联系人邮箱
   */
  enterpriseEmail?: string;
  /**
   * 联系人电话
   */
  enterpriseTel?: string;
  /**
   * 融资情况
   */
  financingState?: string;
  /**
   * ID
   */
  id: number;
  /**
   * 行业id
   */
  industryId?: number;
  /**
   * 行业名称
   */
  industryName: string;
  /**
   * 法人手机号
   */
  legalPersonMobile?: string;
  /**
   * 法人
   */
  legalPersonName?: string;
  /**
   * logo
   */
  logo: string;
  /**
   * 我的职位（暂定）
   */
  position?: string;
  /**
   * 人员规模
   */
  staffSize?: string;
  /**
   * 状态(暂定 0->待认证审核，1->认证审核通过，-1->认证审核不通过)
   */
  status?: string;
  /**
   * 福利（如：双休,五险,年假）
   */
  welfare?: string;
  /**
   * 工作日（星期一，星期二）
   */
  workDays?: string;
}