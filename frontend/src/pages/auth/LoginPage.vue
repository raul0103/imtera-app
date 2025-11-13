<template>
  <div class="auth-page">
    <div class="auth-card">
      <h2>Вход</h2>

      <form class="form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required />
          <p v-if="errors.email" class="form__error-message">
            {{ errors.email[0] }}
          </p>
        </div>

        <div class="form-group">
          <label for="password">Пароль</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            required
          />
          <p v-if="errors.password" class="form__error-message">
            {{ errors.password[0] }}
          </p>
        </div>

        <button class="btn btn--primary" type="submit">Войти</button>
      </form>

      <p v-if="errors.general" class="form__error-message">
        {{ errors.general }}
      </p>

      <p class="toggle-text">
        Нет аккаунта?
        <router-link class="link" :to="{name: 'Register'}"
          >Регистрация</router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import {ref} from "vue";
import {login} from "@/api/auth";
import storage from "@/utils/storage";

const form = ref({
  email: "",
  password: "",
});

const errors = ref({});

const submitForm = async () => {
  try {
    const response = await login({
      email: form.value.email,
      password: form.value.password,
    });

    if (response && response.status === 200) {
      storage.token.set(response.data.token);
      storage.user.set(response.data.user);

      router.push({name: "Home"});
    }
    errors.value = {};
  } catch (error) {
    if (error.response && error.response.status === 422) {
      errors.value = error.response.data.errors;
    } else if (error.response && error.response.status === 401) {
      errors.value.general = error.response.data.message;
    } else {
      errors.value.general = error.message || "Произошла ошибка";
    }
  }
};
</script>
