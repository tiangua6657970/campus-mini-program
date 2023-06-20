import { __TOKEN__ } from '@/common/keys'

export function joinUrl(path: string, params: any = {}) {
  const isString = typeof params === 'string'
  return (
    path +
    '?' +
    (isString
      ? params
      : Object.entries(params)
          .map(item => item.join('='))
          .join('&'))
  )
}

export const pagePaths = {
  // 登录
  login: '/pages/login/login',
  // 首页
  index: '/pages/index/index',
  // 角色选择
  roleSelection: '/pages/role-selection/role-selection',
  // 学生认证
  verification: '/pages/verification/verification',
  // 企业认证
  companyVerification: '/pages/company-verification/company-verification',
  // 职位搜索
  jobSearch: '/pages/job-search/job-search',
  // 职位详情
  jobDetails: '/pages/job-details/job-details',
  // 招聘会
  jobFair: '/pages/job-fair/job-fair',
  // 招聘会详情
  jobFairDetails: '/pages/job-fair-details/job-fair-details',
  // 宣讲会详情
  employerTalkDetails: '/pages/employer-talk-details/employer-talk-details',
  // 企业详情
  companyDetails: '/pages/company-details/company-details',
  // 消息中心
  messageCenter: '/pages/message-center/message-center',
  // 我的
  userCenter: '/pages/user-center/user-center',
  // 三方协议
  termsOfService: '/pages/terms-of-service/terms-of-service',
  // 签名
  signature: '/pages/signature/signature',
  // 已投简历
  appliedResume: '/pages/applied-resume/applied-resume',
  // 面试
  interview: '/pages/interview/interview',
  // 面试详情
  interviewDetails: '/pages/interview-details/interview-details',
  // 我的简历
  myResume: '/pages/my-resume/my-resume',
  // 简历详情
  resumeDetails: '/pages/resume-details/resume-details',
  // 新增简历
  addResume: '/pages/add-resume/add-resume',
  // 简历新增联系方式
  resumeAddContactInfo: '/pages/resume-add-contact-info/resume-add-contact-info',
  // 简历新增个人描述
  resumeAddPersonalDescription: '/pages/resume-add-personal-description/resume-add-personal-description',
  // 简历新增项目经历
  resumeAddProjectExperience: '/pages/resume-add-project-experience/resume-add-project-experience',
  // 简历新增工作经历
  resumeAddWorkExperience: '/pages/resume-add-work-experience/resume-add-work-experience',
  // 简历新增求职意向
  resumeAddJobPreference: '/pages/resume-add-job-preference/resume-add-job-preference',
  // 设置
  settings: '/pages/settings/settings',
  // 面试邀请详情
  interviewInvitationDetails: '/pages/interview-invitation-details/interview-invitation-details',
  // 入职邀请详情
  jobOfferDetails: '/pages/job-offer-details/job-offer-details',
  // 已收藏职位
  favoriteJobs: '/pages/favorite-jobs/favorite-jobs',
  // 反馈建议
  feedback: '/pages/feedback/feedback',
  // 隐私安全
  privacyAndSecurity: '/pages/privacy-and-security/privacy-and-security',

  // 简历搜索
  comResumeSearch: '/pages/com-resume-search/com-resume-search',
  // 收到简历
  comReceivedResumes: '/pages/com-received-resumes/com-received-resumes',
  // 不合适
  comRefusedResumes: '/pages/com-refused-resumes/com-refused-resumes',
  // 面试邀请
  comInterviewInvitation: '/pages/com-interview-invitation/com-interview-invitation',
  // 面试评分
  comInterviewScore: '/pages/com-interview-score/com-interview-score',
  // 面试邀请详情
  comInterviewDetails: '/pages/com-interview-details/com-interview-details',
  // 对话
  comConversation: '/pages/com-conversation/com-conversation',
  // 职位管理
  comJobManagement: '/pages/com-job-management/com-job-management',
  // 职位编辑
  comJobEdit: '/pages/com-job-edit/com-job-edit',
  // 职位新增
  comJobAdd: '/pages/com-job-add/com-job-add',
  // 简历过滤
  comResumeFilter: '/pages/com-resume-filter/com-resume-filter',
  // 企业设置
  comCompanySettings: '/pages/com-company-settings/com-company-settings',
  // 企业设置工作时间
  comCompanyWorkTimeSettings: '/com-company-settings-workTime/com-company-settings-workTime',
  // 企业设置福利
  comCompanyBenefitsSettings: '/pages/com-company-benefits-settings/com-company-benefits-settings',
  // 企业设置联系方式
  comCompanyContactSettings: '/pages/com-company-contact-settings/com-company-contact-settings',
  // 申请宣讲会
  comCampusRecruitingFairApplication:
    'com-campus-recruiting-fair-application/com-campus-recruiting-fair-application',
  // 申请宣讲会会议室预约
  comCampusRecruitingFairRoomReservation:
    '/com-campus-recruiting-fair-room-reservation/com-campus-recruiting-fair-room-reservation'
}


