import axios, { AxiosError } from "axios";
import { ApiResponse, ApiError, Usuario, Skills, SkillsUsuario } from "./Types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getUsuarioPorId = async (id: number): Promise<ApiResponse> => {
  try {
    const response = await api.get(`/usuarios/${id}`);
    return response;
  } catch (error) {
    const apiError = error as AxiosError<ApiError>;
    throw apiError.response?.data;
  }
};

export const adicionarUsuario = async (
  usuario: Usuario
): Promise<ApiResponse> => {
  try {
    const response = await api.post("/usuarios", usuario);
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
  try {
    const response = await api.post("/usuarios/login", { login, senha });
    const token = response.data.token;
    const userId = response.data.usuario.id;

    await AsyncStorage.setItem("token", token);
    await AsyncStorage.setItem("userId", String(userId));

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

export const adicionarSkillsUsuario = async (
  skillsUsuario: SkillsUsuario
): Promise<ApiResponse<SkillsUsuario>> => {
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

export const obterTodasSkills = async (): Promise<Skills[]> => {
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

export const adicionarSkill = async (skill: Skills): Promise<ApiResponse> => {
  try {
    const response = await api.post("/skills", skill);
    return response;
  } catch (error) {
    const apiError = error as AxiosError<ApiError>;
    throw apiError.response?.data;
  }
};

export const atualizarSkill = async (
  id: number,
  skill: Skills
): Promise<ApiResponse> => {
  try {
    const response = await api.put(`/skills/${id}`, skill);
    return response;
  } catch (error) {
    const apiError = error as AxiosError<ApiError>;
    throw apiError.response?.data;
  }
};

export const deletarSkill = async (id: number): Promise<ApiResponse> => {
  try {
    const response = await api.delete(`/skills/${id}`);
    return response;
  } catch (error) {
    const apiError = error as AxiosError<ApiError>;
    throw apiError.response?.data;
  }
};
