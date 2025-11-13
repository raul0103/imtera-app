<template>
  <div class="web-layout">
    <div class="web-layout__sidebar">
      <SidebarComponent />
    </div>
    <div class="web-layout__content">
      <HeaderComponent />
      <div class="web-layout__content-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";
</script>
