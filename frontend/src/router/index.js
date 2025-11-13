import {createRouter, createWebHistory} from "vue-router";

import WebLayout from "@/layouts/WebLayout.vue";

import LoginPage from "@/pages/auth/LoginPage.vue";
import RegisterPage from "@/pages/auth/RegisterPage.vue";
import HomePage from "@/pages/HomePage.vue";
import SettingsPage from "@/pages/SettingsPage.vue";
import storage from "@/utils/storage";

const routes = [
  {
    path: "/",
    component: WebLayout,
    children: [
      {path: "", name: "Home", component: HomePage, meta: {requiresAuth: true}},
      {
        path: "settings",
        name: "Settings",
        component: SettingsPage,
        meta: {requiresAuth: true},
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    meta: {guestOnly: true},
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
    meta: {guestOnly: true},
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// middleware: проверка авторизации и редиректы
router.beforeEach((to, from, next) => {
  const token = storage.token.get();

  if (to.meta.requiresAuth && !token) {
    return next({name: "Login"});
  }

  if (to.meta.guestOnly && token) {
    return next({name: "Home"});
  }

  next();
});

export default router;
