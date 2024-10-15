<template>
  <Container titleText="購入特典" contentBackground="white" id="purchase">
    <ul>
      <li v-for="(i, index) in list" :key="index">
        <div class="item-container">
          <div class="image">
            <img
              :src="i.image"
              @click="openModal(i.image, index)"
              class="thumbnail"
            />
          </div>
          <div class="content">
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
          intro: `未定事件簿ブースで、商品を3,000円(税込)お買い上げごとに、特典ホログラムチケット（全4種）
            をランダムで1枚プレゼント！`,

          annotation: [
            '【素材】  紙',
            '【サイズ】210*70mm',
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
            '【素材】  紙',
            '【サイズ】70cm*43cm*10cm',
            '※掲載画像はイメージです。実際の商品と多少異なる場合があります。'
          ]
        }
      ],
      isModalVisible: false, // 控制模态框显示
      currentImage: '' // 当前点击的图片路径
    }
  },
  methods: {
    openModal(image, index) {
      if (index == 0) {
        this.currentImage = image
        this.isModalVisible = true
      }
    },
    closeModal() {
      this.isModalVisible = false
    }
  }
}
</script>

<style scoped>
.thumbnail {
  width: 100px; /* 缩略图大小可以根据需要调整 */
  cursor: pointer;
  transition: 0.3s;
}

.thumbnail:hover {
  opacity: 0.7; /* 鼠标悬停时透明度变化 */
}

.modal-image {
  width: 100%;
  height: auto;
}

/* 默认情况下，移动端样式保持不变 */
.item-container {
  display: block;
  text-align: center;
}

.image img {
  width: 100%;
  border-radius: 0.8rem;
  object-fit: cover;
}

/* PC端和iPad端样式优化 */
@media screen and (min-width: 768px) {
  .item-container {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    text-align: left;
    gap: 2rem; /* 图片和内容之间的间距 */
  }

  /* 针对第二个li交换content和image的位置 */
  li:nth-child(2) .item-container {
    flex-direction: row-reverse; /* 交换图片和内容的位置 */
  }

  .image {
    flex: 1;
    max-width: 40%; /* 图片宽度 */
  }

  .image img {
    width: 100%;
    height: auto; /* 保持图片比例 */
  }

  .content {
    flex: 1.5; /* 右侧内容宽度 */
    display: flex;
    flex-direction: column;
    justify-content: center; /* 右侧内容垂直居中 */
    align-items: flex-start; /* 确保内容左对齐 */
    text-align: left;
  }

  /* 优化btn样式 */
  .btn {
    background-color: transparent; /* 去掉背景色 */
    color: #333; /* 字体颜色加深 */
    font-size: 1.8rem; /* 调整字体大小 */
    font-weight: bold; /* 字体加粗，类似标题效果 */
    padding: 0; /* 去掉按钮内的额外填充 */
    cursor: pointer;
    margin-top: 0; /* 去掉顶部间距 */
    width: 100%;
    text-align: center;
  }

  .btn:hover {
    background-color: transparent; /* 去掉hover时的背景色 */
    color: #555; /* hover时字体颜色变化 */
  }
}

/* 其他样式保持不变 */
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
