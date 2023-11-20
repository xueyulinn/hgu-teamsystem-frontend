<template>
  <van-card
      v-for="user in userList"
      :tag="user.gender"
      :desc="user.profile"
      :title="user.username"
      :thumb="user.avatarUrl"
  >

    <template #tags>
      <van-tag v-for="tag in user.tags" plain type="primary">{{ tag }}</van-tag>
    </template>

    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>

  </van-card>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref} from "vue";

const route = useRoute();


const user = {
  id: 1,
  username: '鱼皮',
  userAccount: 'dogYupi',
  avatarUrl: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/logo.png',
  gender: '男',
  phone: '123112312',
  email: '12345@qq.com',
  planetCode: '1234',
  profile: '阿里阿里巴巴阿里巴巴是个快乐的青年',
  tags: ['Java', 'Python']
  // createTime: new Date(),
}

const userList = ref([user])

</script>

<style scoped>

</style>