<template>
  <div class="home">
    <div class="wrapper content">
      <swipper :banners="data.data.banners"> </swipper>
      <tab-category :categorys="data.data.categorys"></tab-category>
      <template v-for="category in data?.data.categorys" :key="category.id">
        <section-title :title="category.title"></section-title>
        <grid-view
          :categoryUrl="category.url"
          :productDetailss="category.productDetailss"
        ></grid-view>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getHomeInfo } from "~/service/home";
const { data } = await getHomeInfo("onePlus");
console.log(data.value.data.banners);
</script>

<style lang="scss">
.onePlus {
  color: red;
}
</style>
