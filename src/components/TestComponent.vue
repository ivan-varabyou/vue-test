<script setup>
console.log('render test-component')

const props = defineProps({ count: Number, message: String })
const emit = defineEmits(['update', 'update:message'])

function buttonClick() {
  emit('update')
  // emit('update:modelValue')
  console.log('buttonClick')
}

function cllog() {
  console.log('log')
}

const places = [
  { country: 'GB', city: 'London' },
  { country: 'US', city: 'New York' },
  { country: 'BY', city: 'Brest' }
]
</script>

<template>
  <div class="test-component">
    <h4>{{ message }} {{ props.count }}</h4>
    <button @click="buttonClick">Add +1</button>
    <input :value="count" @input="$emit('update:count', $event.target.value)" />
    <input :value="message" @input="$emit('update:message', $event.target.value)" />
  </div>

  <div v-for="place in places" :key="place.city">
    <!-- {{ place.country }} 1 {{ place.city }} 1 -->
    <slot name="country" :place="place.country" :id="props.count" :log="cllog"></slot>
    <slot name="city" :place="place.city" id="2"></slot>
  </div>
</template>

<style scoped>
.test-component {
  text-align: center;
  font-size: 36px;
  color: blue;
}
</style>
