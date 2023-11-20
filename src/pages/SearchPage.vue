<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        autofocus
    />
  </form>

  <van-divider content-position="left">已选标签</van-divider>

  <van-divider v-if="activeIds.length===0" content-position="left">请选择标签</van-divider>

  <van-row gutter="20">
    <van-col v-for="tag in activeIds">
      <van-tag plain type="primary" closeable @close="removeTag(tag)">{{ tag }}</van-tag>
    </van-col>
  </van-row>

  <van-divider content-position="left">可选标签</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="items"
  />
  <van-button block plain type="primary" @click="doSearch">搜索</van-button>


</template>

<script setup lang="ts">
import {ref} from 'vue';
import {showToast} from 'vant';
import router from "../router";

const searchText = ref('');

/**
 * 搜索过滤
 * @param val
 */
const onSearch = (val) => {
  items.value = originalItems.map(parentTag => {
    const tempChildren = [...parentTag.children];
    const tempParentTag = {...parentTag};
    tempParentTag.children = tempChildren.filter(item => item.text.includes(searchText.value));
    return tempParentTag;
  });
};

const onCancel = () => {
  activeIds.value = [];
  items.value = originalItems;
};

//选择的标签
const activeIds = ref([]);
//选择的主标签
const activeIndex = ref(0);

const removeTag = (tag: any) => {
  activeIds.value = activeIds.value.filter(
      value => {
        value !== tag;
      }
  )
};

const originalItems = [
  {
    text: '浙江',
    children: [
      {text: '杭州', id: '杭州'},
      {text: '温州', id: '温州'},
      {text: '宁波', id: '宁波'},
    ],
  },
  {
    text: '江苏',
    children: [
      {text: '南京', id: '南京'},
      {text: '无锡', id: '无锡'},
      {text: '徐州', id: '徐州'},
    ],
  },
];

const items = ref(originalItems);

const doSearch = () => {
  router.push({
    path: '/user/list',
    query: {tags: activeIds.value}
  });
};

</script>

