<script setup lang="ts">
 import Button from 'primevue/button';
 import InputNumber from 'primevue/inputnumber';
 import FloatLabel from 'primevue/floatlabel';
 import { useStorage } from '@vueuse/core'

 const objective = useStorage('objective', null)
 const tasks = useStorage<any[]>('tasks', [])
 const deleteSprint = () => {
  objective.value = null
  tasks.value = []
 }
 
</script>

<template>
  <div class="flex mt-10 gap-2">
    <FloatLabel variant="in" class="flex-1">
        <InputNumber v-model="objective" :min="1" fluid/>
        <label for="value">Objetivo de Sprint</label>
    </FloatLabel>
    <Button rounded icon="pi pi-trash" severity="danger" @click="deleteSprint" />

  </div>
</template>