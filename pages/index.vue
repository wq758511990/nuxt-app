<template>
    <div class="flex items-center flex-col gap-2">
        <h1>Index Page</h1>
        <h2>{{ message }}</h2>
        <h3>{{ value }}</h3>
        <div>
            <NButton>hello</NButton>
        </div>
        <NuxtLink to="/detail/1">detail 1</NuxtLink>
    </div>
</template>

<script setup lang="ts">
// import { useCounter } from '@/composables/counter';
import { useCounter } from '@/store/counter';
const { message } = await $fetch('/api/hello')
// const counter = useCounter()
const store = useCounter()
const { value } = storeToRefs(store)
useHead({
    titleTemplate: s => s ? `${s} - 文章列表` : '文章列表'
})
</script>