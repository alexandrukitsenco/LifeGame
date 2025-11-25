<script setup lang="ts">
import Chip from 'primevue/chip';   
import Divider from 'primevue/divider';
import { useSprintStore } from '@/store/useSprint';

const sprintStore = useSprintStore()

const addTask = (task: any) => {
    sprintStore.addTask({...task})
}
</script>

<template>
    <section v-if="sprintStore.suggestedTasks.length > 0">
        <Divider />
        <h2 class="text-lg font-bold">Tareas sugeridas</h2>
        <ul class="flex flex-wrap gap-2">
            <li v-for="task in sprintStore.suggestedTasks" :key="task.name">
                <Chip class="cursor-pointer" @click="addTask(task)">
                    <span>{{ task.name }}</span>
                    <span>{{ task.effort }}</span>
                </Chip>
            </li>
        </ul>
    </section>
</template>