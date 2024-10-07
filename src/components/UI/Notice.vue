<template>
  <Container :contentBackground="'white'" :titleText="titleText" type="notice">
    <div>
      <ul>
        <li v-for="(i, index) in list" :key="index">
          <span class="icon">✤</span> <span v-html="i"></span>
        </li>
      </ul>
      <div class="footer">TEARS OF THEMIS</div>
    </div>
  </Container>
  <Divider />
</template>

<script>
import Container from '@/components/UI/Container.vue'
import Divider from '@/components/UI/Divider.vue'

export default {
  name: 'Notice',
  components: {
    Container,
    Divider
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    titleText: {
      type: String,
      default: '注意事項Ⅰ' // 默认值为 '注意事項Ⅰ'
    }
  }
}
</script>

<style scoped>
li {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.8;
  text-align: left;
}

.footer {
  text-align: center;
  font-size: 1.5rem;
  color: #555;
  margin-top: 2rem;
  font-weight: bold;
}

ul {
  padding-left: 0;
}

li {
  display: flex; /* 使用 flex 布局 */
  margin-bottom: 1rem; /* 设置底部间距，便于每个列表项的间隔 */
  align-items: baseline;
}

.icon {
  color: #ff6f61; /* 设置符号颜色 */
  margin-right: 8px; /* 符号与内容的间距 */
  flex-shrink: 0; /* 防止符号缩小 */
  line-height: 1.2rem; /* 确保符号与文本大小匹配 */
}

li span {
  display: inline; /* 确保 v-html 的内容以行内元素显示 */
  text-align: left; /* 确保文本左对齐 */
}
</style>
