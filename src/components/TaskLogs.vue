<script setup lang="ts">
import { useStorage, useDateFormat } from '@vueuse/core';
import { computed } from 'vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import VirtualScroller from 'primevue/virtualscroller';
const taskLogs = useStorage<any[]>('tasks', [])
const taskLogsSorted = computed(() => {
    const localTaskLogs = [...taskLogs.value]
    return localTaskLogs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
})
const deleteTaskLog = (createdAt: Date) => {
    taskLogs.value = taskLogs.value.filter((taskLog) => taskLog.createdAt !== createdAt)
}
</script>

<template>
    <div v-if="taskLogs.length > 0">
        <Divider />
        <h3 class="text-lg font-bold">Tareas realizadas</h3>
            <VirtualScroller :items="taskLogsSorted" :itemSize="50" style="height: 600px;" >
                <template #item="{ item }">
                    <div class="border border-surface-200 p-2 mb-2 flex justify-between items-center">
                        <span >{{ item.name }} - {{ item.effort }}</span>
                        <span >{{ useDateFormat(item.createdAt, 'DD/MM/YYYY HH:mm').value }}<Button icon="pi pi-trash" rounded text severity="danger" @click="deleteTaskLog(item.createdAt)" /></span>
                    </div>
                        
                </template>
            </VirtualScroller>
    </div>
</template>