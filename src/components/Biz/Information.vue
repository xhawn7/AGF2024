<template>
  <Container titleText="物販情報">
    <ul class="row">
      <li v-for="(i, index) in list" :key="index" @click="CommodityDetails(i)">
        <div class="image">
          <img :src="i.image" />
        </div>
        <div class="name">{{ i.name }}</div>
        <div class="price">{{ i.price }}</div>
      </li>
    </ul>
    <information-dialog
      v-if="visibleOpen"
      :open="visibleOpen"
      :list="currList"
      @request="request"
    />
  </Container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import image1 from '@/assets/commodity/item1.jpg'
import image11 from '@/assets/commodity/item1-1.jpg'
import image12 from '@/assets/commodity/item1-2.jpg'
import image13 from '@/assets/commodity/item1-3.jpg'
import image14 from '@/assets/commodity/item1-4.jpg'
import image2 from '@/assets/commodity/item1.jpg'
import image21 from '@/assets/commodity/item1-1.jpg'
import image22 from '@/assets/commodity/item1-2.jpg'
import image23 from '@/assets/commodity/item1-3.jpg'
import image24 from '@/assets/commodity/item1-4.jpg'
import image3 from '@/assets/commodity/item3.jpg'
import image4 from '@/assets/commodity/item4.jpg'
import image5 from '@/assets/commodity/item5.jpg'
import image6 from '@/assets/commodity/item6.jpg'
import image7 from '@/assets/commodity/item7.jpg'
import InformationDialog from '@/components/Biz/InformationDialogue.vue'
import Container from '@/components/UI/Container.vue'

