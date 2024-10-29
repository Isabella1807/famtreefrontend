<script setup lang="ts">
import {useFruitStore} from "@/stores/fruit";
const fruitStore = useFruitStore();
//Med typescript
const props = defineProps<{
  name: string,
  id: string
}>()

const deleteFruit = () => {
  fruitStore.remove(props.id);
}

//Uden typescript
// const props = defineProps(['name', 'title'])
</script>

<template>
  <div class="fruitListComponent">
    <h3>{{props.name}}</h3>
    <button @click="deleteFruit">Slet mig</button>
  </div>
</template>

<style scoped>
.fruitListComponent{
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid dimgray;
  margin-top: 10px;
  max-width: 250px;
}
</style>