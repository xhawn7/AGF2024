<template>
  <div id="home">
    <AnchorMenu />

    <Banner />

    <div id="overview">
      <Overview />
    </div>
    <div id="information">
      <Information />
    </div>
    <div id="purchase">
      <Purchase />
    </div>

    <Notice1 />

    <div id="project">
      <Project />
    </div>

    <Notice2 />

    <div id="venue">
      <Venue />
    </div>

    <Notice3 />

    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Banner from '@/components/Biz/Banner.vue'
import Venue from '@/components/Biz/Venue.vue'
import Purchase from '@/components/Biz/Purchase.vue'
import Project from '@/components/Biz/Project.vue'
import Notice1 from '@/components/Biz/Notice1.vue'
import Notice2 from '@/components/Biz/Notice2.vue'
import Notice3 from '@/components/Biz/Notice3.vue'
import Information from '@/components/Biz/Information.vue'
import Footer from '@/components/Biz/Footer.vue'
import Overview from '@/components/Biz/Overview.vue'
import AnchorMenu from '@/components/Biz/AnchorMenu.vue'
export default defineComponent({
  name: 'home',
  components: {
    Banner,
    Venue,
    Purchase,
    Project,
    Notice1,
    Notice2,
    Notice3,
    Information,
    Footer,
    Overview,
    AnchorMenu
  }
})
</script>

<style lang="less"></style>
