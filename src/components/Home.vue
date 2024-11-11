<script setup lang="ts">
import { addTask } from "@/store/app-store";
import { useDispatch, useSelector } from "../store/helpers/helpers";



const dispatch = useDispatch();
const todos = useSelector((state) => state.todos);

const update = () => {
  dispatch(addTask(crypto.randomUUID()));
};
</script>

<template>
  <div class="greetings">
    <div>
      <button @click="update()">update state</button>
      <ul>
        <li v-for="(item, idx) in todos.todoList" :key="idx">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
