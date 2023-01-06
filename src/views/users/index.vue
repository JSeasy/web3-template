<template>
  <Container class="erc20">
    <a-table :columns="columns" :data="data"> </a-table>
  </Container>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import Container from '@/components/container/index.vue';
  import { columns } from './const';
  import { getUserList } from './api';

  const data = ref([]);
  const getUserListWrap = () => {
    getUserList().then((res) => {
      data.value = res.data;
    });
  };

  onMounted(() => {
    getUserListWrap();
  });
</script>

<style></style>
