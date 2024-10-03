<template>
  <Container contentBackground="white" titleText="注意事項Ⅱ" type="notice">
    <div class="container">
      <ul>
        <li v-for="(i, index) in list" :key="index" v-html="i"></li>
      </ul>
      <div class="footer">TEARS OF THEMIS</div>
    </div>
  </Container>
  <Divider />
</template>

<script>
import Container from '@/components/UI/Container.vue'
import Divider from '@/components/UI/Divider.vue'
export default {
  name: 'Notice2',
  components: {
    Container,
    Divider
  },
  data() {
    return {
      list: [
        '参加者の皆様が安全に楽しめるよう、ご利用に際しては注意事項、利用規約、そして会場係員',
        'の指示に必ず従っていただきますようお願い申し上げます。',
        'なお、係員の指示に従わず、他の方の迷惑になる行為や、違法行為を行った場合、ご退場いただくこともありますので予めご了承ください。',
        '【整列、整理券について】',
        'イベント受付時間は整理券に記載しております。お受け取り後から整列開始時間までは、ブースから離れても問題ありません。',
        '整列開始時刻は、イベント開始時間の5分前となっております。',
        '整理券は数に限りがごさいます。各枠定員になり次第、配布終了となります。',
        '整理券に記載されているお時間を過きてしまった場合、当日中に限り、ご案内中の待機列最後尾にお並びいただ きます。',
        'ブース周辺での事前の列形成などは、他ブースへのご迷惑となりますので、ご遠慮ください。'
      ]
    }
  }
}
</script>

<style scoped>
li {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.8;
  text-align: left;
}
.footer {
  text-align: center;
  font-size: 1.5rem;
  color: #555;
  margin-top: 2rem;
  font-weight: bold;
}
</style>
