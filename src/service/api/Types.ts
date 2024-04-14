export interface Usuario {
  id?: number;
  nome: string;
  login: string;
  senha: string;
  skills?: SkillsUsuario[];
}

export interface Skill {
  id: number;
  nome: string;
  descricao?: string;
  imagem: string;
}

export interface SkillsUsuario {
  id?: number;
  level: number;
  usuario?: Usuario;
  skill?: Skill;

  totalElements?: number;
  totalPages?: number;
  page?: number;
  size?: number;
  nome?: string;
}

export interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
}

export interface ApiError {
  response?: ApiResponse;
}
