import { h, Ref } from 'vue';
import { Button } from '@arco-design/web-vue/es';

export const createColumns = ({ visible, form }: ICreateColumnsOptions) => [
  {
    title: '用户名',
    dataIndex: 'username',
  },

  {
    title: '生成时间',
    dataIndex: 'createDate',
  },
  {
    title: '更新时间',
    dataIndex: 'updateDate',
  },
  {
    title: '操作',
    dataIndex: 'action',
    render() {
      return h(
        Button,
        {
          onClick: () => {
            visible.value = true;
          },
        },
        {
          default: () => '关联账户',
        }
      );
    },
  },
];
