<script setup lang="ts">
import ProgressBar from 'primevue/progressbar';
import AddTask from '@/components/AddTask.vue';
import SuggestedTasks from '@/components/SuggestedTasks.vue';
import TaskLogs from '@/components/TaskLogs.vue';
import { useSprintStore } from '@/store/useSprint';

const sprintStore = useSprintStore()
</script>

<template>
  <section v-if="sprintStore.goal">
    <h1>Objetivo de sprint: {{ sprintStore.goal }}</h1>
    <ProgressBar :value="sprintStore.progress" :showValue="false" />   
    <SuggestedTasks />
    <TaskLogs />
    <AddTask />
  </section>
  <section v-else>
    <p>Añade un objetivo de sprint para empezar a Gamificar tu vida</p>
  </section>
</template>