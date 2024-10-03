<template>
  <div :class="['content', contentBackground]">
    <slot />
    <!-- 插槽用于插入自定义内容 -->
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    backgroundType: {
      type: String,
      default: 'none', // 默认无背景
      validator(value) {
        return ['none', 'white', 'striped'].includes(value) // 仅允许3种背景类型
      }
    }
  },
  computed: {
    contentBackground() {
      // 根据传入的backgroundType选择不同的样式
      switch (this.backgroundType) {
        case 'white':
          return 'white-background'
        case 'striped':
          return 'striped-background'
        default:
          return 'no-background' // 默认无背景
      }
    }
  }
}
</script>

<style scoped>
.content {
  border-radius: 1rem;
  position: relative;
  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1);
}

.no-background {
  background: none;
}

.white-background {
  /* margin-top: 1.5rem; */
  padding: 2rem;
  background: #ffffff;
  color: #333;
}

.striped-background {
  padding: 2rem;
  background-image: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.3) 2px,
    transparent 2px,
    transparent 10px
  );
}
</style>
