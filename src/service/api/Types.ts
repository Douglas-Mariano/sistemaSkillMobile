export interface Usuario {
  id: number;
  nome: string;
  login: string;
  senha: string;
  skills: Skill[];
}

export interface Skill {
  id: number;
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
