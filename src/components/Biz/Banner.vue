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

<style lang="less">
// pc
.Banner {
  width: 100%;
  height: 1043px;
  .banner_img {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/banner_p.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
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
    height: 65.1875rem;
    .banner_img {
      background-image: url('@/assets/banner_m.jpg');
    }
  }
}
</style>
