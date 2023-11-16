<script setup>
console.log('render test-component')

const props = defineProps({ count: Number, message: String })
const emit = defineEmits(['update', 'update:message'])

function buttonClick() {
  emit('update')
  // emit('update:modelValue')
  console.log('buttonClick')
}
</script>

<template>
  <div class="test-component">
    <h4>{{ message }} {{ props.count }}</h4>
    <button @click="buttonClick">Add +1</button>
    <input :value="count" @input="$emit('update:count', $event.target.value)" />

    <input :value="message" @input="$emit('update:message', $event.target.value)" />
  </div>
</template>

<style scoped>
.test-component {
  text-align: center;
  font-size: 36px;
  color: blue;
}
</style>
