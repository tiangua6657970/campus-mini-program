/**
 * resume
 */
interface Resume {
  expectedJobs: ExpectedJob[]
  projectExperiences: ResumeProjectExperience[]
  studentInfo: Student
  workExperiences: ResumeWorkExperience[]
}

/**
 * expected_job，求职意向表
 */
interface ExpectedJob {
  /**
   * 到岗时间
   */
  arrivalDate?: string
  /**
   * 创建时间
   */
  createTime?: Date
  /**
   * 期望城市
   */
  expectedCity?: string
  /**
   * 期望行业
   */
  expectedIndustryName?: string
  /**
   * 期望岗位
   */
  expectedPosition?: string
  /**
   * 期望省份
   */
  expectedProvince?: string
  /**
   * 期望薪资
   */
  expectedSalary?: string
  /**
   * ID
   */
  id: number
  /**
   * 学生ID
   */
  studentId?: number
  /**
   * 更新时间
   */
  updateTime?: Date
  /**
   * 工作类型
   */
  workType?: string
}

/**
 * resume_project_experience，简历-项目经验
 */
interface ResumeProjectExperience {
  /**
   * 创建时间
   */
  createTime?: Date
  /**
   * 结束时间
   */
  endDate?: Date
  /**
   * ID
   */
  id: number
  /**
   * 岗位名称
   */
  positionName?: string
  /**
   * 项目介绍
   */
  projectContent?: string
  /**
   * 项目链接
   */
  projectLink?: string
  /**
   * 项目名称
   */
  projectName?: string
  /**
   * 职责描述
   */
  responsibilities?: string
  /**
   * 简历ID
   */
  resumeId?: number
  /**
   * 开始时间
   */
  startDate?: Date
  /**
   * 更新时间
   */
  updateTime?: Date
}

/**
 * student，学生信息表
 */
interface Student {
  /**
   * 籍贯区域
   */
  areaCode?: string;
  /**
   * 头像
   */
  avatarUrl: string;
  /**
   * 出生年月
   */
  birthdate: string;
  /**
   * 籍贯
   */
  birthPlaceCity: string;
  /**
   * 籍贯城市
   */
  cityCode?: string;
  /**
   * 所在班级
   */
  className?: string;
  /**
   * 入学日期
   */
  collegeAdmissionDate?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 院系名称
   */
  departmentName?: string;
  /**
   * 邮箱
   */
  email: string;
  /**
   * 家庭地址
   */
  homeAddress?: string;
  /**
   * ID
   */
  id: number;
  /**
   * 身份证号
   */
  idCard?: string;
  /**
   * 自我评价
   */
  introduce: string;
  /**
   * 专业名称
   */
  majorName?: string;
  /**
   * 手机号
   */
  mobile: string;
  /**
   * 民族
   */
  nation?: string;
  /**
   * 政治面貌
   */
  politicalStatus?: string;
  /**
   * 籍贯省份
   */
  provinceCode?: string;
  /**
   * 姓名
   */
  realName: string;
  /**
   * 性别
   */
  sex?: string;
  /**
   * 技能
   */
  skills: string;
  /**
   * 状态(0->认证中, 1->认证成功)
   */
  status?: string;
  /**
   * 学号
   */
  studentCode?: string;
  /**
   * 更新时间
   */
  updateTime?: string;
}
/**
 * resume_work_experience，简历-工作经验
 */
interface ResumeWorkExperience {
  /**
   * 公司名称
   */
  companyName?: string
  /**
   * 创建时间
   */
  createTime?: Date
  /**
   * 离职时间
   */
  endDate?: Date
  /**
   * ID
   */
  id: number
  /**
   * 行业名称
   */
  industryName?: string
  /**
   * 岗位ID
   */
  positionId: number
  /**
   * 岗位名称
   */
  positionName?: string
  /**
   * 简历ID
   */
  resumeId: number
  /**
   * 入职时间
   */
  startDate?: Date
  /**
   * 更新时间
   */
  updateTime?: Date
  /**
   * 工作内容
   */
  workContent?: string
  /**
   * 工作业绩
   */
  workPerformance?: string
}
