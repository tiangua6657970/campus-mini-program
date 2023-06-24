const industryList = [
  {
    key: '100',
    text: '销售',
    children: [
      { key: '101', text: '销售总监' },
      { key: '102', text: '销售经理' },
      { key: '103', text: '销售主管' },
      {
        key: '104',
        text: '销售专员'
      },
      { key: '105', text: '渠道/分销管理' },
      { key: '106', text: '渠道/分销专员' },
      { key: '107', text: '经销商' },
      { key: '108', text: '客户经理' },
      { key: '109', text: '客户代表' },
      { key: '110', text: '其他' }
    ]
  },
  {
    key: '200',
    text: '客户服务',
    children: [
      { key: '201', text: '客服经理' },
      { key: '202', text: '客服主管' },
      { key: '203', text: '客服专员' },
      { key: '204', text: '客服协调' },
      { key: '205', text: '客服技术支持' },
      { key: '206', text: '其他' }
    ]
  },
  {
    key: '300',
    text: '计算机/互联网',
    children: [
      { key: '301', text: 'IT技术总监' },
      { key: '302', text: 'IT技术经理' },
      { key: '303', text: 'IT工程师' },
      { key: '304', text: '系统管理员' },
      {
        key: '305',
        text: '测试专员'
      },
      { key: '306', text: '运营管理' },
      { key: '307', text: '网页设计' },
      { key: '308', text: '网站编辑' },
      {
        key: '309',
        text: '网站产品经理'
      },
      { key: '310', text: '其他' }
    ]
  },
  {
    key: '400',
    text: '通信/电子',
    children: [
      { key: '401', text: '通信技术' },
      { key: '402', text: '电子技术' },
      { key: '403', text: '其他' }
    ]
  },
  {
    key: '500',
    text: '生产/制造',
    children: [
      {
        key: '501',
        text: '工厂经理'
      },
      { key: '502', text: '工程师' },
      { key: '503', text: '项目主管' },
      { key: '504', text: '营运经理' },
      {
        key: '505',
        text: '营运主管'
      },
      { key: '506', text: '车间主任' },
      { key: '507', text: '物料管理' },
      { key: '508', text: '生产领班' },
      {
        key: '509',
        text: '操作工人'
      },
      { key: '510', text: '安全管理' },
      { key: '511', text: '其他' }
    ]
  },
  {
    key: '600',
    text: '物流/仓储',
    children: [
      { key: '601', text: '物流经理' },
      { key: '602', text: '物流主管' },
      { key: '603', text: '物流专员' },
      { key: '604', text: '仓库经理' },
      { key: '605', text: '仓库管理员' },
      { key: '606', text: '货运代理' },
      { key: '607', text: '集装箱业务' },
      { key: '608', text: '海关事物管理' },
      { key: '609', text: '报单员' },
      { key: '610', text: '快递员' },
      { key: '611', text: '其他' }
    ]
  },
  {
    key: '700',
    text: '商贸/采购',
    children: [
      { key: '701', text: '商务经理' },
      { key: '702', text: '商务专员' },
      { key: '703', text: '采购经理' },
      { key: '704', text: '采购专员' },
      { key: '705', text: '外贸经理' },
      { key: '706', text: '外贸专员' },
      { key: '707', text: '业务跟单' },
      { key: '708', text: '报关员' },
      {
        key: '709',
        text: '其他'
      }
    ]
  },
  {
    key: '800',
    text: '人事/行政',
    children: [
      { key: '801', text: '人事总监' },
      { key: '802', text: '人事经理' },
      { key: '803', text: '人事主管' },
      { key: '804', text: '人事专员' },
      { key: '805', text: '招聘经理' },
      { key: '806', text: '招聘专员' },
      {
        key: '807',
        text: '培训经理'
      },
      { key: '808', text: '培训专员' },
      { key: '809', text: '秘书' },
      { key: '810', text: '文员' },
      {
        key: '811',
        text: '后勤'
      },
      { key: '812', text: '其他' }
    ]
  },
  {
    key: '900',
    text: '高级管理',
    children: [
      { key: '901', text: '总经理' },
      {
        key: '902',
        text: '副总经理'
      },
      { key: '903', text: '合伙人' },
      { key: '904', text: '总监' },
      { key: '905', text: '经理' },
      {
        key: '906',
        text: '总裁助理'
      },
      { key: '907', text: '其他' }
    ]
  },
  {
    key: '1000',
    text: '广告/市场',
    children: [
      { key: '1001', text: '广告客户经理' },
      { key: '1002', text: '广告客户专员' },
      { key: '1003', text: '广告设计经理' },
      { key: '1004', text: '广告设计专员' },
      {
        key: '1005',
        text: '广告策划'
      },
      { key: '1006', text: '市场营销经理' },
      { key: '1007', text: '市场营销专员' },
      { key: '1008', text: '市场策划' },
      { key: '1009', text: '市场调研与分析' },
      { key: '1010', text: '市场拓展' },
      { key: '1011', text: '公关经理' },
      {
        key: '1012',
        text: '公关专员'
      },
      { key: '1013', text: '媒介经理' },
      { key: '1014', text: '媒介专员' },
      { key: '1015', text: '品牌经理' },
      {
        key: '1016',
        text: '品牌专员'
      },
      { key: '1017', text: '其他' }
    ]
  },
  {
    key: '1100',
    text: '传媒/艺术',
    children: [
      { key: '1101', text: '主编' },
      { key: '1102', text: '编辑' },
      { key: '1103', text: '作家' },
      { key: '1104', text: '撰稿人' },
      { key: '1105', text: '文案策划' },
      { key: '1106', text: '出版发行' },
      { key: '1107', text: '导演' },
      { key: '1108', text: '记者' },
      { key: '1109', text: '主持人' },
      { key: '1110', text: '演员' },
      { key: '1111', text: '模特' },
      { key: '1112', text: '经纪人' },
      { key: '1113', text: '摄影师' },
      { key: '1114', text: '影视后期制作' },
      { key: '1115', text: '设计师' },
      { key: '1116', text: '画家' },
      { key: '1117', text: '音乐家' },
      { key: '1118', text: '舞蹈' },
      { key: '1119', text: '其他' }
    ]
  },
  {
    key: '1200',
    text: '生物/制药',
    children: [
      {
        key: '1201',
        text: '生物工程'
      },
      { key: '1202', text: '药品生产' },
      { key: '1203', text: '临床研究' },
      { key: '1204', text: '医疗器械' },
      {
        key: '1205',
        text: '医药代表'
      },
      { key: '1206', text: '化工工程师' },
      { key: '1207', text: '其他' }
    ]
  },
  {
    key: '1300',
    text: '医疗/护理',
    children: [
      { key: '1301', text: '医疗管理' },
      { key: '1302', text: '医生' },
      { key: '1303', text: '心理医生' },
      { key: '1304', text: '药剂师' },
      { key: '1305', text: '护士' },
      { key: '1306', text: '兽医' },
      { key: '1307', text: '其他' }
    ]
  },
  {
    key: '1400',
    text: '金融/银行/保险',
    children: [
      { key: '1401', text: '投资' },
      { key: '1402', text: '保险' },
      { key: '1403', text: '金融' },
      {
        key: '1404',
        text: '银行'
      },
      { key: '1405', text: '证券' },
      { key: '1406', text: '其他' }
    ]
  },
  {
    key: '1500',
    text: '建筑/房地产',
    children: [
      { key: '1501', text: '建筑师' },
      { key: '1502', text: '工程师' },
      { key: '1503', text: '规划师' },
      { key: '1504', text: '景观设计' },
      { key: '1505', text: '房地产策划' },
      { key: '1506', text: '房地产交易' },
      { key: '1507', text: '物业管理' },
      {
        key: '1508',
        text: '其他'
      }
    ]
  },
  {
    key: '1600',
    text: '咨询/顾问',
    children: [
      { key: '1601', text: '专业顾问' },
      { key: '1602', text: '咨询经理' },
      { key: '1603', text: '咨询师' },
      { key: '1604', text: '培训师' },
      { key: '1605', text: '其他' }
    ]
  },
  {
    key: '1700',
    text: '法律',
    children: [
      { key: '1701', text: '律师' },
      { key: '1702', text: '律师助理' },
      { key: '1703', text: '法务经理' },
      {
        key: '1704',
        text: '法务专员'
      },
      { key: '1705', text: '知识产权专员' },
      { key: '1706', text: '其他' }
    ]
  },
  {
    key: '1800',
    text: '财会/审计',
    children: [
      { key: '1801', text: '财务总监' },
      { key: '1802', text: '财务经理' },
      { key: '1803', text: '财务主管' },
      {
        key: '1804',
        text: '会计'
      },
      { key: '1805', text: '注册会计师' },
      { key: '1806', text: '审计师' },
      { key: '1807', text: '税务经理' },
      {
        key: '1808',
        text: '税务专员'
      },
      { key: '1809', text: '成本经理' },
      { key: '1810', text: '其他' }
    ]
  },
  {
    key: '1900',
    text: '教育/科研',
    children: [
      { key: '1901', text: '教授' },
      { key: '1902', text: '讲师/助教' },
      { key: '1903', text: '中学教师' },
      { key: '1904', text: '小学教师' },
      { key: '1905', text: '幼师' },
      { key: '1906', text: '教务管理人员' },
      { key: '1907', text: '职业技术教师' },
      {
        key: '1908',
        text: '培训师'
      },
      { key: '1909', text: '科研管理人员' },
      { key: '1910', text: '科研人员' },
      { key: '1911', text: '其他' }
    ]
  },
  {
    key: '2000',
    text: '服务业',
    children: [
      { key: '2001', text: '餐饮管理' },
      { key: '2002', text: '厨师' },
      { key: '2003', text: '餐厅服务员' },
      { key: '2004', text: '酒店管理' },
      { key: '2005', text: '大堂经理' },
      { key: '2006', text: '酒店服务员' },
      {
        key: '2007',
        text: '导游'
      },
      { key: '2008', text: '美容师' },
      { key: '2009', text: '健身教练' },
      { key: '2010', text: '商场经理' },
      {
        key: '2011',
        text: '零售店店长'
      },
      { key: '2012', text: '店员' },
      { key: '2013', text: '保安经理' },
      { key: '2014', text: '保安人员' },
      {
        key: '2015',
        text: '家政服务'
      },
      { key: '2016', text: '其他' }
    ]
  },
  {
    key: '2100',
    text: '交通运输',
    children: [
      { key: '2101', text: '飞行员' },
      { key: '2102', text: '空乘人员' },
      { key: '2103', text: '地勤人员' },
      { key: '2104', text: '列车司机' },
      { key: '2105', text: '乘务员' },
      { key: '2106', text: '船长' },
      { key: '2107', text: '船员' },
      { key: '2108', text: '司机' },
      { key: '2109', text: '其他' }
    ]
  },
  {
    key: '2200',
    text: '政府机构',
    children: [
      { key: '2201', text: '公务员' },
      { key: '2202', text: '其他' }
    ]
  },
  {
    key: '2300',
    text: '军人/警察',
    children: []
  },
  { key: '2400', text: '农林牧渔', children: [] },
  { key: '2500', text: '自由职业', children: [] },
  {
    key: '2600',
    text: '在校学生',
    children: []
  },
  { key: '2700', text: '待业', children: [] },
  { key: '2800', text: '其他行业', children: [] },
  {
    key: '-1',
    text: '职业不限',
    children: []
  }
]
export default industryList