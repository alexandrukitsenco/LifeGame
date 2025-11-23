<script setup lang="ts">
import { useDateFormat } from '@vueuse/core';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import VirtualScroller from 'primevue/virtualscroller';
import { useSprintStore } from '@/store/useSprint';

const sprintStore = useSprintStore()
</script>

<template>
    <section v-if="sprintStore.tasks.length > 0">
        <Divider />
        <h2 class="text-lg font-bold">Tareas realizadas</h2>
        <VirtualScroller :items="sprintStore.taskLogsSorted" :itemSize="50" style="height: 600px;">
            <template #item="{ item }">
                <article class="border border-surface-200 p-2 mb-2 flex justify-between items-center">
                    <span>{{ item.name }} - {{ item.effort }}</span>
                    <span>{{ useDateFormat(item.createdAt, 'DD/MM/YYYY HH:mm').value }}<Button icon="pi pi-trash" rounded text severity="danger" @click="sprintStore.deleteTask(item.createdAt)" /></span>
                </article>
            </template>
        </VirtualScroller>
    </section>
</template>