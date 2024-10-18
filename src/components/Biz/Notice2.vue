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
        window.innerWidth <= 768
          ? '参加者の皆様が安全に楽しめるよう、会場係員の指示に従っていただきますよう、お願い申し上げます。<br/>なお、係員の指示に従わず、他の方の迷惑に<br/>なる行為や、違法行為を行った場合、ご退場いただくこともありますので予めご了承ください。'
          : '参加者の皆様が安全に楽しめるよう、会場係員の指示に従っていただきますよう、お願い申し上げます。<br/>なお、係員の指示に従わず、他の方の迷惑になる行為や、違法行為を行った場合、ご退場いただくこともありますので予めご了承ください。',

        'ブース周辺での事前の列形成などは、他ブースへのご迷惑となりますので、ご遠慮ください。',
        '混雑状況により整理券を配布する場合がございます。'
      ]
    }
  }
}
</script>
