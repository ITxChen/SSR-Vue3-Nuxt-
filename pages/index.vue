<template>
  <div class="home">
    <div class="wrapper content">
      <swipper :banners="banners"> </swipper>
      <tab-category
        :categorys="categorys"
        @item-click="handleItemClick"
      ></tab-category>
      <template v-for="category in categorys" :key="category.id">
        <section-title :title="category.title"></section-title>
        <grid-view
          :category-url="category.url"
          :productDetailss="category.productDetailss"
        ></grid-view>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHomeStore } from "~/store/home";
import type { ICategorys } from "~/store/home";
import { storeToRefs } from "pinia";
const homeStore = useHomeStore();
const { banners, categorys } = storeToRefs(homeStore);
const handleItemClick = (item: ICategorys) => {
  console.log(item.title);
  // 页面跳转 编程导航
  return navigateTo({
    path: "/oppo-detail",
    query: {
      type: item.type,
    },
  });
};
// console.log(categorys.value);
</script>

<style lang="scss"></style>
