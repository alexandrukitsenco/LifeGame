<script setup lang="ts">
import Button from 'primevue/button';
import Drawer from 'primevue/drawer';
import { ref } from 'vue';
import AutoComplete from 'primevue/autocomplete';
import Select from 'primevue/select';
import SelectButton from 'primevue/selectbutton';
import { useStorage } from '@vueuse/core';
import FloatLabel from 'primevue/floatlabel';

const show = ref(false)

const categories = [
    { name: 'Trabajo', value: 'work' },
    { name: 'Hogar', value: 'home' },
    { name: 'Estudios', value: 'studies' },
    { name: 'Salud', value: 'health' },
    { name: 'Otros', value: 'other' },
]

const taskName = ref('')
const taskCategory = ref('')
const taskEffort = ref(0)

const suggestions = [
    { name: 'Trabajo', value: 'work' },
    { name: 'Hogar', value: 'home' },
    { name: 'Estudios', value: 'studies' },
    { name: 'Salud', value: 'health' },
    { name: 'Otros', value: 'other' },
]

const effortOptions = [ {name: 'Baja', value: 1}, {name: 'Media', value: 2}, {name: 'Alta', value: 3} ]

const tasks = useStorage<any[]>('tasks', [])

const addTask = () => {
    console.log(taskName.value, taskCategory.value, taskEffort.value)
}
</script>

<template>
    <div class="absolute bottom-8 right-8">
        <Button icon="pi pi-plus" severity="primary" @click="show = true" />
        <Drawer v-model:visible="show" style="height: auto" position="bottom" :dismissableMask="true">
            <form class="flex flex-col gap-4">
                <FloatLabel variant="in" class="w-full">
                    <AutoComplete v-model="taskName" :suggestions="suggestions" fluid />
                    <label for="value">Nombre</label>
                </FloatLabel>
                <FloatLabel variant="in" class="w-full">
                    <Select v-model="taskCategory" :options="categories" optionLabel="name" optionValue="value" fluid />
                    <label for="value">Categoría</label>
                </FloatLabel>
                <SelectButton v-model="taskEffort" :options="effortOptions" optionLabel="name" optionValue="value" fluid />
                <Button class="mb-24"  label="Guardar" severity="primary" @click="addTask" />
                   
            </form>
        </Drawer>
    </div>

</template>