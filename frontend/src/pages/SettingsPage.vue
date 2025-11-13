<template>
  <div class="settings-page">
    <h1>Подлючить Yandex</h1>

    <form class="form" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="yandex-url"
          >Укажите ссылку на Яндекс, пример
          https://yandex.ru/maps/org/samoye_populyarnoye_kafe/1010501395/reviews/</label
        >
        <input
          type="url"
          id="yandex-url"
          v-model="form.url"
          placeholder="https://yandex.ru"
          required
        />
        <p v-if="errors.url" class="form__error-message">
          {{ errors.url[0] }}
        </p>
      </div>

      <button class="btn btn--primary" type="submit">Сохранить</button>
    </form>

    <p v-if="errors.general" class="form__error-message">
      {{ errors.general }}
    </p>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";
import {getUserYandexUrl, updateOrCreate} from "@/api/yandex";
import storage from "@/utils/storage";

const form = ref({
  url: "",
});

const errors = ref({});

// Загружаем текущий URL при открытии страницы
onMounted(async () => {
  try {
    const response = await getUserYandexUrl();

    if (response && response.data) {
      form.value.url = response.data.data.url;
    }
  } catch (error) {
    console.error("Ошибка при загрузке Yandex URL:", error);
  }
});

const submitForm = async () => {
  try {
    const response = await updateOrCreate({
      url: form.value.url,
    });

    if (response && response.status === 200) {
      alert("Yandex URL успешно сохранен");
    }
    errors.value = {};
  } catch (error) {
    if (error.response && error.response.status === 422) {
      errors.value = error.response.data.errors;
    } else {
      errors.value.general = error.message || "Произошла ошибка";
    }
  }
};
</script>
