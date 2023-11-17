<template>
  <div class="app-header">
    <div class="wrapper">
      <div class="content-left">
        <NuxtLink to="" class="link"><span>oppo官网</span> </NuxtLink>
        <NuxtLink to="" class="link"><span>一加官网</span></NuxtLink>
      </div>
      <div class="content-right">
        <NuxtLink
          to=""
          class="link app"
          @mouseover="isHover = true"
          @mouseout="isHover = false"
        >
          下载OPPO 商城app|
          <div class="download" v-if="isHover">
            <img src="@/assets/img/1.png" alt="" class="img" />
            <div>扫码下载商城app</div>
          </div>
        </NuxtLink>
        <NuxtLink to="/login" class="link"
          ><i class="iconfont icon-denglu-copy"></i> 登录</NuxtLink
        >
        <NuxtLink to="/register" class="link"
          ><i class="iconfont icon-zhuce"></i> 注册</NuxtLink
        >
        <NuxtLink to="" class="link"
          ><i class="iconfont icon-gouwuchekong"></i> 购物车</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isHover = ref(false);
</script>

<style lang="scss">
.app-header {
  color: white;
  background-color: black;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    .link {
      margin-right: 15px;
      text-align: center;
      color: aliceblue;
    }
    .content-right {
      .download {
        color: black;
        // border: 1px solid red;
        position: absolute;
        top: 28px;
        padding: 8px;
        z-index: 10000;
        .img {
          width: 90px;
          height: 90px;
        }
      }
    }
  }
}
</style>
