<script setup>
import { onMounted, onUnmounted, onUpdated, reactive, ref } from 'vue'
import TestComponent from '../components/TestComponent.vue'
const count = ref(1)
const countRactive = reactive({ number: 1 })

const showTest = ref(true)

function incriment() {
  count.value++
  countRactive.number++
}

onMounted(() => {
  console.log('onMounted')
})
onUpdated(() => {
  console.log('onUpdated')
})
onUnmounted(() => {
  console.log('onUnmounted')
})

function catchUpdate() {
  console.log('Event from child component')
  showTest.value = !showTest.value
}

// drective
// v-show

console.log('rerender', count)

const message = ref('hello')
// slot v1 =  v-slot:country="{ place }"
// slot v2 =  #city="{ place }"
// editing emit v-model:message="message"
// const emit = defineEmits(['update', 'update:message'])
//    <input :value="message" @input="$emit('update:message', $event.target.value)" />
</script>

<template>
  <TestComponent v-model:message="message" v-model:count="count" @update="catchUpdate">
    <template v-slot:country="{ place, id, log }">
      {{ place }} {{ id }} <button @click="log">log</button>
    </template>
    <template #city="{ place, id }"> {{ place }} {{ id }} </template>
  </TestComponent>

  <div v-show="showTest">Hello Vue</div>

  <button @click="incriment">incriment +</button>
  <div class="about">
    <h1>count = {{ count }}</h1>
    <h2>countRactive.number = {{ countRactive.number }}</h2>
  </div>
</template>
