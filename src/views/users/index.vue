<template>
  <Container class="user">
    <a-table :columns="columns" :data="data"> </a-table>
    <a-modal :visible="visible" @ok="handleOk" @cancel="handleCancel">
      <template #title> 绑定钱包 </template>
      <a-form ref="formRef" :model="form">
        <a-form-item field="accountAddress" label="钱包地址">
          <a-input v-model="form.accountAddress" placeholder="请输入钱包地址" />
        </a-form-item>
        <a-form-item label="">
          <a-button @click="openAccount">导入当前钱包地址</a-button>
        </a-form-item>
      </a-form>
    </a-modal>
  </Container>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import Container from '@/components/container/index.vue';
  import { getProvider } from '@/hooks/erc20';
  import { FormInstance } from '@arco-design/web-vue';
  import { createColumns } from './const';
  import { bindAccount, getUserList } from './api';

  const visible = ref(false);
  const formRef = ref<FormInstance>();
  const handleOk = () => {
    formRef.value?.validate((err) => {
      if (!err) {
        bindAccount(form.value).then(() => {
          visible.value = false;
        });
      }
    });
  };
  const handleCancel = () => {
    visible.value = false;
  };
  const form = ref({
    accountAddress: '',
  });

  const columns = createColumns({ visible });
  const data = ref([]);
  const getUserListWrap = () => {
    getUserList().then((res) => {
      data.value = res.data;
    });
  };

  const openAccount = () => {
    getProvider().then((res: any) => {
      const { selectedAddress: accountAddress } = res.provider;
      form.value.accountAddress = accountAddress;
    });
  };

  onMounted(() => {
    getUserListWrap();
  });
</script>

<style></style>
