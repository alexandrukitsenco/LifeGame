<script setup lang="ts">
import Button from 'primevue/button';
import { useStorage } from '@vueuse/core';

const objective = useStorage('objective', null)
</script>

<template>
  
  <div v-if="objective">
    <p>Objetivo de sprint: {{ objective }}</p>
  </div>
  <div v-else>
    <p>Añade un objetivo de sprint para empezar a Gamificar tu vida</p>
  </div>
</template>