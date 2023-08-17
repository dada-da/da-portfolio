<template>
  <Header :class="['fixed', 'w-screen', prefixCls]">
    <Menu :class="prefixCls" mode="horizontal">
      <MenuItem> About </MenuItem>
      <MenuItem> Works </MenuItem>
      <MenuItem> Posts </MenuItem>
      <MenuItem> Uses </MenuItem>
      <MenuItem> View Source </MenuItem>
    </Menu>
  </Header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Layout, Menu, MenuItem, MenuProps } from 'ant-design-vue';

import { prefixCls } from '/@/design';
export default defineComponent({
  name: 'LayoutHeader',
  components: {
    Header: Layout.Header,
    Menu,
    MenuItem,
  },
  setup() {
    return {
      prefixCls,
    };
  },
});
</script>

<style lang="scss">
@import './index.scss';
</style>
