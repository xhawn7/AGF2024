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
      default: '注意事項Ⅰ'
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
  display: flex;
  margin-bottom: 1rem;
  align-items: baseline;
}

.icon {
  color: #ff6f61;
  margin-right: 8px;
  flex-shrink: 0;
  line-height: 1.2rem;
}

li span {
  display: inline;
  text-align: left;
}
</style>
