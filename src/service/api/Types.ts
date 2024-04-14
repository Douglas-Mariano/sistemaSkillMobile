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
}

export interface Pagination {
  filter?: string;
  page?: number;
  order?: "asc" | "desc"; 
  size?: number;
}

export interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
}

export interface ApiError {
  response?: ApiResponse;
}
