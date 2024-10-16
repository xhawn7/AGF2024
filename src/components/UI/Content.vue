<template>
  <div :class="['content', contentBackground]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    backgroundType: {
      type: String,
      default: 'none',
      validator(value) {
        return ['none', 'white', 'striped'].includes(value)
      }
    }
  },
  computed: {
    contentBackground() {
      switch (this.backgroundType) {
        case 'white':
          return 'white-background'
        case 'striped':
          return 'striped-background'
        default:
          return 'no-background'
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
