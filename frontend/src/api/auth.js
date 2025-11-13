import api from "@/api";

export const register = async (form_data) => {
  const response = await api.post("/register", form_data);
  return response;
};

export const login = async (form_data) => {
  const response = await api.post("/login", form_data);
  return response;
};

export const logout = async () => {
  const response = await api.post("/logout");
  return response;
};
