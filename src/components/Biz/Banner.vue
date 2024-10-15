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
/* PC 端 */
.Banner {
  width: 100%;
  height: calc(
    100vh + 2rem
  ); /* 使用视口高度减去一定的偏移量（避免图片被裁剪） */
  .banner_img {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/banner_p.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover; /* 填满容器，不留空白 */
  }
}

/* ipad */
@media screen and (max-width: 1200px) {
  .Banner {
    height: 42.1875rem; /* 保持iPad下的高度 */
  }
}

/* mobile */
@media screen and (max-width: 750px) {
  .Banner {
    // height: 83rem;
    height: 61rem;
    .banner_img {
      background-image: url('@/assets/banner_m.jpg'); /* 切换为移动端图片 */
      background-size: contain; /* 移动端图片使用 contain 以完整显示 */
    }
  }
}

/* 针对大屏幕（宽度大于1600px的PC） */
@media screen and (min-width: 1600px) {
  .Banner {
    height: calc(100vh + 8rem); /* 适应更大屏幕，减去一定的高度来防止裁剪 */
  }
}
</style>
