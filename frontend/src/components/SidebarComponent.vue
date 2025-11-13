<template>
  <aside class="sidebar">
    <nav>
      <router-link :to="{name: 'Home'}">Отзывы</router-link>
      <router-link :to="{name: 'Settings'}">Настройки</router-link>
      <router-link :to="{name: 'Login'}">Авторизация</router-link>
      <router-link :to="{name: 'Register'}">Регистрация</router-link>
    </nav>
  </aside>
</template>

<script setup></script>
