import { defineStore } from "pinia";
import { getHomeInfo, type HomeInfo } from "~/service/home";
import type { IResultData } from "~/service/index";
export interface INavbars {
  id?: string;
  title?: string;
  type?: string;
  link?: string;
}
export interface IBanners {
  id?: string;
  picStr?: string;
  link?: string;
  title?: string;
  url?: any;
  productDetailss?: any[];
}
export interface ICategorys {
  id?: string;
  picStr?: string;
  title?: string;
  type?: string;
  url?: string;
  link?: string;
  productDetailss?: any[];
}
export interface IHomeState {
  navbars?: INavbars[];
  categorys?: IBanners[];
  banners?: ICategorys[];
  title?: string;
}
export const useHomeStore = defineStore("home", {
  state: () => {
    return {
      navbars: [] as any,
      categorys: [] as any,
      banners: [] as any,
    };
  },
  actions: {
    async fecthHomeInfoData(type: HomeInfo) {
      const { data } = await getHomeInfo(type);
      this.banners = data.value?.data.banners || [];
      this.categorys = data.value?.data.categorys || [];
      this.navbars = data.value?.data.navbars || [];
    },
  },
});
