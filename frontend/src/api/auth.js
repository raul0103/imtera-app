import api from "@/api";

export const register = (form_data) => {
  const response = api.post("/register", form_data);
  return response;
};

export const login = (form_data) => {
  const response = api.post("/login", form_data);
  return response;
};
