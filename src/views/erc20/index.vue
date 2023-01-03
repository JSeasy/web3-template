<template>
  <Container class="erc20">
    <a-button @click="visible = true">新增自定义货币</a-button>

    <a-modal :visible="visible" @ok="handleOk" @cancel="handleCancel">
      <template #title> 发布货币 </template>
      <a-form :model="form">
        <a-form-item field="name" label="货币名称">
          <a-input v-model="form.name" placeholder="输入您的货币名称" />
        </a-form-item>
        <a-form-item field="symbol" label="货币代号">
          <a-input v-model="form.symbol" placeholder="请输入货币代号" />
        </a-form-item>
        <a-form-item field="totalSupply" label="货币总额">
          <a-input v-model="form.totalSupply" placeholder="请输入货币总额" />
        </a-form-item>
        <a-form-item field="precision" label="货币精度">
          <a-input v-model="form.precision" placeholder="请输入货币精度" />
        </a-form-item>
      </a-form>
    </a-modal>
    <a-table :columns="columns" :data="data" style="margin-top: 12px">
    </a-table>
    <!-- <a-button @click="getBalance">查询余额</a-button>
    <a-button @click="getInfo('decimals')">查询精度</a-button>
    <a-button @click="getInfo('name')">查询名称</a-button>
    <a-button @click="getInfo('symbol')">查询单位</a-button>
    <a-button @click="getInfo('totalSupply')">查询总额</a-button>
    <a-button @click="approve()">授予额度</a-button>
    <a-button @click="transfer()">转账代币</a-button>
    <a-button @click="transferFrom()">授予代币</a-button>
    <a-button @click="allowance()">查询额度</a-button> -->
  </Container>
</template>

<script setup lang="ts">
  import { onMounted, reactive, ref } from 'vue';
  import { getTokenList } from '@/api/erc20';
  import { deployERC20Contract, emitMethod, IParams } from '@/hooks/erc20';
  import Container from '@/components/container/index.vue';
  import { columns } from './const';
  import { addToken } from './api';

  const visible = ref(false);
  const form = reactive<IParams>({
    name: '',
    symbol: '',
    totalSupply: '',
    precision: '',
  });

  const handleOk = () => {
    deployERC20Contract(form).then((res) => {
      const { address: contractAddress } = res;
      addToken({ contractAddress, ...form }).then(() => {
        getTokenListWrap();
        visible.value = false;
      });
    });
  };
  const handleCancel = () => {
    visible.value = false;
  };
  // const getBalance = () => {
  //   emitMethod('balanceOf', [
  //     '0x39a4B2296ebD38d5c5e6c9dA59c00E08e8aDB7B3',
  //   ]).then((res) => {
  //     console.log(res.toString());
  //   });
  // };

  // const getInfo = (method: string) => {
  //   emitMethod(method, []).then((res) => {
  //     console.log(res.toString());
  //   });
  // };

  // const allowance = () => {
  //   emitMethod('allowance', [
  //     '0x39a4B2296ebD38d5c5e6c9dA59c00E08e8aDB7B3',
  //     '0xB299E1B69FEB237b0F5164B3190Cb440BdA09cA2',
  //   ]).then((res) => {
  //     console.log(res.toString());
  //   });
  // };
  // const approve = () => {
  //   emitMethod('approve', [
  //     '0xB299E1B69FEB237b0F5164B3190Cb440BdA09cA2',
  //     123456,
  //   ]).then((res) => {
  //     console.log(res);
  //   });
  // };
  // const transfer = () => {
  //   emitMethod('transfer', [
  //     '0xB299E1B69FEB237b0F5164B3190Cb440BdA09cA2',
  //     123456,
  //   ]).then((res) => {
  //     console.log(res);
  //   });
  // };
  // const transferFrom = () => {
  //   emitMethod('transferFrom', [
  //     '0x39a4B2296ebD38d5c5e6c9dA59c00E08e8aDB7B3',
  //     '0xB299E1B69FEB237b0F5164B3190Cb440BdA09cA2',
  //     123456,
  //   ]).then((res) => {});
  // };
  const data = ref([]);
  const getTokenListWrap = () => {
    getTokenList().then((res) => {
      data.value = res.data;
    });
  };

  onMounted(() => {
    getTokenListWrap();
  });
</script>

<style></style>
