<template>
  <div>
    index-page

    <div class="flex gap-3 text-primary">
      <button type="button" @click="persistStore.decrement(1)">-</button>
      {{ persistStore.count }}
      <button type="button" @click="persistStore.increment(1)">+</button>
    </div>

  </div>
</template>

<script lang="ts" setup>
const persistStore = usePersistStore()
</script>