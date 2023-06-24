<script setup lang="ts">
  import { useResumeStudentInfo } from '@/service/resume'
  import { computed, ref } from 'vue'

  const skillString =
    '音乐,电影,阅读,美食,旅游,写作,跳舞,绘画,摄影,手工,陶艺,瑜伽,健身,游泳,滑板,滑雪,攀岩,潜水,滑翔伞,编程,网络安全,数据分析,人工智能,云计算,数据库,网络编程,操作系统,机器学习,前端开发,后端开发'
  const { refresh } = useResumeStudentInfo()
  const selectedSkills = ref<{ name: string; selected: boolean }[]>([])
  const noData = computed(() => !selectedSkills.value.length)
  const skillList = computed(() => {
    return skillString.split(',').map(item => {
      const resultItem = { name: item, selected: false }
      if (selectedSkills.value.findIndex(_ => _.name === item) !== -1) {
        resultItem.selected = true
      }
      return resultItem
    })
  })
  refresh(student => {
    if (!student.skills) {
      return []
    }
    selectedSkills.value = student.skills.split(',').map(_ => ({ name: _, selected: true }))
  })
  function handleItemClick(item: any) {
    if (selectedSkills.value.findIndex(_ => _.name === item.name) === -1) {
      item.selected = true
      selectedSkills.value.push(item)
    }
  }

  function handleItemClose(item: any) {
    const index = selectedSkills.value.findIndex(_ => _.name === item.name)
    if (index !== -1) {
      selectedSkills.value.splice(index, 1)
    }
  }
  function save() {}
  refresh()
</script>
<template>
  <view class="resume-skills p-30">
    <view class="block bg-white p-20">
      <u-tag
        class="cr-tag-item mr-20"
        :text="item.name"
        mode="dark"
        closeable
        size="mini"
        :type="item.selected ? 'success' : 'primary'"
        v-for="item in selectedSkills"
        :key="item.name"
        @close="handleItemClose(item)"
      />
      <u-empty text="" mode="list" v-if="noData"></u-empty>
    </view>
    <view class="block bg-white p-20 mt-20">
      <u-tag
        class="cr-tag-item mr-20"
        :text="item.name"
        :mode="item.selected ? 'dark' : 'light'"
        size="mini"
        :type="item.selected ? 'success' : 'primary'"
        v-for="item in skillList"
        :key="item.name"
        @click="handleItemClick(item)"
      />
    </view>
    <u-button class="cr-button-fixed-bottom" type="primary" @click="save">保存</u-button>
  </view>
</template>

<style lang="scss"></style>
<style>
  page {
    background-color: #f3f8ff;
  }
</style>
