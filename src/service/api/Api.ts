import axios, {AxiosError} from 'axios';
import {ApiResponse, ApiError, UsuarioRequest, SkillRequest} from './Types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
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

export const adicionarUsuario = async (usuario: UsuarioRequest): Promise<ApiResponse> => {
  try {
    const response = await api.post('/usuarios', usuario);
    return response;
  } catch (error) {
    const apiError = error as AxiosError<ApiError>;
    throw apiError.response?.data;
  }
};

export const logarUsuario = async (login: string, senha: string): Promise<ApiResponse> => {
  try {
    const response = await api.post('/usuarios/login', { login, senha });
    await AsyncStorage.setItem('token', response.data.token);
    return response;
  } catch (error) {
    const apiError = error as AxiosError<ApiError>;
    throw apiError.response?.data;
  }
};

export const adicionarSkill = async (skill: SkillRequest): Promise<ApiResponse> => {
  try {
    const response = await api.post('/skills', skill);
    return response;
  } catch (error) {
    const apiError = error as AxiosError<ApiError>;
    throw apiError.response?.data;
  }
};

export const atualizarSkill = async (id: number, skill: SkillRequest): Promise<ApiResponse> => {
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
