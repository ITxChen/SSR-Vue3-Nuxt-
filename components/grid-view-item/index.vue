<template>
  <div class="grid-view-item">
    <!-- {{ item }} -->
    <div class="item-img">
      <img :src="item.url" alt="" class="img" />
    </div>
    <div class="item-title">{{ item.title }}</div>
    <div class="item-labels">
      <span class="label" v-for="vi in item.activityList">
        {{ vi.activityInfo }}</span
      >
    </div>
    <div class="item-price">
      <span class="prefix">{{ item.priceInfo?.prefix }} </span>
      <!-- <span>{{ item.priceInfo?.currecyTag }}</span> -->
      <span class="buyPrice">￥{{ item.priceInfo?.buyPrice }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
// interface IProps{
//     itme:any{}
// }
interface IProps {
  item: any;
}
const props = withDefaults(defineProps<IProps>(), {
  item: () => ({}),
});
// console.log(item);
</script>

<style lang="scss">
.grid-view-item {
  color: red;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .item-img {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  // img {
  //   width: 150px;
  //   height: 150px;
  // }
  .item-title {
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0px 55px;
  }
  .item-labels {
    display: flex;
    justify-content: center;
    flex-direction: row;
    span {
      border: 1px red solid;
      margin-right: 5px;
      margin-top: 15px;
      padding: 0 2px;
      text-align: center;
    }
  }
  .item-price {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 18px;
    align-items: center;
    .buyPrice {
      font-size: 19px;
      margin-left: 5px;
    }
  }
  &:hover {
    transform: scale(1.1);
  }
}
</style>
