<template>
  <Container
    contentBackground="white"
    titleText="会場スへシャル企画"
    id="project"
  >
    <div class="title">ミニゲーム『綺夢の夜』実施決定！</div>
    <div class="image_top">
      <img src="@/assets/special/top.jpg" />
    </div>
    <div class="content">
      シャフルされたカードの中から全員探し出すと、特典「ステッカー」ランダムで1枚プレゼントします。
      <p>*当イベントの参加には整理券が必要となります。</p>
      <p>*下記の時間帯にブースにて整理券を配布いたします。</p>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/UI/Container.vue'
export default {
  name: 'Project',
  components: {
    Container
  }
}
</script>

<style scoped>
.contain:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #ddd;
  letter-spacing: 1px;
}

.image_top img,
.image_btm img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
}

.content {
  font-size: 1.5rem;
  color: #666;
  line-height: 1.6;
  text-align: justify;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.05);
}
</style>
