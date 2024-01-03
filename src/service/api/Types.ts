export interface Usuario {
  id: number;
  nome: string;
  login: string;
  senha: string;
  skills: Skill[];
}

export interface UsuarioRequest {
  nome: string;
  login: string;
  senha: string;
}

export interface UsuarioResponse {
  id: number;
  nome: string;
  login: string;
  token: string;
}

export interface Skill {
  id: number;
  nome: string;
  descricao?: string;
  level: number;
  imagem: string;
  usuario: Usuario;
}

export interface SkillRequest {
  nome: string;
  descricao?: string;
  level: number;
  imagem: string;
}

export interface ApiResponse {
  data: any;
  status: number;
  statusText: string;
}

export interface ApiError {
  response?: ApiResponse;
}
