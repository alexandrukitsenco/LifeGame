<script setup lang="ts">
import { useStorage } from '@vueuse/core';
import ProgressBar from 'primevue/progressbar';
import { computed } from 'vue';
import AddTask from '@/components/AddTask.vue';
import SuggestedTasks from '@/components/SuggestedTasks.vue';

const objective = useStorage<number>('objective', null)
const tasks = useStorage<any[]>('tasks', [])
const totalEffort = computed(() => {
  return tasks.value.reduce((acc, task) => acc + task.effort, 0)
})
const progress = computed(() => {
  return ((totalEffort.value?? 0) / (objective.value?? 0)) * 100
})


</script>

<template>
  <div v-if="objective">
    <h4>Objetivo de sprint: {{ objective }}</h4>
    <ProgressBar :value="progress" :showValue="false" />
    <SuggestedTasks />
    <AddTask />
  </div>
  <div v-else>
    <p>Añade un objetivo de sprint para empezar a Gamificar tu vida</p>
  </div>
</template>