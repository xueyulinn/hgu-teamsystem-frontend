<template>

  <van-nav-bar title="伙伴匹配" left-text="返回"  right-text="搜索" left-arrow fixed @click-left="back" @click-right="search">

  </van-nav-bar>

  <div id="content">
    <router-view/>
  </div>

  <van-tabbar @change="onChange" route>
    <van-tabbar-item to="/" icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="search">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o">个人</van-tabbar-item>
  </van-tabbar>

</template>


<script setup lang="ts">

import {useRouter} from "vue-router";

const router = useRouter();
const search = () => {
  router.push('/search')
};

const back = () => {
  router.back();
};

const onChange = {

};

</script>

<style scoped>
#content {
  padding-bottom: 50px;
}
</style>