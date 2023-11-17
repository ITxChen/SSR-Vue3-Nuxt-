<template>
  <div class="search">
    <input type="text" placeholder="Reno9 系列" class="text" />
    <img src="@/assets/img/search.svg" class="img" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.search {
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f0f0;
  opacity: 35%;
  .img {
    width: 25px;
    height: 25px;
  }
  .text {
    border: 0px;
    outline: none;
    // border-radius: 15%;
    background-color: #f8f0f0;
  }
}
</style>
