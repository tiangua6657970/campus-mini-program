import { reactive, ref } from "vue";

/**
 * 验证电子邮箱格式
 */
function email(value: string) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value)
}

/**
 * 验证手机格式
 */
function mobile(value: string) {
  return /^1[23456789]\d{9}$/.test(value)
}

/**
 * 验证身份证号码
 */
function idCard(value: string) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value)
}

export const formRulesTest = {
  email,
  mobile,
  idCard
}
export const placeholders = {
  title: '请输入标题',
  name: '请输入姓名',
  placeholderType: '请选择类型',
  placeholderIndustry: '请选择行业',
  paragraph: '请输入说明',
  majorField: '请输入专业',
  id: '请输入身份证号',
  idCardCopy: '请上传身份证附件',
  phone: '请输入手机号',
  email: '请输入邮箱地址',
  placeholderAddress: '请选择地址',
  placeholderValidTime: '请输入有效时间',
  code: '请输入验证码',
  password: '请输入密码',
  studentCode: '请输入学号',
  confirmPassword: '请确认密码',
  newPassword: '请输入新密码',
  oldPassword: '请确认新密码'
}
export const formRules = {
  title: [
    {
      required: true,
      message: placeholders.title,
      trigger: ['blur']
    }
  ],
  name: [
    {
      required: true,
      message: placeholders.name,
      trigger: ['blur']
    }
  ],
  placeholderType: [
    {
      required: true,
      message: placeholders.placeholderType,
      trigger: ['blur']
    }
  ],
  placeholderIndustry: [
    {
      required: true,
      message: placeholders.placeholderIndustry,
      trigger: ['blur']
    }
  ],
  paragraph: [
    {
      required: true,
      message: placeholders.paragraph,
      trigger: ['blur']
    }
  ],
  majorField: [
    {
      required: true,
      message: placeholders.majorField,
      trigger: ['blur']
    }
  ],
  studentCode: [
    {
      required: true,
      message: placeholders.studentCode,
      trigger: ['blur']
    }
  ],
  id: [
    {
      required: true,
      message: placeholders.id,
      trigger: ['blur']
    },
    {
      required: true,
      validator: (rule: any, value: any) => {
        return formRulesTest.idCard(value)
      },
      message: '请输入合法的身份证号',
      trigger: ['blur']
    }
  ],
  idCardCopy: [
    {
      required: true,
      message: placeholders.idCardCopy,
      trigger: ['blur']
    }
  ],
  phone: [
    {
      required: true,
      message: placeholders.phone,
      trigger: ['blur']
    },
    {
      required: true,
      validator: (rule: any, value: any) => {
        return formRulesTest.mobile(value)
      },
      message: '请输入合法的手机号',
      trigger: ['blur']
    }
  ],
  email: [
    {
      required: true,
      message: placeholders.email,
      trigger: ['blur']
    }
  ],
  placeholderAddress: [
    {
      required: true,
      message: placeholders.placeholderAddress,
      trigger: ['blur']
    }
  ],
  placeholderValidTime: [
    {
      required: true,
      message: placeholders.placeholderValidTime,
      trigger: ['blur']
    }
  ],
  code: [
    {
      required: true,
      message: placeholders.code,
      trigger: ['blur']
    }
  ],
  password: [
    {
      required: true,
      message: placeholders.password,
      trigger: ['blur']
    }
  ]
}

export function getRuleByMessage<S extends string>(...messages: S[]) {
  return messages.map(msg => {
    return  {
      required: true,
      message: msg,
      trigger: ['blur']
    }
  })
}

type FormFields = Record<string, any>
type FormValues<T extends FormFields> = {
  [K in keyof T]: any
}

export default function useForm<T extends FormFields>(fields: Array<keyof T>) {
  const formRef = ref()
  const initialValues = {}
  const rules = {} as T
  fields.forEach(field => {
    // @ts-ignore
    initialValues[field] = ''
    // @ts-ignore
    rules[field] = formRules[field]
  })
  const form = reactive(initialValues as  T)

  return {
    formRef,
    form,
    rules,
    placeholders
  }
}
