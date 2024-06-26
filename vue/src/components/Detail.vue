<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="card" >
    <h2>{{ name }}</h2>
    <img :src="image" :alt="name">
    <p>{{ description}}</p>
  </div>
</template>
