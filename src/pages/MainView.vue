<script setup lang="ts">
import ProgressBar from 'primevue/progressbar';
import AddTask from '@/components/AddTask.vue';
import SuggestedTasks from '@/components/SuggestedTasks.vue';
import TaskLogs from '@/components/TaskLogs.vue';
import { useSprintStore } from '@/store/useSprint';

const sprintStore = useSprintStore()
</script>

<template>
  <div v-if="sprintStore.objective">
    <h4>Objetivo de sprint: {{ sprintStore.objective }}</h4>
    <ProgressBar :value="sprintStore.progress" :showValue="false" />   
    <SuggestedTasks />
    <TaskLogs />
    <AddTask />
  </div>
  <div v-else>
    <p>Añade un objetivo de sprint para empezar a Gamificar tu vida</p>
  </div>
</template>