export default defineComponent({
  name: 'Information',
  components: { InformationDialog, Container },
  data() {
    return {
      list: [
        {
          image: image1,
          name: '【ランダム】トレーディング缶バッジ 第二弾 各全5種',
          price: '1個 550円(税込)',
          matter: [
            'キャラクター毎に全5絵柄ランダムに封入。<br><br><br>【素材】<br>ブリキ、紙、PP ※箔押し仕様'
          ],
          size: ['【サイズ】<br>約5cm*5cm'],
          type: ['【種類】<br>全5種'],
          hint: [
            '※キャラを選んでご購入いただけます。<br>※1キャラにつき5個ご購入した場合でも、全種類が揃わない場合があります。予めご了承ください。<br>ブラインドパッケージのランダム封入となります、絵柄はお選びいただけません。<br>※掲載画像はイメージ。実際の商品と多少異なる場合がございます。'
          ],
          children: [
            {
              image: image11,
              name: '【ランダム】トレーディング缶バッジ Raven 全5種',
              price: '1個 450円（税込）',
              matter: [
                'キャラクター毎に全5絵柄ランダムに封入。<br><br><br>【素材】<br>ブリキ、紙、PP ※箔押し仕様'
              ],
              size: ['【サイズ】<br>約5cm*5cm'],
              type: ['【種類】<br>全5種'],
              hint: [
                '※キャラを選んでご購入いただけます。<br>※1キャラにつき5個ご購入した場合でも、全種類が揃わない場合があります。予めご了承ください。<br>ブラインドパッケージのランダム封入となります、絵柄はお選びいただけません。<br>※掲載画像はイメージ。実際の商品と多少異なる場合がございます。'
              ]
            },
            {
              image: image12,
              name: '【ランダム】トレーディング缶バッジ Libra 全5種',
              price: '1個 450円（税込）',
              matter: [
                'キャラクター毎に全5絵柄ランダムに封入。<br><br><br>【素材】<br>ブリキ、紙、PP ※箔押し仕様'
              ],
              size: ['【サイズ】<br>約5cm*5cm'],
              type: ['【種類】<br>全5種'],
              hint: [
                '※キャラを選んでご購入いただけます。<br>※1キャラにつき5個ご購入した場合でも、全種類が揃わない場合があります。予めご了承ください。<br>ブラインドパッケージのランダム封入となります、絵柄はお選びいただけません。<br>※掲載画像はイメージ。実際の商品と多少異なる場合がございます。'
              ]
            },
            {
              image: image13,
              name: '【ランダム】トレーディング缶バッジ Adjudicator 全5種',
              price: '1個 450円（税込）',
              matter: [
                'キャラクター毎に全5絵柄ランダムに封入。<br><br><br>【素材】<br>ブリキ、紙、PP ※箔押し仕様'
              ],
              size: ['【サイズ】<br>約5cm*5cm'],
              type: ['【種類】<br>全5種'],
              hint: [
                '※キャラを選んでご購入いただけます。<br>※1キャラにつき5個ご購入した場合でも、全種類が揃わない場合があります。予めご了承ください。<br>ブラインドパッケージのランダム封入となります、絵柄はお選びいただけません。<br>※掲載画像はイメージ。実際の商品と多少異なる場合がございます。'
              ]
            },
            {
              image: image14,
              name: '【ランダム】トレーディング缶バッジ King 全5種',
              price: '1個 450円（税込）',
              matter: [
                'キャラクター毎に全5絵柄ランダムに封入。<br><br><br>【素材】<br>ブリキ、紙、PP ※箔押し仕様'
              ],
              size: ['【サイズ】<br>約5cm*5cm'],
              type: ['【種類】<br>全5種'],
              hint: [
                '※キャラを選んでご購入いただけます。<br>※1キャラにつき5個ご購入した場合でも、全種類が揃わない場合があります。予めご了承ください。<br>ブラインドパッケージのランダム封入となります、絵柄はお選びいただけません。<br>※掲載画像はイメージ。実際の商品と多少異なる場合がございます。'
              ]
            }
          ]
        },
        {
          image: image2,
          name: '【BOX】トレーディング缶バッジ 第二弾 4種',
          price: '1BOX（5個入） 2,750円（税込）',
          matter: ['【素材】<br>ブリキ、紙、PP ※箔押し仕様'],
          size: ['【サイズ】<br>約5cm*5cm'],
          type: ['【種類】<br>全5種'],
          hint: [
            '全4種（1BOX 5パック入り）<br>※BOX販売商品になります。<br>※1BOXで全種類が揃わない場合もあります。予めご了承ください。<br>※1BOX5個入り。ブラインドパッケージのランダム封入となります、絵柄はお選びいただけません。<br>※掲載画像はイメージ。実際の商品と多少異なる場合がございます。'
          ],
          children: [
            {
              image: image21,
              name: '【BOX】トレーディング缶バッジ Raven',
              price: '1BOX（5個入） 2,250円（税込）',
              matter: ['【素材】<br>ブリキ、紙、PP ※箔押し仕様'],
              size: ['【サイズ】<br>約5cm*5cm'],
              type: ['【種類】<br>全5種'],
              hint: [
                '全4種（1BOX 5パック入り）<br>※BOX販売商品になります。<br>※1BOXで全種類が揃わない場合もあります。予めご了承ください。<br>※1BOX5個入り。ブラインドパッケージのランダム封入となります、絵柄はお選びいただけません。<br>※掲載画像はイメージ。実際の商品と多少異なる場合がございます。'
              ]
            },
            {
              image: image22,
              name: '【BOX】トレーディング缶バッジ Libra',
              price: '1BOX（5個入） 2,250円（税込）',
              matter: ['【素材】<br>ブリキ、紙、PP ※箔押し仕様'],
              size: ['【サイズ】<br>約5cm*5cm'],
              type: ['【種類】<br>全5種'],
              hint: [
                '全4種（1BOX 5パック入り）<br>※BOX販売商品になります。<br>※1BOXで全種類が揃わない場合もあります。予めご了承ください。<br>※1BOX5個入り。ブラインドパッケージのランダム封入となります、絵柄はお選びいただけません。<br>※掲載画像はイメージ。実際の商品と多少異なる場合がございます。'
              ]
            },
            {
              image: image23,
              name: '【BOX】トレーディング缶バッジ Adjudicator',
              price: '1BOX（5個入） 2,250円（税込）',
              matter: ['【素材】<br>ブリキ、紙、PP ※箔押し仕様'],
              size: ['【サイズ】<br>約5cm*5cm'],
              type: ['【種類】<br>全5種'],
              hint: [
                '全4種（1BOX 5パック入り）<br>※BOX販売商品になります。<br>※1BOXで全種類が揃わない場合もあります。予めご了承ください。<br>※1BOX5個入り。ブラインドパッケージのランダム封入となります、絵柄はお選びいただけません。<br>※掲載画像はイメージ。実際の商品と多少異なる場合がございます。'
              ]
            },
            {
              image: image24,
              name: '【BOX】トレーディング缶バッジ King',
              price: '1BOX（5個入） 2,250円（税込）',
              matter: ['【素材】<br>ブリキ、紙、PP ※箔押し仕様'],
              size: ['【サイズ】<br>約5cm*5cm'],
              type: ['【種類】<br>全5種'],
              hint: [
                '全4種（1BOX 5パック入り）<br>※BOX販売商品になります。<br>※1BOXで全種類が揃わない場合もあります。予めご了承ください。<br>※1BOX5個入り。ブラインドパッケージのランダム封入となります、絵柄はお選びいただけません。<br>※掲載画像はイメージ。実際の商品と多少異なる場合がございます。'
              ]
            }
          ]
        },
        {
          image: image3,
          name: 'グリッターアクリルキーホルダー 4種',
          price: '各1320円（税込）',
          matter: ['【素材】<br>ブリキ、PVC'],
          size: [
            '【サイズ】<br>缶バッジ約6.5cm*6.5cm<br>バッジカバー約7.7cm*10.3cm'
          ],
          type: ['【種類】<br>全4種'],
          hint: [
            '※掲載画像はイメージ。実際の商品と多少異なる場合がございます。'
          ]
        },
        {
          image: image4,
          name: 'ホログラム色紙 4種',
          price: '各1100円（税込）',
          matter: ['【素材】<br>アクリル'],
          size: ['【サイズ】<br>約13cm*10.7cm'],
          type: ['【種類】<br>全4種'],
          hint: [
            '※掲載画像はイメージ。実際の商品と多少異なる場合がございます。'
          ]
        },
        {
          image: image5,
          name: 'キャラ撮りスティック 4種',
          price: '各1,320円（税込）',
          matter: ['【素材】<br>アクリル、オイル ※グリッター仕様'],
          size: ['【サイズ】<br>約15.9cm*6.5cm'],
          type: ['【種類】<br>全4種'],
          hint: [
            '※掲載画像はイメージ。実際の商品と多少異なる場合がございます。'
          ]
        },
        {
          image: image6,
          name: 'クラブ会員カード 4種',
          price: '各440円（税込）',
          matter: ['【素材】<br>アクリル、オイル ※グリッター仕様'],
          size: ['【サイズ】<br>約19cm*13cm'],
          type: ['【種類】<br>全4種'],
          hint: [
            '※掲載画像はイメージ。実際の商品と多少異なる場合がございます。'
          ]
        },
        {
          image: image7,
          name: 'ポケットポーチ 4種',
          price: '各3,500円（税込）',
          matter: ['【素材】<br>PU'],
          size: ['【サイズ】<br>約23cm*15cm'],
          type: ['【種類】<br>全4種'],
          hint: [
            '※掲載画像はイメージ。実際の商品と多少異なる場合がございます。'
          ]
        }
      ]
    }
  },
  setup() {
    const visibleOpen: any = ref(false)
    const currList: any = ref([])

    const CommodityDetails = (i: any) => {
      visibleOpen.value = true
      currList.value = i.children ? i.children : [i]
    }

    const request = (val: any) => {
      visibleOpen.value = false
    }

    return {
      visibleOpen,
      currList,
      CommodityDetails,
      request
    }
  }
})
</script>

<style lang="less" scoped>
.row {
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
  white-space: nowrap;
  flex-wrap: nowrap;
}

.row::-webkit-scrollbar {
  display: none;
}

li {
  flex: 0 0 40%;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.3s ease;
  display: inline-block;
  white-space: normal;
}

li:hover {
  transform: scale(1.05);
}

.image img {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
}

.name {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  color: #363435;
}

.price {
  font-size: 1.2rem;
  color: #555;
  margin-top: 0.5rem;
}
</style>
