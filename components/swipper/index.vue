<template>
  <div class="swipper">
    <el-carousel height="480px">
      <el-carousel-item v-for="item in banners" :key="item.id">
        <!-- <h3 class="small justify-center" text="2xl">{{ item }}</h3> -->
        <img :src="item.picStr" alt="" class="small justify-center" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
// import { ELCarousel, ELCarouselItem } from "element-plus";
import type { IBanners } from "@/store/home";
interface IProps {
  banners: IBanners[];
}
const props = withDefaults(defineProps<IProps>(), {
  banners: () => [],
});
</script>

<style lang="less">
.swipper {
  color: red;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
