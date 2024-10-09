<template>
  <div class="anchor-menu">
    <button @click="toggleMenu" class="menu-button">☰</button>
    <a-drawer
      placement="top"
      :closable="false"
      :visible="isMenuVisible"
      @close="toggleMenu"
      :content-wrapper-style="{ overflow: 'visible', background: '#58B2DC' }"
      :body-style="{ padding: '16px', background: '#F9F9F9' }"
    >
      <!-- 自定义关闭按钮 -->
      <span @click="toggleMenu" class="custom-close-button">✕</span>

      <!-- Drawer 的菜单内容 -->
      <ul class="drawer-content">
        <li class="drawer-item">
          <router-link @click.native="toggleMenu" to="#overview">
            <span class="link-english">INFORMATION</span>
            <span class="link-chinese">開催概要</span>
          </router-link>
        </li>
        <li class="drawer-item">
          <router-link @click.native="toggleMenu" to="#information">
            <span class="link-english">GOODS</span>
            <span class="link-chinese">物販情報</span>
          </router-link>
        </li>
        <li class="drawer-item">
          <router-link @click.native="toggleMenu" to="#project">
            <span class="link-english">EVENT</span>
            <span class="link-chinese">会場スへシャル企画</span>
          </router-link>
        </li>
        <li class="drawer-item">
          <router-link @click.native="toggleMenu" to="#venue">
            <span class="link-english">FREEBIES</span>
            <span class="link-chinese">会場特典</span>
          </router-link>
        </li>
      </ul>
    </a-drawer>
  </div>
</template>

<script>
import { Drawer } from 'ant-design-vue'

export default {
  components: {
    'a-drawer': Drawer
  },
  data() {
    return {
      isMenuVisible: false // 控制 Drawer 显示状态
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible // 切换菜单显示状态
    }
  }
}
</script>

<style lang="less">
.ant-drawer-content-wrapper {
  height: auto !important;
}
.anchor-menu {
  position: fixed;
  top: 10px;
  left: 10px; /* 将菜单按钮定位到右边 */
  z-index: 1000;
}

@media (min-width: 768px) {
  .anchor-menu {
    right: 10px; /* 右侧显示 */
    left: auto; /* 取消左侧定位 */
  }
}

.menu-button {
  background-color: transparent; /* 去掉按钮背景色 */
  color: #f9f9f9; /* 按钮颜色为较深的灰色 */
  border: 1px solid #f9f9f9; /* 按钮边框色 */
  border-radius: 8px; /* 按钮圆角 */
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 24px;
  line-height: 24px;
  display: inline-block;
}
.menu-button:hover {
  background-color: #f5f5f5; /* 按钮 hover 背景色 */
  color: #333;
  transition: all 0.3s ease;
}

.custom-close-button {
  font-size: 18px;
  cursor: pointer;
  color: #333;
  float: right; /* 关闭按钮靠右显示 */
  margin: 10px; /* 关闭按钮与边距 */
}

.drawer-content {
  list-style: none;
  padding: 0;
  margin-top: 3rem;
}
.drawer-item {
  margin: 1rem 0;
  cursor: pointer;
  a {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
}
.link-english {
  color: #333; /* 英文文本颜色 */
}
.link-chinese {
  color: #666; /* 中文文本颜色 */
}
</style>
