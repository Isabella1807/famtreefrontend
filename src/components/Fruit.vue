<script setup lang="ts">
const props = defineProps<{
  name: string
}>()

// const props = defineProps(['name', 'title'])
</script>

<template>

  <div>
    <h2>{{props.name}}</h2>
    <button>Slet mig</button>
  </div>
</template>

<style scoped>

</style>