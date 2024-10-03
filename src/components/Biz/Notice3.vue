<template>
  <Container contentBackground="white" titleText="注意事項Ⅲ" type="notice">
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
  name: 'Notice3',
  components: {
    Container,
    Divider
  },
  data() {
    return {
      list: [
        "<div>入場にはチケットの購入が必要です、詳しいは、<a href='https://agf-ikebukuro.jp/s/agf2023/page/ticket?ima=4735&tag=200' target='_blank' rel='noopener'>こちら</a>をご確認ください。</div>",
        'すべての出展内容に関して、予告無く変更や中止となる場合がございます。',
        '特典は数に限りがございますので、なくなり次第終了となります。',
        'ご購入や、各種会場企画、特典配布の列形成の際は、会場係員の誘導に従ってお並びください。',
        '待機列形成時のお客さま同士でのお待ち合わせは、ご遠慮いただいております。',
        '各種待機列が一定数に達した場合、混乱防止のため、整理券の配布対応とさせていただく場合がございます。整理券はお一人様につき1枚の配布となります。お連れ様の分の代替取得はできません。',
        '混乱時など、会場の安全確保のため、列形成の一時停止や、列の解消をお願いする場合がございます。ご理解、ご協力のほど、何卒よろしくお願い申し上げます。',
        '整理券の順に随時お客様をご案内いたします。記載時間の5分前にブースへお越しください。',
        'ご案内時間より後にブースに来られた場合、その時点の待機列最後尾にお並びいただくことになります。',
        '整理券の配布は数に限りがございます。',
        '整理券をお持ちのお客様のご案内終了後、ブースの混雑が緩和した際、整理券をお持ちでない方も物販などをご利用いただける可能性がございます。'
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
