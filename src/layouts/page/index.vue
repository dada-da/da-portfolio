<template>
  <RouterView>
    <template #default="{ Component, route }">
      <transition name="fade-slide" mode="out-in" appear>
        <keep-alive>
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </template>
  </RouterView>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { getTransitionName } from './transition';

export default defineComponent({
  name: 'PageLayout',
  setup() {
    return {
      getTransitionName,
    };
  },
});
</script>
