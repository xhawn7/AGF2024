<template>
  <div class="Footer">
    <div class="footer_top">
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
.Footer {
  padding: 2rem 4rem;
}

.footer_top {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #374151;
  padding-bottom: 30px;
  margin-bottom: 30px;
}

.title_section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.title_image img {
  width: 30rem;
  object-fit: cover;
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

.btn_section {
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;
}

.btn img {
  width: 30rem;
  transition: transform 0.3s ease;
}

.btn img:hover {
  transform: scale(1.05);
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.content_item {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin-bottom: 10px;
}

.content_title {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  border-radius: 5px;
  background-color: #2d3748;
  width: 8.75rem;
  text-align: center;
  line-height: 3.5rem;
}

.content_intro {
  font-size: 1.5rem;
  color: #f9fafb;
  margin-left: 20px;
  flex-grow: 1;
  text-align: left;
  line-height: 3rem;
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

  .title_image img,
  .btn img {
    width: 18rem;
  }

  .content_item {
    text-align: center;
  }
}
</style>
