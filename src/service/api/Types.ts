export interface Usuario {
  id?: number;
  nome: string;
  login: string;
  senha: string;
  skills?: SkillsUsuario[];
}

export interface Skills {
  id: number;
  nome: string;
  descricao?: string;
  imagem: string;
}

export interface SkillsUsuario {
  id: number;
  level: number;
  usuario?: Usuario;
  skills?: Skills;
}

export interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
}

export interface ApiError {
  response?: ApiResponse;
}
