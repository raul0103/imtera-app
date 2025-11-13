/**
 * Сервис для управления локальным хранилищем
 * Централизованное управление токенами и данными пользователя
 */

const TOKEN_KEY = "token";
const USER_KEY = "user";

const storage = {
  token: {
    set(token) {
      if (token) {
        localStorage.setItem(TOKEN_KEY, token);
      }
    },
    get() {
      return localStorage.getItem(TOKEN_KEY);
    },
    remove() {
      localStorage.removeItem(TOKEN_KEY);
    },
  },
  user: {
    set(user) {
      if (user) {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
      }
    },
    get() {
      const userData = localStorage.getItem(USER_KEY);
      return userData ? JSON.parse(userData) : null;
    },
    remove() {
      localStorage.removeItem(USER_KEY);
    },
  },
  auth: {
    logout() {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    },
  },
};

export default storage;
