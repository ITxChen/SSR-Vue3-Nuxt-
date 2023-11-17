<template>
  <div class="navbar">
    <div class="wrapper content">
      <div class="content-left">
        <img src="@/assets/img/oppo.jpg" class="img" />
        <NuxtLink to="">OPPO 商城</NuxtLink>
      </div>
      <div class="content-center">
        <ul>
          <template v-for="(item, index) in navbars" :key="item.id">
            <li :class="{ active: currentIndex === index }">
              <NuxtLink
                :to="getPagePath(item)"
                @click="handleItemClick(index)"
                >{{ item.title }}</NuxtLink
              >
            </li>
          </template>
        </ul>
      </div>
      <div class="content-right">
        <Search />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { INavbars } from "~/store/home";
export interface IProps {
  navbars: INavbars[];
}
const props = withDefaults(defineProps<IProps>(), {
  navbars: () => [],
});
const currentIndex = ref<number>(0);
const handleItemClick = (index: number) => {
  currentIndex.value = index;
};

const getPagePath = computed(() => {
  return (item: INavbars) => {
    let path = "/";
    if (item.type !== "oppo") {
      path += item.type;
    }
    return path;
  };
});
</script>

<style lang="scss">
.navbar {
  padding-top: 10px;
  color: gray;
  cursor: pointer;
  margin-bottom: 15px;
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .content-left {
      color: black;
      vertical-align: middle;
      display: flex;
      justify-content: center;
      align-items: center;
      .img {
        width: 25px;
        height: 25px;
        border-radius: 15%;
        margin-right: 5px;
      }
    }
    .content-center {
      display: flex;
      align-items: center;
      .active {
        color: black;
      }
      // .link:hover {
      //   color: black; /* 鼠标移动上去时的黑色字体 */
      // }
      ul {
        width: 900px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
}
</style>
