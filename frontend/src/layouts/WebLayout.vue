<template>
  <div class="web-layout">
    <div class="web-layout__sidebar">
      <SidebarComponent />
    </div>
    <div class="web-layout__content">
      <HeaderComponent />
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";
</script>
