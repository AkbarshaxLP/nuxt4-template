<template>
  <div>
    <div class="flex gap-3 text-secondary mobile:text-primary text-2xl justify-center bg-slate-200 py-2 ">
      <button type="button" @click="persistStore.decrement(1)">-</button>
      {{ persistStore.count }}
      <button type="button" @click="persistStore.increment(1)">+</button>
    </div>

    <NuxtLink class="block text-center underline" to="/">to index page</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const persistStore = usePersistStore()

</script>
