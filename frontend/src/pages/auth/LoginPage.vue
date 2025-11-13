<template>
  <div class="auth-page">
    <div class="auth-card">
      <h2>Вход</h2>

      <form class="form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>

        <div class="form-group">
          <label for="password">Пароль</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            required
          />
        </div>

        <button class="btn btn--primary" type="submit">Войти</button>
      </form>

      <p class="toggle-text">
        Нет аккаунта?
        <router-link :to="{name: 'Register'}">Регистрация</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import {login} from "@/api/auth";
import {ref} from "vue";

const form = ref({
  email: "",
  password: "",
});

const submitForm = async () => {
  try {
    const response = login({
      email: form.value.email,
      password: form.value.password,
    });

    alert("Вход выполнен успешно!");
    console.log(response.data);
  } catch (error) {
    console.error(error);
    alert("Произошла ошибка. Проверьте консоль.");
  }
};
</script>
