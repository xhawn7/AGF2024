<template>
  <Container contentBackground="striped" titleText="開催概要">
    <ul class="info-list">
      <li v-for="i in list" :key="i.title" class="info-item">
        <div class="name">{{ i.title }}</div>
        <div class="intro">{{ i.intro }}</div>
      </li>
    </ul>
  </Container>
  <Divider />
</template>

<script>
import Container from '@/components/UI/Container.vue'
import Divider from '@/components/UI/Divider.vue'
export default {
  name: 'Overview',
  components: {
    Container,
    Divider
  },
  data() {
    return {
      list: [
        {
          title: 'イベント',
          intro: 'アニメイトガールズフェスティバル2024'
        },
        {
          title: '開催期間',
          intro: '2024年11月9日(土)・10日(日)'
        },
        {
          title: '開場時間',
          intro: 'メイン会場9:00~17:00（16:30新規最終入場）'
        },
        {
          title: '会場',
          intro:
            '池袋・サンシャインシティ White AREA：文化会館3階　展示ホールC Wー15'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* 通用样式 */
.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
}

/* 移动端：一行显示1列 */
@media screen and (max-width: 767px) {
  .info-list {
    grid-template-columns: 1fr; /* 1列布局 */
  }
}

/* iPad端：一行显示2列 */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .info-list {
    grid-template-columns: repeat(2, 1fr); /* 2列布局 */
  }
}

/* PC端：一行显示4列 */
@media screen and (min-width: 1025px) {
  .info-list {
    grid-template-columns: repeat(4, 1fr); /* 4列布局 */
  }
}
.info-item {
  background-color: #f9f9f9;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  /* transition: transform 0.3s ease; */
}

.info-item:hover {
  transition: transform 0.3s ease;
  transform: scale(0.98);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2); /* 增加阴影效果 */
}

.name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
}

.intro {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
}

.info-item::before {
  content: '✤';
  font-size: 1.5rem;
  color: #ff6f61;
  margin-right: 0.5rem;
  vertical-align: middle;
}
</style>
