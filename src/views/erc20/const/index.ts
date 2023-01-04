import { h } from 'vue';
import { Button } from '@arco-design/web-vue/es';

export const columns = [
  {
    title: '合约地址',
    dataIndex: 'contractAddress',
  },
  {
    title: '总货币量',
    dataIndex: 'totalSupply',
  },
  {
    title: '货币名称',
    dataIndex: 'name',
  },

  {
    title: '货币单位',
    dataIndex: 'symbol',
  },
  {
    title: '货币精度',
    dataIndex: 'precision',
  },
  // {
  //   title: '操作',
  //   dataIndex: 'action',
  //   render() {
  //     return h(() => [
  //       h(Button, {}, () => '删除'),
  //       h(Button, {}, () => '查看'),
  //       h(Button, {}, () => '转账'),
  //     ]);
  //   },
  // },
];
