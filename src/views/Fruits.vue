<script setup lang="ts">

import Fruit from "@/components/Fruit.vue";
</script>

<template>
  <div id="fruitinputContainer">
    <form action="" id="formContainer">
      <label for="fruitInput">Skriv en frugt, spade :)</label>
      <input name="fruitInput" type="text" id="fruitInputArea">
      <button type="submit" id="submitInputButton">Indsend frugt hihi</button>
    </form>
  </div>
  <div>
    <Fruit name="æble"/>
  </div>
</template>

<style scoped>
#formContainer{
  display: flex;
  flex-direction: column;
}

#fruitInputArea{
  width: 300px;
}

#submitInputButton{
  width: 100px;
}
</style>