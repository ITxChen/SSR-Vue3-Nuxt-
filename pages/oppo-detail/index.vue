<template>
  <div class="oppo-detail wrapper">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="demo-tabs">
      <template v-for="item in data.data" class="Tab">
        <el-tab-pane :label="item.title" :name="item.title">
          <grid-view :product-detailss="item.productDetailss"></grid-view>
        </el-tab-pane>
      </template>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { getDetails } from "@/service/detail";
import type { IDetailProductType } from "@/service/detail";
import type { TabsPaneContext } from "element-plus";
import { ref } from "vue";
// 获取路由参数
const route = useRoute();
const { type } = route.query;
// 获取数据
const { data } = await getDetails(type as IDetailProductType);

const activeName = ref(data.value.data[0].title);
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
// console.log(data.value.data);
</script>

<style lang="scss">
.oppo-detail {
  display: flex;
  margin-top: 25px;
  .el-tabs__nav-wrap {
    background-color: rgb(249, 245, 245);
    // color: red;
  }

  // .el-tabs__item {
  //   // padding: 0px 40px;
  // }
}
</style>
