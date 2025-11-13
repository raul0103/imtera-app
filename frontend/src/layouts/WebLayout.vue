<template>
  <div class="main-layout">
    <header>Главное меню</header>
    <main>
      <div class="main-layout__sidebar">
        <SidebarComponent />
      </div>
      <div class="main-layout__content">
        <slot></slot>
      </div>
    </main>
    <footer>Футер</footer>
  </div>
</template>

<script setup>
import SidebarComponent from "@/components/SidebarComponent.vue";
</script>
