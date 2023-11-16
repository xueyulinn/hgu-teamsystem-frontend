<template>

  <van-nav-bar title="伙伴匹配" left-text="返回" left-arrow fixed>
    <template #right>
      <van-icon name="search" size="68" />
    </template>
  </van-nav-bar>


  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item icon="search">队伍</van-tabbar-item>
    <van-tabbar-item icon="friends-o">个人</van-tabbar-item>
  </van-tabbar>

</template>


<script setup lang="ts">

import {ref} from "vue";

const active = ref(0);

const onChange = {};

</script>