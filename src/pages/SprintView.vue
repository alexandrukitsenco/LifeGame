<script setup lang="ts">
 import Button from 'primevue/button';
 import InputNumber from 'primevue/inputnumber';
 import FloatLabel from 'primevue/floatlabel';
 import { useStorage } from '@vueuse/core'

 const objective = useStorage('objective', null)
</script>

<template>
  <div class="flex mt-10 gap-2">
    <FloatLabel variant="in">
        <InputNumber v-model="objective" :min="1"/>
        <label for="value">Objetivo de Sprint</label>
    </FloatLabel>
    <Button rounded icon="pi pi-trash" severity="danger" @click="objective = null" />

  </div>
</template>