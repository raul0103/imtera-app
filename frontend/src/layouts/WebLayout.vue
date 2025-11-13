<template>
  <div class="main-layout">
    <div class="main-layout__sidebar">
      <SidebarComponent />
    </div>
    <div class="main-layout__content">
      <HeaderComponent />
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";
</script>
