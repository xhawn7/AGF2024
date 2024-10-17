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
.Banner {
  width: 100%;
  .banner_img {
    width: 100%;
    height: 100vh;
    background-image: url('@/assets/banner_p.jpg');
    background-position: top center;
    background-repeat: no-repeat;
    background-size: contain;
  }
}

@media screen and (max-width: 1200px) {
  .Banner {
    height: 42.1875rem;
  }
}

@media screen and (max-width: 750px) {
  .Banner {
    height: 62rem;
    .banner_img {
      background-image: url('@/assets/banner_m.jpg');
      background-size: contain;
    }
  }
}

@media screen and (min-width: 1600px) {
  .Banner {
    height: auto;
  }
}
</style>
