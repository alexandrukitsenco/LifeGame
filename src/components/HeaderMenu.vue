<script setup lang="ts">
import Button from 'primevue/button';
const routes = [
    { name: 'Main', path: '/' },
    { name: 'Sprint', path: '/sprint' },
]
</script>

<template>
    <header>
        <div class="flex justify-center  items-center p-4 border-b border-gray-200 bg-gray-800    ">
            <ul class="flex gap-2">
                <li v-for="route in routes" :key="route" class="text-sm">
                    <RouterLink :to="route.path">
                        <Button rounded text :label="route.name" />
                    </RouterLink>
                </li>
            </ul>
        </div>
    </header>
</template>