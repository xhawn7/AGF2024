<template>
  <div>
    <Notice :list="listData" titleText="注意事項II" />
  </div>
</template>

<script>
import Notice from '@/components/UI/Notice.vue'

export default {
  name: 'Notice2',
  components: {
    Notice
  },
  data() {
    return {
      listData: [
        '参加者の皆様が安全に楽しめるよう、ご利用に際しては注意事項、利用規約、そして会場係員の指示に必ず従っていただきますようお願い申し上げます。<br/>なお、係員の指示に従わず、他の方の迷惑になる行為や、違法行為を行った場合、ご退場いただくこともありますので予めご了承ください。',
        'ブース周辺での事前の列形成などは、他ブースへのご迷惑となりますので、ご遠慮ください。',
        '混雑状況により整理券を配布する場合がございます。'
      ]
    }
  }
}
</script>
