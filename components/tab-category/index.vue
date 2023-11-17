<template>
  <div class="tab-category">
    <template v-for="(item, index) in categorys" :key="item.id">
      <div class="category-item" @click="handleItemClick(item)">
        <img :src="item.picStr" alt="" class="img" />
        <div class="title" style="text-align: center">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ICategorys } from "@/store/home";
interface IProps {
  categorys: ICategorys[];
}
const props = withDefaults(defineProps<IProps>(), {
  categorys: () => [],
});
const emits = defineEmits<{
  (e: "itemClick", item: ICategorys): void;
}>();
const handleItemClick = (item: ICategorys) => {
  emits("itemClick", item);
};
</script>

<style lang="less">
.tab-category {
  display: flex;
  flex-direction: row;
  margin: 30px 0px;
  .category-item {
    .img {
      width: 159px;
      height: 120px;
    }
  }
}
</style>
