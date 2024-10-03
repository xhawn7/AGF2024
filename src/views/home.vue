<template>
  <Banner />
  <Overview />
  <Information />
  <Purchase />
  <Notice1 />
  <Project />
  <Notice2 />
  <Venue />
  <Notice3 />
  <Footer />
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
    Overview
  }
})
</script>

<style lang="less"></style>
