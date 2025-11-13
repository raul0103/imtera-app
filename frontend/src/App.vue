<script setup>
import {ref, onMounted} from "vue";
import api from "@/api";

const message = ref("Загрузка...");

onMounted(async () => {
  try {
    const response = await api.get("/test");
    message.value = response.data.message || "Ответ получен";
  } catch (error) {
    console.error(error);
    message.value = "Ошибка запроса к API";
  }
});
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>
