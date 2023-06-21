<script setup>
const { data } = await useAsyncData('ssr', () => $fetch("http://localhost:3001/testMsg"))
function getData() {
    $fetch("http://localhost:3001/fetchTest")
}
</script>

<template>
    <div v-for="item in data.data" :key="item.age">
        {{ item.name }} - {{ item.age }}
    </div>
    <button @click="getData">fetch data</button>
    <NuxtLink to="/detail/1">to detail</NuxtLink>
</template>