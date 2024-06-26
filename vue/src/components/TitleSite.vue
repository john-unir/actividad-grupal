<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="greetings">
    <h1 class="white center p1">{{ msg }}</h1>
  </div>
</template>
