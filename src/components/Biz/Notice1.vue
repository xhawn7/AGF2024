<template>
  <Container contentBackground="white" titleText="注意事項Ⅰ" type="notice">
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
  name: 'Notice1',
  components: {
    Container,
    Divider
  },
  data() {
    return {
      list: [
        "<div>入場にはチケットの購入が必要です。詳しいは、<a href='https://agf-ikebukuro.jp/s/agf2023/page/ticket?ima=4735&amp;tag=200' target='_blank' rel='noopener'>こちら</a>をご確認ください。</div>",
        '掲載している画像はイメージです。実際の商品とは多少異なる場合がごさいます。',
        '商品はスケジコール分ご用意しておりますが各日の在庫がなくなり次第、その日の販壳を終了させていただきます。万がー品切れとなった際はご容赦ください。',
        'また、通贩にて後日再販される予定もごさいます。準備ができ次第ご案内いたします',
        'お支払いは現金・クレジットカードがご利用いただけます。お支払いは一括支払いのみとさせていただきます。',
        'お会計におけるクレジットカードと現金の併用払いはできません。',
        'クレジットカードはVisa、Master、JCB.American Expressのみ(デビットカード・プリへイド式',
        '力ード使用不可)当日、やむを得ない事情などで、クレジットカードのご利用を中止させていただく場合がごさいます。',
        '購入商品と会計内容は必ずその場でご確認ください。その場を離れた後の釣り銭などの会計違い、商品の返品交換は対応いたしかわます',
        'また、ご購入後の交换、及び返品は、商品不良の場合を除き、すべてお断りしております。予めご了承ください。',
        'プース周边は通路となり、トレーディング行為は近隣のご迷惑となるため、禁止とさせていただきます。'
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
