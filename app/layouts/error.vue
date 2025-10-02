<template>
  <div class="min-h-screen flex flex-col items-center justify-center text-center">
    <h1 class="text-6xl font-bold text-red-600">
      {{ error.statusCode }}
    </h1>
    <p class="text-xl mt-4">
      {{ error.message || 'Page Not Found' }}
    </p>
    <NuxtLink to="/" class="mt-6 text-blue-500 underline">
      Go back home 123
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    required: true
  }
})
</script>
