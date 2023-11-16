<script setup>
import { reactive, ref } from 'vue'
const count = ref(1)
const countRactive = reactive({ number: 1 })

function incriment() {
  count.value++
  countRactive.number++
}
console.log('rerender', count)
</script>

<template>
  <button @click="incriment">incriment +</button>
  <div class="about">
    <h1>count = {{ count }}</h1>
    <h2>countRactive.number = {{ countRactive.number }}</h2>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
