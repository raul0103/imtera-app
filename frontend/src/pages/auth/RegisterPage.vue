<template>
  <div class="auth-page">
    <div class="auth-card">
      <h2>Регистрация</h2>

      <form class="form" @submit.prevent="submitForm">
        <!-- Name -->
        <div class="form-group">
          <label for="name">Имя</label>
          <input type="text" id="name" v-model="form.name" required />
          <div v-if="errors.name" class="form__error-message">
            {{ errors.name[0] }}
          </div>
        </div>

        <!-- Email -->
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required />
          <div v-if="errors.email" class="form__error-message">
            {{ errors.email[0] }}
          </div>
        </div>

        <!-- Password -->
        <div class="form-group">
          <label for="password">Пароль</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            required
          />
          <div v-if="errors.password" class="form__error-message">
            {{ errors.password[0] }}
          </div>
        </div>

        <!-- Password Confirmation -->
        <div class="form-group">
          <label for="password_confirmation">Подтвердите пароль</label>
          <input
            type="password"
            id="password_confirmation"
            v-model="form.password_confirmation"
            required
          />
          <div v-if="errors.password_confirmation" class="form__error-message">
            {{ errors.password_confirmation[0] }}
          </div>
        </div>

        <button class="btn btn--primary" type="submit">
          Зарегистрироваться
        </button>

        <div v-if="errors.general" class="form__error-message">
          {{ errors.general }}
        </div>
      </form>

      <p class="toggle-text">
        Уже есть аккаунт?
        <router-link class="link" :to="{name: 'Login'}">Войти</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import {ref} from "vue";
import {register} from "@/api/auth";
import storage from "@/utils/storage";

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const errors = ref({});

const submitForm = async () => {
  try {
    const response = await register({...form.value});

    if (response && response.status === 200) {
      storage.token.set(response.data.token);
      storage.user.set(response.data.user);

      router.push({name: "Home"});
    }
    errors.value = {};
  } catch (error) {
    if (error.response && error.response.status === 422) {
      errors.value = error.response.data.errors;
    } else {
      errors.value = {general: error.message};
    }
  }
};
</script>
