<script setup lang="ts">
import { computed } from 'vue';
import { useStorage } from '@vueuse/core';
import Chip from 'primevue/chip';   
import Divider from 'primevue/divider';

const tasks = useStorage<any[]>('tasks', [])

const suggestedTasks = computed(() => {
    const localTasks = [...tasks.value]

    const frequencies = localTasks.reduce((acc, task) => {
        acc[task.name] = (acc[task.name] || 0) + 1;
        return acc;
    }, {});
    const uniqueTasks = Object.values(
        localTasks.reduce((acc, task) => {
            if (!acc[task.name]) acc[task.name] = task;
            return acc;
        }, {})
    );
    const sortedUnique = uniqueTasks.sort((a: any, b: any) => {
        return frequencies[b.name] - frequencies[a.name];
    });

    return sortedUnique.slice(0, 10)
})

const addTask = (task: any) => {
    tasks.value.push({...task, createdAt: new Date()})
}
</script>

<template>
    <div v-if="suggestedTasks.length > 0">
        <Divider />
        <h3 class="text-lg font-bold">Tareas sugeridas</h3>
        <ul class="flex flex-wrap gap-2">
            <li v-for="task in suggestedTasks" :key="task.name">
                <Chip class="cursor-pointer" @click="addTask(task)">
                    <span>{{ task.name }}</span>
                    <span>{{ task.effort }}</span>
                </Chip>
            </li>
        </ul>
    </div>
</template>