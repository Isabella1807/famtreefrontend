<script setup lang="ts">
import { useFruitStore } from '@/stores/fruit';
import { ref } from 'vue';

const fruitStore = useFruitStore();

const fieldValue = ref('');

const addFruit = () => {
  const rawText = fieldValue.value.trim().toLowerCase();

  if (rawText.length < 1) return;

  fruitStore.add(rawText);
  fieldValue.value = '';
};

const deleteFruit = (fruitId: string) => {
  fruitStore.remove(fruitId);
}

const deleteAllFruits = () => {
  fruitStore.clearAll();
}
</script>

<template>
  <div class="about">
    <h1>This is a list of fruit</h1>
    <input type="text" v-model="fieldValue"/>
    <button @click="addFruit()">Add</button>
    <button @click="deleteAllFruits()">Delete all</button>
    <div class="fruitItem" v-for="fruit in fruitStore.list" :key="fruit.id">
      <h2>{{ fruit.name }}</h2>
      <button @click="deleteFruit(fruit.id)">Delete</button>
    </div>
  </div>
</template>

<style>
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}

.fruitItem {
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 16px 24px;
  border-radius: 8px;
}

h2 {
  margin: 0;
  padding: 0;
}

.fruitItem h2 {
  flex-grow: 1;
}

.fruitItem:hover {
  background-color: rgba(255,255,255,0.2);
}
</style>
