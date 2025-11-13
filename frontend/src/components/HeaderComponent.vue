<template>
  <div class="header">
    <button class="header__logout-btn btn btn--icon" @click="handleLogout">
      <Icon icon="mdi-logout" width="24" height="24" class="svg" />
    </button>
  </div>
</template>

<script setup>
import router from "@/router";
import {logout} from "@/api/auth";
import storage from "@/utils/storage";
const handleLogout = async () => {
  const response = await logout();
  if (response && response.status === 200) {
    storage.auth.logout();

    router.push({name: "Home"});
  }
};
</script>
