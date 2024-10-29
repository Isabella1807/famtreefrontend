<script setup lang="ts">
import Fruit from "@/components/Fruit.vue";
import {useFruitStore} from "@/stores/fruit";
import {ref} from "vue";

const fruitStore = useFruitStore();

console.log(fruitStore.list);

const newFruit = ref('');

const addNewFruit = () => {
  if (newFruit.value.trim() === '') {
    newFruit.value='';
    return;
  }
  fruitStore.add(newFruit.value);
  newFruit.value='';
}

</script>

<template>
  <div class="container">
    <div>

      <div id="fruitinputContainer">

        <form id="formContainer" @submit.prevent>
          <label for="fruitInput">Skriv en frugt hihi</label>
          <div class="inputContainer">
            <input name="fruitInput" type="text" class="fruitInputArea" v-model="newFruit">
            <button type="submit" id="submitInputButton" @click="addNewFruit">Tilføj frugt hihi</button>
          </div>

        </form>

      </div>

      <div>
        <Fruit v-for="item in fruitStore.list" :key="item.id" :name="item.name" :id="item.id"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#formContainer {
  display: flex;
  flex-direction: column;
}

.inputContainer {
}

.fruitInputArea {
  width: 200px;
}

#submitInputButton {
  width: 100px;
}
</style>