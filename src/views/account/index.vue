<template>
  <Container class="account">
    <a-table :columns="columns" :data="data"> </a-table>
  </Container>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import Container from '@/components/container/index.vue';
  import { createColumns } from './const';
  import { getAccountList } from './api';

  const columns = createColumns();
  const data = ref([]);
  const getAccountListWrap = () => {
    getAccountList().then((res) => {
      data.value = res.data;
    });
  };

  onMounted(() => {
    getAccountListWrap();
  });
</script>

<style></style>
