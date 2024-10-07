<template>
  <div :style="defaultStyle">
    <Title :text="titleText" :type="type" />
    <Content :backgroundType="contentBackground" :style="contentStyle">
      <slot />
    </Content>
  </div>
</template>

<script>
import Title from '@/components/UI/Title.vue'
import Content from '@/components/UI/Content.vue'

export default {
  name: 'Container',
  components: {
    Title,
    Content
  },
  props: {
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'sub-title', 'notice'].includes(value)
      }
    },
    titleText: {
      type: String,
      required: true
    },
    contentBackground: {
      type: String,
      default: 'none' // Content 的背景类型，默认为无背景
    }
  },
  computed: {
    defaultStyle() {
      // const maxWidth = window.innerWidth < 768 ? '90%' : '80%' // 小于768px为移动端
      return {
        background: 'linear-gradient(180deg, #e7e6e6 0%, #d5d4d4 100%)',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
        maxWidth: '90%',
        margin: '2rem auto',
        textAlign: 'center'
      }
    },
    contentStyle() {
      return this.type === 'notice' ? { marginTop: '1.5rem' } : {} // 如果 type 为 notice，给 Content 添加 margin-top 样式
    }
  }
}
</script>

<style scoped></style>
