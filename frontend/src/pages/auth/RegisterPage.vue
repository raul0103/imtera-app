<template>
  <div class="auth-page">
    <div class="auth-card">
      <h2>Регистрация</h2>

      <form class="form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Имя</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>

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

        <div class="form-group">
          <label for="password_confirmation">Подтвердите пароль</label>
          <input
            type="password"
            id="password_confirmation"
            v-model="form.password_confirmation"
            required
          />
        </div>

        <button class="btn btn--primary" type="submit">
          Зарегистрироваться
        </button>
      </form>

      <p class="toggle-text">
        Уже есть аккаунт?
        <router-link class="link" :to="{name: 'Login'}">Войти</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {register} from "@/api/auth";

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const submitForm = async () => {
  try {
    const response = register({
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
      password_confirmation: form.value.password_confirmation,
    });

    alert("Регистрация успешна!");
    console.log(response.data);
  } catch (error) {
    console.error(error);
    alert("Произошла ошибка. Проверьте консоль.");
  }
};
</script>
