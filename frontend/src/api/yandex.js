import api from "@/api";

export const updateOrCreate = async (form_data) => {
  const response = await api.post("/yandex-url", form_data);
  return response;
};

export const getUserYandexUrl = async () => {
  const response = await api.get("/yandex-url");
  return response;
};
