<template>
  <div class="anchor-menu">
    <button
      @click="toggleMenu"
      class="menu-button"
      :class="{ 'hidden-menu': isHidden }"
      :style="menuStyle"
    >
      ☰
    </button>
    <a-drawer
      placement="top"
      :closable="false"
      :visible="isMenuVisible"
      @close="toggleMenu"
      :content-wrapper-style="{ overflow: 'visible', background: '#58B2DC' }"
      :body-style="{ padding: '16px', background: '#333' }"
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
      isMenuVisible: false, // 控制 Drawer 显示状态
      isHidden: false, // 控制菜单是否隐藏
      lastScrollY: 0, // 记录上次滚动的位置
      scrollTimeout: null, // 用于记录滚动停止时的定时器
      menuStyle: {
        bottom: '10px',
        right: '10px'
      } // 菜单位置样式
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible // 切换菜单显示状态
    },
    handleScroll() {
      // 获取当前的滚动位置
      const currentScrollY = window.scrollY

      // 判断滚动方向：向下滚动时隐藏，向上滚动时显示
      if (currentScrollY > this.lastScrollY) {
        this.isHidden = false // 向下滚动，隐藏菜单
      } else {
        this.isHidden = true // 向上滚动，显示菜单
      }

      // 更新 lastScrollY
      this.lastScrollY = currentScrollY
    }
  },
  mounted() {
    // 添加滚动事件监听
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    // 组件销毁前移除滚动事件监听
    window.removeEventListener('scroll', this.handleScroll)
    // 清除定时器
    if (this.scrollTimeout) clearTimeout(this.scrollTimeout)
  }
}
</script>

<style lang="less">
.ant-drawer-content-wrapper {
  height: auto !important;
}

/* 初始状态样式 */
.anchor-menu {
  position: fixed;
  bottom: 10px; /* 固定在底部 */
  right: 10px; /* 固定在右侧 */
  z-index: 1000;
  opacity: 1; /* 完全可见 */
  // transition: opacity 2s ease-in-out, transform 2s ease-in-out; /* 添加平滑过渡效果 */
  // transform: translateY(0); /* 初始位置，完全显示 */
  transition: all 1s ease;
}

/* 隐藏状态样式 */
.hidden-menu {
  opacity: 0; /* 隐藏时设置透明度为 0 */
  // transform: translateY(30px); /* 隐藏时向下移动 30px，配合透明度效果 */
  transition: all 1s ease;
}

.menu-button {
  // background-color: #333; /* 按钮 hover 背景色 */
  // color: #f5f5f5;
  background-color: #f5f5f5; /* 按钮 hover 背景色 */
  color: #333;
  border-radius: 6px; /* 按钮圆角 */
  padding: 2px 1rem 5px;
  font-size: 3rem;
  border: none;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
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
}
.drawer-item {
  margin: 1rem 0;
  cursor: pointer;
  font-size: 1.5rem;
  a {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
}
.link-english {
  color: #fff; /* 英文文本颜色 */
}
.link-chinese {
  color: #f5f5f5; /* 中文文本颜色 */
}

.custom-close-button {
  display: none;
}
</style>
