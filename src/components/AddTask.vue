<script setup lang="ts">
import Button from 'primevue/button';
import Drawer from 'primevue/drawer';
import { ref, computed } from 'vue';
import AutoComplete from 'primevue/autocomplete';
import Select from 'primevue/select';
import SelectButton from 'primevue/selectbutton';
import FloatLabel from 'primevue/floatlabel';
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { useSprintStore } from '@/store/useSprint';

const sprintStore = useSprintStore()

const show = ref(false)
const taskName = ref()
const taskCategory = ref('')
const taskEffort = ref(0)
const suggestions = ref([])

const showOverlay = computed(() => {
    return suggestions.value.length > 0
})

const rules = {
    taskName: { required },
    taskCategory: { required },
    taskEffort: { required },
}

const v$ = useVuelidate(rules, { taskName, taskCategory, taskEffort })



const categories = [
    { name: 'Trabajo', value: 'work' },
    { name: 'Hogar', value: 'home' },
    { name: 'Estudios', value: 'studies' },
    { name: 'Salud', value: 'health' },
    { name: 'Otros', value: 'other' },
]

const effortOptions = [ {name: 'Baja', value: 1}, {name: 'Media', value: 2}, {name: 'Alta', value: 3} ]

const addTask = () => {
   show.value = false
   sprintStore.addTask({
    name: taskName.value,
    category: taskCategory.value,
    effort: taskEffort.value
   })
}

const searchTask = (event: any) => {
    suggestions.value = sprintStore.searchTasks(event.query)
}

const selectTask = (event: any) => {
    taskName.value = event.value.name
    taskCategory.value = event.value.category
    taskEffort.value = event.value.effort
}

const resetForm = () => {
    taskName.value = ''
    taskCategory.value = ''
    taskEffort.value = 0
    v$.value.$reset()
}
</script>

<template>
    <aside class="absolute bottom-8 right-8">
        <Button icon="pi pi-plus" rounded severity="primary" @click="show = true" aria-label="Añadir nueva tarea" />
        <Drawer v-model:visible="show" style="height: auto" position="bottom" @hide="resetForm">
            <form class="flex flex-col gap-4" @submit.prevent="addTask">
                <FloatLabel variant="in" class="w-full">
                    <AutoComplete id="task-name" v-model="taskName" :overlayClass="showOverlay ? 'block' : 'hidden'" :suggestions="suggestions" @complete="searchTask" @option-select="selectTask" fluid optionLabel="name" optionValue="value" />
                    <label for="task-name">Nombre</label>
                </FloatLabel>
                <FloatLabel variant="in" class="w-full">
                    <Select id="task-category" v-model="taskCategory" :options="categories" optionLabel="name" optionValue="value" fluid />
                    <label for="task-category">Categoría</label>
                </FloatLabel>
                <div>
                    <label for="task-effort" class="sr-only">Esfuerzo</label>
                    <SelectButton id="task-effort" v-model="taskEffort" :options="effortOptions" optionLabel="name" optionValue="value" fluid />
                </div>
                <Button class="mb-24" label="Guardar" severity="primary" type="submit" :disabled="v$.$invalid" />
            </form>
        </Drawer>
    </aside>
</template>