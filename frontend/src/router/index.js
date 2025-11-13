import {createRouter, createWebHistory} from "vue-router";

import WebLayout from "@/layouts/WebLayout.vue";

import LoginPage from "@/pages/auth/LoginPage.vue";
import RegisterPage from "@/pages/auth/RegisterPage.vue";
import HomePage from "@/pages/HomePage.vue";
import SettingsPage from "@/pages/SettingsPage.vue";

const routes = [
  {
    path: "/",
    component: WebLayout,
    children: [
      {path: "", name: "Home", component: HomePage},
      {path: "/settings", name: "Settings", component: SettingsPage},
    ],
  },
  {
    path: "/login",
    children: [{path: "", name: "Login", component: LoginPage}],
  },
  {
    path: "/register",
    children: [{path: "", name: "Register", component: RegisterPage}],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
