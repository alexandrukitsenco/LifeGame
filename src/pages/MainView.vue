<script setup lang="ts">
import { useStorage } from '@vueuse/core';
import ProgressBar from 'primevue/progressbar';
import { computed } from 'vue';
import AddTask from '@/components/AddTask.vue';

const objective = useStorage<number>('objective', null)
const efford = useStorage<number>('efford', 0)

const progress = computed(() => {
  return (efford.value / objective.value) * 100
})
</script>

<template>
  
  <div v-if="objective">
    <h4>Objetivo de sprint: {{ objective }}</h4>
    <ProgressBar :value="progress" :showValue="false" />
    <AddTask />
  </div>
  <div v-else>
    <p>Añade un objetivo de sprint para empezar a Gamificar tu vida</p>
  </div>
</template>