declare global {
  type PageName = keyof typeof pagePaths
}
/**
 * 必须登录才能访问的页面
 * @type {string[]}
 */
const loginRequiredPages: any[] = []

export function navigateTo(path: string, params = {}) {
  if (loginRequiredPages.findIndex(item => item === path) !== -1) {
    if (!uni.getStorageSync(__TOKEN__)) {
      navigateToLogin()
      return
    }
  }
  const url = joinUrl(path, params)
  uni.navigateTo({
    url: url,
    fail: err => console.log('[uni.navigateTo err]', err)
  })
}


export function navigateToLogin() {
  navigateTo(pagePaths.login)
}
export function navigateToRoleSelection() {
  navigateTo(pagePaths.roleSelection)
}

export function switchTabToIndex(arg = {}) {
  uni.switchTab({ url: pagePaths.index })
}

export function navigateToVerification(navTitle: string) {
  navigateTo(pagePaths.verification, { navTitle })
}

export function navigateToCompanyVerification() {
  navigateTo(pagePaths.companyVerification)
}

export function navigateToJobSearch() {
  navigateTo(pagePaths.jobSearch)
}

export function navigateToJobDetails(item: Job) {
  navigateTo(pagePaths.jobDetails, { id: item.id })
}

export function navigateToJobFair() {
  navigateTo(pagePaths.jobFair)
}

export function navigateToJobFairDetails(item: JobFair) {
  navigateTo(pagePaths.jobFairDetails, { id: item.id })
}

export function navigateToCompanyPresentationDetails(item: EmployerTalk) {
  navigateTo(pagePaths.employerTalkDetails, { id: item.id })
}

export function navigateToCompanyDetails(item: Company) {
  navigateTo(pagePaths.companyDetails, { id: item.id })
}

export function navigateToTermsOfService() {
  navigateTo(pagePaths.termsOfService)
}

export function navigateToSignature() {
  navigateTo(pagePaths.signature)
}

export function navigateToAppliedResume() {
  navigateTo(pagePaths.appliedResume)
}

export function navigateToInterview() {
  navigateTo(pagePaths.interview)
}

export function navigateToInterviewDetails() {
  navigateTo(pagePaths.interviewDetails)
}

export function navigateToMyResume() {
  navigateTo(pagePaths.myResume)
}

export function navigateToResumeDetails() {
  navigateTo(pagePaths.resumeDetails)
}

export function navigateToAddResume() {
  navigateTo(pagePaths.addResume)
}

export function navigateToResumeAddContactInfo() {
  navigateTo(pagePaths.resumeAddContactInfo)
}

export function navigateToResumeAddPersonalDescription() {
  navigateTo(pagePaths.resumeAddPersonalDescription)
}

export function navigateToResumeAddProjectExperience() {
  navigateTo(pagePaths.resumeAddProjectExperience)
}

export function navigateToResumeAddWorkExperience() {
  navigateTo(pagePaths.resumeAddWorkExperience)
}

export function navigateToResumeAddJobPreference() {
  navigateTo(pagePaths.resumeAddJobPreference)
}

export function navigateToSettings() {
  navigateTo(pagePaths.settings)
}

export function navigateToInterviewInvitationDetails() {
  navigateTo(pagePaths.interviewInvitationDetails)
}

export function navigateToJobOfferDetails() {
  navigateTo(pagePaths.jobOfferDetails)
}

export function navigateToFavoriteJobs() {
  navigateTo(pagePaths.favoriteJobs)
}

export function navigateToFeedback() {
  navigateTo(pagePaths.feedback)
}

export function navigateToPrivacyAndSecurity() {
  navigateTo(pagePaths.privacyAndSecurity)
}
