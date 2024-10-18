<template>
  <div class="anchor-menu">
    <button @click="toggleMenu" class="menu-button" :style="menuStyle">
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
      <span @click="toggleMenu" class="custom-close-button">✕</span>

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
      isMenuVisible: false,
      isHidden: false,
      lastScrollY: 0,
      scrollTimeout: null,
      menuStyle: {
        bottom: '10px',
        right: '10px'
      }
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible
    },
    handleScroll() {
      const currentScrollY = window.scrollY

      if (currentScrollY > this.lastScrollY) {
        this.isHidden = false
      } else {
        this.isHidden = true
      }

      this.lastScrollY = currentScrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)

    if (this.scrollTimeout) clearTimeout(this.scrollTimeout)
  }
}
</script>

<style lang="less">
.ant-drawer-content-wrapper {
  height: auto !important;
}

.anchor-menu {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 1000;
  opacity: 1;
  transition: all 1s ease;
}

.menu-button {
  background-color: #f5f5f5;
  color: #333;
  border-radius: 6px;
  padding: 2px 1rem 5px;
  font-size: 3rem;
  border: none;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
}

.custom-close-button {
  font-size: 18px;
  cursor: pointer;
  color: #333;
  float: right;
  margin: 10px;
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
  color: #fff;
}
.link-chinese {
  color: #f5f5f5;
}

.custom-close-button {
  display: none;
}
</style>
