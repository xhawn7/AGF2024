<template>
  <a-modal
    v-model:open="open"
    :closable="false"
    :footer="null"
    centered
    wrapClassName="commodity-dialog"
  >
    <div class="body_box">
      <div class="left">
        <div class="image">
          <img :src="list[activeKey].image" />
        </div>
        <ul class="row" v-if="list.length > 1">
          <li
            v-for="(i, index) in list"
            :key="index"
            :class="`${activeKey === index ? 'active' : ''}`"
            @click="cutItem(i, index)"
          >
            <img :src="i.image" />
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="name">{{ list[activeKey].name }}</div>
        <div class="price">{{ list[activeKey].price }}</div>

        <p
          class="matter"
          v-for="(i, index) in list[activeKey].matter"
          :key="index"
          v-html="i"
        ></p>
        <p
          class="size"
          v-for="(i, index) in list[activeKey].size"
          :key="index"
          v-html="i"
        ></p>
        <p
          class="type"
          v-for="(i, index) in list[activeKey].type"
          :key="index"
          v-html="i"
        ></p>
        <p
          class="hint"
          v-for="(i, index) in list[activeKey].hint"
          :key="index"
          v-html="i"
        ></p>
      </div>
    </div>
    <div class="close" @click="close">
      <i class="iconfont icon-guanbi" />
    </div>
  </a-modal>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, watch, onMounted } from 'vue'

export default defineComponent({
  name: 'InformationDialog',
  props: {
    open: Boolean,
    list: Array
  },
  setup(props: any, { emit }: any) {
    const activeKey: any = ref(0)

    const cutItem = (i: any, index: any) => {
      activeKey.value = index
    }
    const close = () => {
      emit('request')
    }

    return {
      activeKey,
      cutItem,
      close
    }
  }
})
</script>

<style lang="less">
.row {
  display: flex;
}
.ant-modal-root {
  .ant-modal-mask {
    background-color: rgba(0, 0, 0, 0.8);
  }
  .commodity-dialog {
    .ant-modal {
      width: 1200px !important;
      .ant-modal-content {
        border-radius: 0;
        background: #1f1f1f;
        border: 2px solid #fff;
        padding: 0;
        .ant-modal-body {
          display: flex;
          position: relative;
          padding: 60px 40px 10px 60px;
          .body_box {
            height: 72vh;
            display: flex;
            position: relative;
            overflow-y: auto;
          }
          .left {
            width: 550px;
            flex-shrink: 0;
            margin-right: 42px;
            .image {
              width: 100%;
              height: 550px;
              background: #fff;
              border: 2px solid #fff;
              img {
                height: 100%;
              }
            }
            ul {
              li {
                width: 94px;
                height: 94px;
                background: #fff;
                margin-right: 20px;
                margin-top: 20px;
                cursor: pointer;
                transition: all 0.5s;
                &:nth-child(5n) {
                  margin-right: 0px;
                }
                &.active {
                  border: 2px solid #fff;
                  transform: scale(1.1);
                }
              }
            }
          }
          .right {
            width: 100%;
            .name {
              font-size: 24px;
              font-family: YuGothM;
              font-weight: bold;
              color: #fff;
              padding-bottom: 20px;
              border-bottom: 1px solid #fff;
            }
            .price {
              font-size: 28px;
              line-height: 28px;
              font-family: YuGothM;
              font-weight: bold;
              color: #ffffff;
              margin-top: 20px;
              margin-bottom: 50px;
            }
            p {
              display: flex;
              align-items: center;
              font-size: 16px;
              line-height: 20px;
              font-family: YuGothM;
              font-weight: 400;
              color: #ffffff;
              margin-bottom: 20px;
              span {
                flex-shrink: 0;
                display: block;
                width: 80px;
                margin-right: 24px;
              }
            }
          }
          .close {
            position: absolute;
            top: -40px;
            right: -40px;
            width: 80px;
            height: 80px;
            background: #1f1f1f;
            border: 2px solid #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            i {
              font-size: 29px;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .ant-modal-root {
    .commodity-dialog {
      .ant-modal {
        width: 90% !important;
        .ant-modal-content {
          border-width: 0.125rem;
          .ant-modal-body {
            padding: 3.75rem 2.5rem 3.75rem 3.75rem;
            .left {
              width: 34.375rem;
              margin-right: 2.625rem;
              .image {
                height: 34.375rem;
                border-width: 0.125rem;
              }
              ul {
                li {
                  width: 5.875rem;
                  height: 5.875rem;
                  margin-right: 1.25rem;
                  margin-top: 1.25rem;
                  &.active {
                    border-width: 0.125rem;
                  }
                }
              }
            }
            .right {
              .name {
                font-size: 1.5rem;
                padding-bottom: 1.25rem;
                border-bottom-width: 0.0625rem;
              }
              .price {
                font-size: 1.75rem;
                line-height: 1.75rem;
                margin-top: 1.25rem;
                margin-bottom: 6.25rem;
              }
              p {
                font-size: 1rem;
                line-height: 1rem;
                margin-bottom: 1.25rem;
                span {
                  width: 5rem;
                  margin-right: 1.5rem;
                }
              }
            }
            .close {
              top: -2.5rem;
              right: -2.5rem;
              width: 5rem;
              height: 5rem;
              border-width: 0.125rem;
              i {
                font-size: 1.8125rem;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .ant-modal-root {
    .commodity-dialog {
      .ant-modal {
        width: calc(100% - 6.25rem) !important;
        .ant-modal-content {
          height: calc(100vh - 12rem);
          .ant-modal-body {
            height: 100%;
            flex-direction: column;
            padding: 2.5rem;
            .body_box {
              height: 85vh;
              flex-direction: column;
            }
            .left {
              width: 100%;
              margin-right: 0;
              .image {
                width: 100%;
                height: 35.625rem;
              }
              ul {
                li {
                  width: 6.125rem;
                  height: 6.125rem;
                  margin-right: 1.125rem;
                  margin-top: 1.25rem;
                }
              }
            }
            .right {
              .name {
                font-size: 1.75rem;
                margin-top: 2.5rem;
              }
              .price {
                margin-bottom: 2.3rem;
              }
              p {
                font-size: 1.5rem;
                line-height: 1.9rem;
                span {
                  width: 8.5rem;
                  margin-right: 1.875rem;
                }
              }
            }
            .close {
              top: calc(100% - 2.5rem);
              right: calc(50% - 2.5rem);
            }
          }
        }
      }
    }
  }
}
</style>
