<template>
  <div class="layout">
    <app-header></app-header>
    <navbar :navbars="navbars"></navbar>
    <slot></slot>
    <app-footer></app-footer>
  </div>
</template>
<script setup lang="ts">
import { useHomeStore } from "~/store/home";
import { storeToRefs } from "pinia";
const homeStore = useHomeStore();
const { navbars } = storeToRefs(homeStore);
homeStore.fecthHomeInfoData("oppo");
</script>

