<template>
  <div class="Footer">
    <div class="footer_top">
      <div class="left_column">
        <div class="title_section">
          <div class="title_image">
            <img src="@/assets/footer/image.png" />
          </div>
          <div class="title_content">
            <div>App Store / Google Play にて</div>
            <span>好評配信中！</span>
          </div>
        </div>
        <div class="btn_section">
          <div class="btn app">
            <a href="http://itunes.apple.com/app/id1517957388">
              <img src="@/assets/footer/app.png" />
            </a>
          </div>
          <div class="btn google">
            <a
              href="https://play.google.com/store/apps/details?id=com.miHoYo.tot.glb"
            >
              <img src="@/assets/footer/google.png" />
            </a>
          </div>
        </div>
      </div>

      <div class="content">
        <div v-for="(i, index) in topList" :key="index" class="content_item">
          <span class="content_title" v-html="i.title"></span>
          <span class="content_intro">{{ i.intro }}</span>
        </div>
      </div>
    </div>

    <div class="footer_bottom">
      <div class="logo">
        <img src="@/assets/logo.png" />
      </div>
      <ul>
        <li
          @click="cutOpen(i)"
          v-for="(i, index) in bottomList"
          :key="index"
          class="label_item"
        >
          {{ i.label }}
        </li>
      </ul>
      <div class="copy">Copyright © COGNOSPHERE. All Rights Reserved.</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, watch, onMounted } from 'vue'

export default defineComponent({
  name: 'Footer',
  data() {
    return {
      topList: [
        {
          title: 'タイトル',
          intro: '未定事件簿'
        },

        {
          title: 'ジャンル',
          intro: '女性向け恋愛ミステリーゲーム'
        },
        {
          title: '価&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格',
          intro: '無料（一部ゲーム内課金あり）'
        },
        {
          title: '対応OS',
          intro: 'iOS / Android'
        }
      ]
    }
  },
  setup() {
    const cutOpen = (i: any) => {
      open(i.path)
    }
    const bottomList = reactive([
      {
        label: '会社情報',
        path: 'https://www.hoyoverse.com/ja-jp/about-us?utm_source=tot&utm_medium=footer'
      },
      {
        label: 'プライバシーポリシー',
        path: 'https://tot.hoyoverse.com/ja-jp/privacy'
      },
      {
        label: '利用規約',
        path: 'https://tot.hoyoverse.com/ja-jp/terms'
      }
    ])
    return {
      bottomList,
      cutOpen
    }
  }
})
</script>

<style scoped>
/* 默认移动端样式 */
.footer_top {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #374151;
  padding-bottom: 30px;
  margin: 2rem auto; /* 增加margin */
  width: 90%; /* 移动端宽度为90% */
  gap: 20px;
}

/* 左侧包含 title_section 和 btn_section */
.left_column {
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
  align-items: center;
}

.content {
  width: 100%;
}
/* PC 和 iPad 布局 */
@media screen and (min-width: 768px) {
  .footer_top {
    display: grid;
    grid-template-columns: 1.3fr 1fr; /* 左侧接近2份，右侧略宽，接近1:1.8 */
    gap: 20px;
    align-items: center; /* 垂直居中 */
    width: 90%; /* PC和iPad端宽度为80% */
    height: 100%;
  }

  .left_column {
    grid-column: 1 / 2; /* 左侧整列 */
    display: flex;
    flex-direction: column;
    justify-content: center; /* 垂直居中 */
    align-items: flex-start;
  }

  .content {
    grid-column: 2 / 3; /* 右侧整列 */
    display: flex;
    flex-direction: column;
    justify-content: center; /* 垂直居中 */
    align-items: flex-start;
    width: 100%;
    font-size: 1.2rem; /* 调整字体大小 */
    overflow: hidden; /* 防止溢出 */
    gap: 10px;
  }
}

/* 调整后的 title_image 样式 */
.title_image img {
  width: 9rem; /* 调整图片大小为9rem */
  object-fit: cover;
}

.btn_section {
  display: flex;
  justify-content: space-between; /* 左右对齐 */
  align-items: center; /* 垂直居中 */
  gap: 20px;
}

.btn img {
  width: 100%; /* 宽度100%，根据父元素变化 */
  /* max-width: 15rem; 设置图片的最大宽度 */
  transition: transform 0.3s ease;
}

.btn img:hover {
  transform: scale(1.05);
}

/* 原有的 title_section 样式 */
.title_section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.title_content {
  font-size: 2.4rem;
  color: #f3f4f6;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title_content span {
  font-weight: bold;
  margin-top: 10px;
  color: #38bdf8;
}

/* content 区域的样式 */
.content_item {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px; /* 调整最大宽度，确保内容区域更宽 */
}

.content_title {
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  border-radius: 5px;
  background-color: #2d3748;
  width: 8.75rem;
  text-align: center;
  line-height: 3.5rem;
}

.content_intro {
  font-size: 1.2rem;
  color: #f9fafb;
  margin-left: 20px;
  flex-grow: 1;
  text-align: left;
  line-height: 3rem;
  white-space: normal; /* 允许换行，确保内容完整显示 */
  overflow: visible; /* 确保内容不被隐藏 */
}

.footer_bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.footer_bottom .logo img {
  width: 100px;
  height: auto;
  margin-bottom: 20px;
}

.footer_bottom ul {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.label_item {
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  color: #94a3b8;
  transition: color 0.3s ease;
}

.label_item:hover {
  color: #38bdf8;
}

.copy {
  font-size: 1.2rem;
  color: #9ca3af;
  margin-top: 10px;
  text-align: center;
}

@media (max-width: 768px) {
  .title_section {
    text-align: center;
  }

  .title_image img {
    width: 7.5rem;
  }
  .btn img {
    width: 20rem;
  }

  .content_item {
    text-align: center;
    margin-bottom: 10px;
  }
}
</style>
