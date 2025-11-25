<script setup lang="ts">
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import FloatLabel from 'primevue/floatlabel';
import { useSprintStore } from '@/store/useSprint';

const sprintStore = useSprintStore()
</script>

<template>
  <section class="flex mt-10 gap-2">
    <FloatLabel variant="in" class="flex-1">
        <InputNumber id="sprint-goal" v-model="sprintStore.goal" :min="1" fluid/>
        <label for="sprint-goal">Objetivo de Sprint</label>
    </FloatLabel>
    <Button rounded icon="pi pi-trash" severity="danger" @click="sprintStore.deleteSprint" aria-label="Eliminar sprint" />
  </section>
</template>