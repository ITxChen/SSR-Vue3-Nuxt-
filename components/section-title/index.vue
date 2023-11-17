<template>
  <div class="section-title">
    <h3>{{ title }}</h3>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title: string;
}
const props = withDefaults(defineProps<IProps>(), {
  title: "",
});
</script>

<style lang="scss">
.section-title {
  color: black;
  // margin: 5px 5px;
  margin-top: 5px;
  margin-bottom: 20px;
  display: inline-block;
}
</style>
