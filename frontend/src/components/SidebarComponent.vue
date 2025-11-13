<template>
  <aside class="sidebar">
    <router-link class="sidebar__logo" :to="{name: 'Home'}"
      ><img :src="Logo" alt="Логотип"
    /></router-link>

    <nav>
      <router-link :to="{name: 'Home'}">Отзывы</router-link>
      <router-link :to="{name: 'Settings'}">Настройки</router-link>
      <router-link :to="{name: 'Login'}">Авторизация</router-link>
      <router-link :to="{name: 'Register'}">Регистрация</router-link>
    </nav>
  </aside>
</template>

<script setup>
import Logo from "@/assets/icons/logo/logo.png";
</script>
