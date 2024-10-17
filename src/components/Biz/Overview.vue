<template>
  <Container contentBackground="striped" titleText="開催概要" id="overview">
    <ul class="info-list">
      <li v-for="i in list" :key="i.title" class="info-item">
        <div class="name">{{ i.title }}</div>
        <div class="intro" v-html="i.intro"></div>
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
          intro: '池袋・サンシャインシティ'
        },
        {
          title: 'ブース',
          intro: 'White AREA：文化会館3階　展示ホールC W-15'
        }
      ]
    }
  }
}
</script>

<style scoped>
.intro br {
  display: none !important;
}

@media screen and (max-width: 768px) {
  .intro br {
    display: inline !important;
  }
}

.info-list {
  list-style: none;
  padding: 1.5rem;
  margin: 0;
  background-color: #f9f9f9;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}

.info-item {
  margin-bottom: 0.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: column;
}

.info-item:last-child {
  border-bottom: none;
}

.name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.intro {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
}
</style>
