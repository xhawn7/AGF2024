<template>
  <div class="Banner">
    <div class="banner_img"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Banner'
})
</script>

<style lang="less" scoped>
// pc
.Banner {
  width: 100%;
  height: 100vh; /* PC端使用视口高度，动态调整 */
  .banner_img {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/banner_p.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover; /* 填满容器，不留空白 */
  }
}
// ipad
@media screen and (max-width: 1200px) {
  .Banner {
    height: 42.1875rem;
  }
}
// mobile
@media screen and (max-width: 750px) {
  .Banner {
    height: 83rem;
    .banner_img {
      background-image: url('@/assets/banner_m.jpg');
    }
  }
}
</style>
