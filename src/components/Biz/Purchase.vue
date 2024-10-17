<template>
  <Container titleText="購入特典" contentBackground="white" id="purchase">
    <ul>
      <li v-for="(i, index) in list" :key="index">
        <div class="item-container">
          <div class="image">
            <img :src="i.image" @click="openModal(i.image)" class="thumbnail" />
          </div>
          <div class="content">
            <div class="btn" v-if="i?.btn" @click="DiscountsDetails(i, index)">
              {{ i.btn }}
            </div>
            <div class="name" v-if="i?.name">{{ i.name }}</div>
            <div class="line"></div>
            <div class="intro" v-html="i.intro"></div>
            <div class="tearsOfThemis_annotation2" v-if="i?.annotation">
              <span
                v-for="(it, ind) in i.annotation"
                :key="ind"
                v-html="it"
              ></span>
            </div>
          </div>
        </div>
        <div v-if="index === 0" class="custom-line"></div>
      </li>
    </ul>
    <a-modal
      v-model:visible="isModalVisible"
      width="80%"
      :footer="null"
      centered
      :closable="false"
    >
      <img :src="currentImage" class="modal-image" />
    </a-modal>
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
          intro:
            window.innerWidth <= 768
              ? `未定事件簿ブースで、商品を3,000円(税込)<br/>お買い上げごとに、【ホログラムチケット2枚セット<br/>（全4種）】をランダムで1セットプレゼント。`
              : `未定事件簿ブースで、商品を3,000円(税込) お買い上げごとに、【ホログラムチケット2枚セット（全4種）】をランダムで1セットプレゼント。`,

          annotation: [
            '【素材】  紙',
            '【サイズ】210*70mm',
            window.innerWidth <= 768
              ? '※掲載画像はイメージです。<br/>実際の商品と多少異なる場合があります。'
              : '※掲載画像はイメージです 実際の商品と多少異なる場合があります。'
          ]
        },
        {
          image: image3,
          btn: '購入特典②',
          name: '',
          intro:
            window.innerWidth <= 768
              ? '未定事件簿ブースで、グッズをご購入の方に<br/>ショッパーを1枚プレゼント。'
              : '未定事件簿ブースで、グッズをご購入の方に【ショッパー】を1枚プレゼント。',
          annotation: [
            '【素材】  紙',
            '【サイズ】70cm*43cm*10cm',
            window.innerWidth <= 768
              ? '※掲載画像はイメージです。<br/>実際の商品と多少異なる場合があります。'
              : '※掲載画像はイメージです 実際の商品と多少異なる場合があります。'
          ]
        }
      ],
      isModalVisible: false,
      currentImage: ''
    }
  },
  methods: {
    openModal(image) {
      this.currentImage = image
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    }
  }
}
</script>

<style scoped>
.thumbnail {
  width: 100px;
  cursor: pointer;
  transition: 0.3s;
}

.thumbnail:hover {
  opacity: 0.7;
}

.modal-image {
  width: 100%;
  height: auto;
}

.item-container {
  display: block;
  text-align: center;
}

.image img {
  width: 100%;
  border-radius: 0.8rem;
  object-fit: cover;
}

@media screen and (min-width: 768px) {
  .item-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    gap: 2rem;
  }

  li:nth-child(2) .item-container {
    flex-direction: row-reverse;
  }

  .image {
    flex: 1;
    max-width: 40%;
  }

  .image img {
    width: 100%;
    height: auto;
  }

  .content {
    flex: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
  }

  .btn {
    background-color: transparent;
    color: #333;
    font-size: 1.8rem;
    font-weight: bold;
    padding: 0;
    cursor: pointer;
    margin-top: 0;
    width: 100%;
    text-align: center;
  }

  .btn:hover {
    background-color: transparent;
    color: #555;
  }
}

.name {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  color: #333;
  text-align: center;
  width: 100%;
}

.line {
  height: 2px;
  background-color: #e0e0e0;
  width: 100%;
  margin: 1.5rem auto;
}

.intro {
  font-size: 1.5rem;
  color: #555;
}

.tearsOfThemis_annotation2 {
  font-size: 1.2rem;
  color: #777;
}

.tearsOfThemis_annotation2 span {
  display: block;
}

.custom-line {
  height: 3px;
  background-color: #222;
  margin: 2rem 0;
}
</style>
