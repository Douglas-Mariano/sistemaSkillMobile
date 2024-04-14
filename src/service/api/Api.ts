import axios, { AxiosError } from "axios";
import { ApiResponse, ApiError, Usuario, Skill, SkillsUsuario } from "./Types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "http://192.168.1.7:8080",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const adicionarUsuario = async (
  usuario: Usuario
): Promise<ApiResponse> => {
  try {
    const response = await api.post("/auth/register", usuario);
    return response.data;
  } catch (error) {
    const apiError = error as AxiosError<ApiError>;
    throw (
      apiError.response?.data || {
        status: 500,
        statusText: "Erro interno do servidor",
      }
    );
  }
};

export const logarUsuario = async (
  login: string,
  senha: string
): Promise<string> => {
  console.log(login, senha)
  try {
    const response = await api.post("/auth/login", { login, senha });
    const token = response.data.token;

    await AsyncStorage.setItem("token", token);

    return token;
  } catch (error) {
    const apiError = error as AxiosError<ApiError>;
    throw apiError.response?.data;
  }
};

export const deslogar = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("userId");
  } catch (error) {
    console.error("Erro ao deslogar:", error);
    throw error;
  }
};

export const obterTodasSkills = async (): Promise<Skill[]> => {
  try {
    const response = await api.get("/skills");
    return response.data;
  } catch (error) {
    const apiError = error as AxiosError<ApiError>;
    throw (
      apiError.response?.data || {
        status: 500,
        statusText: "Erro interno do servidor",
      }
    );
  }
};

export const getSkillUsuario = async (
  filter = "",
  page = 0,
  size = 20
): Promise<ApiResponse> => {
  try {
    const response = await api.get(
      `/skillsUsuario?nome=${filter}&page=${page}&size=${size}`
    );
    return response;
  } catch (error) {
    const apiError = error as AxiosError<ApiError>;
    throw apiError.response?.data;
  }
};

export const adicionarSkillsUsuario = async (
  skillsUsuario: SkillsUsuario
): Promise<ApiResponse<SkillsUsuario>> => {
  console.log(skillsUsuario);
  try {
    const response = await api.post("/skillsUsuario", skillsUsuario);
    return response.data;
  } catch (error) {
    const apiError = error as AxiosError<ApiError>;
    throw (
      apiError.response?.data || {
        status: 500,
        statusText: "Erro interno do servidor",
      }
    );
  }
};

export const atualizarSkillsUsuario = async (
  id: number,
  skillsUsuario: SkillsUsuario
): Promise<ApiResponse<SkillsUsuario>> => {
  try {
    const response = await api.put(`/skillsUsuario/${id}`, skillsUsuario);
    return response.data;
  } catch (error) {
    const apiError = error as AxiosError<ApiError>;
    throw (
      apiError.response?.data || {
        status: 500,
        statusText: "Erro interno do servidor",
      }
    );
  }
};

export const deletarSkillsUsuario = async (
  id: number
): Promise<ApiResponse<void>> => {
  try {
    const response = await api.delete(`/skillsUsuario/${id}`);
    return response.data;
  } catch (error) {
    const apiError = error as AxiosError<ApiError>;
    throw apiError.response?.data;
  }
};
