<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderMenu from '@/components/HeaderMenu.vue';
</script>

<template >
  <HeaderMenu class="sticky top-0 z-10" />
  <div class="flex flex-col mt-10 px-4 max-w-md mx-auto">
    
    <RouterView />
  </div>
  
</template>

