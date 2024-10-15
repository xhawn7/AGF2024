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
  .banner_img {
    width: 100%;
    height: 100vh; /* 保证图片高度为视口高度 */
    background-image: url('@/assets/banner_p.jpg');
    background-position: top center;
    background-repeat: no-repeat;
    background-size: contain; /* 等比缩放图片，保持宽度与显示器一致，且图片不会被拉伸 */
  }
}

/* ipad */
@media screen and (max-width: 1200px) {
  .Banner {
    height: 42.1875rem; /* 保持等比例缩放 */
  }
}

/* mobile */
@media screen and (max-width: 750px) {
  .Banner {
    height: 84rem;
    .banner_img {
      background-image: url('@/assets/banner_m.jpg'); /* 切换为移动端图片 */
      background-size: contain; /* 使用contain，图片等比缩放 */
    }
  }
}

/* 针对大屏幕（宽度大于1600px的PC） */
@media screen and (min-width: 1600px) {
  .Banner {
    height: auto;
  }
}
</style>
