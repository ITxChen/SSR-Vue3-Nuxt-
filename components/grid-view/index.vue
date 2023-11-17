<template>
  <div class="grid-view">
    <!-- 第一个item -->
    <div class="first" v-if="categoryUrl">
      <img :src="categoryUrl" alt="" />
    </div>
    <template v-for="(item, index) in productDetailss" :key="item.id">
      <div class="grid-item">
        <solt>
          <GridViewItem :item="item"></GridViewItem>
        </solt>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  productDetailss?: any[];
  categoryUrl?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  productDetailss: () => [],
});
// console.log(props.productDetailss);
</script>

<style lang="scss">
.grid-view {
  //   color: red;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 1266 px;
  .first {
    width: 485px;
    margin-bottom: 30px;
    padding-right: 18px;
    padding-bottom: 45px;
    &:hover {
      transform: scale(1.1);
    }
    & > img {
      width: 100%;
      height: 100%;
      transform: scale(1.1);
    }
  }
  .grid-item {
    margin-bottom: 30px;
    padding-right: 18px;
    padding-bottom: 45px;
    width: 18%;
    // height: 100px;
    // background-color: antiquewhite;
    // box-shadow: 5px 5px 12px #88889b;
  }
}
</style>
