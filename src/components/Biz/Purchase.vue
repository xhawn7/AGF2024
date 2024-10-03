<template>
  <Container titleText="購入特典" contentBackground="white">
    <ul>
      <li v-for="(i, index) in list" :key="index">
        <div>
          <div class="image">
            <img :src="i.image" />
          </div>
          <div class="btn" v-if="i?.btn" @click="DiscountsDetails(i, index)">
            {{ i.btn }}
          </div>
          <div class="name" v-if="i?.name">{{ i.name }}</div>
          <div class="line"></div>
          <div class="intro">{{ i.intro }}</div>
          <div class="tearsOfThemis_annotation2" v-if="i?.annotation">
            <span v-for="(it, ind) in i.annotation" :key="ind">{{ it }}</span>
          </div>
        </div>
        <div v-if="index === 0" class="custom-line"></div>
      </li>
    </ul>
  </Container>
</template>

<script>
import Container from '@/components/UI/Container.vue'
import image2 from '@/assets/discounts/item2.jpg'
import image3 from '@/assets/discounts/item3.jpg'
export default {
  name: 'Purchase',
  components: {
    Container
  },
  data() {
    return {
      list: [
        {
          image: image2,
          btn: '購入特典①',
          name: 'ホログラムチケット 全4種',
          intro: `未定事件簿ブースで、商品を3.000円(税込)お買い上げごとに、特典ホログラムチケット（全4種）
            をランダムで1枚プレゼント！`,
          annotation: [
            '【素材】　紙',
            '【サイズ】　約210*70mm',
            '※掲載画像はイメージです。実際の商品と多少異なる場合があります。'
          ]
        },
        {
          image: image3,
          btn: '購入特典②',
          name: '',
          intro:
            '未定事件簿ブースで、グッズをご購入の方にショッパーを1枚プレゼント。',
          annotation: [
            '【素材】　　　紙',
            '【サイズ】　約50cm*34cm*12cm',
            '※掲載画像はイメージです。実際の商品と多少異なる場合があります。'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.Discounts {
  background: linear-gradient(180deg, #f1f1f1 0%, #e1e1e1 100%);
  padding: 2.5rem;
  border-radius: 1.2rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  max-width: 90%;
  margin: 4rem auto;
  text-align: center;
}

.image img {
  width: 100%;
  border-radius: 0.8rem;
  object-fit: cover;
}

.btn {
  background-color: #ff6f61;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #e65b50;
}

.name {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  color: #333;
  text-align: center;
}

.line {
  height: 2px;
  background-color: #e0e0e0;
  width: 80%;
  margin: 1.5rem auto;
}

.intro {
  font-size: 1.5rem;
  color: #555;
  margin-top: 1rem;
  text-align: center;
}

.tearsOfThemis_annotation2 {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #777;
  text-align: center;
}

.tearsOfThemis_annotation2 span {
  display: block;
  margin-top: 0.5rem;
}

.custom-line {
  height: 3px;
  background-color: #dddcdc;
  background-image: repeating-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5) 10px,
      transparent 10px,
      transparent 20px
    ),
    linear-gradient(to bottom, #000 0%, #000 100%);
  margin: 2rem 0;
}
</style>
