<template>
  <Container contentBackground="white" titleText="会場特典" id="venue">
    <div class="title">AGF2024来場記念ポストカード</div>
    <div class="content">
      未定事件簿ブースお越しいただくポストカード1枚プレゼント。
      <p>*数に限りございますので、なくなり次第終了となります。</p>
      <div class="image_btm">
        <img src="@/assets/special/bottom.jpg" />
      </div>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/UI/Container.vue'
export default {
  name: 'Venue',
  components: {
    Container
  }
}
</script>

<style scoped>
.title {
  font-size: 2rem;
  color: #1d4ed8;
  text-transform: uppercase;
  font-weight: 600;
  text-align: left;
  margin-bottom: 10px;
  border-left: 6px solid #1d4ed8;
  padding-left: 10px;
}

.content {
  font-size: 1.5rem;
  color: #374151;
  line-height: 1.8;
  background-color: #f9fafb;
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-top: 20px;
}

.content p {
  font-style: italic;
  font-size: 1.2rem;
  color: #6b7280;
  margin: 10px 0;
}
</style>
