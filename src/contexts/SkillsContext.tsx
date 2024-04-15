import { createContext, useState, ReactNode, useMemo } from "react";
import {
  Usuario,
  Skill,
  ApiResponse,
  ApiError,
  SkillsUsuario,
} from "../service/api/Types";

interface SkillsContextProps {
  usuario: Usuario | null;
  setUsuario: React.Dispatch<React.SetStateAction<Usuario | null>>;
  skills: Skill[];
  setSkills: React.Dispatch<React.SetStateAction<Skill[]>>;
  apiResponse: ApiResponse;
  setApiResponse: React.Dispatch<React.SetStateAction<ApiResponse>>;
  apiError: ApiError;
  setApiError: React.Dispatch<React.SetStateAction<ApiError>>;
  login: string;
  setLogin: React.Dispatch<React.SetStateAction<string>>;
  senha: string;
  setSenha: React.Dispatch<React.SetStateAction<string>>;
  salvo: boolean;
  setSalvo: React.Dispatch<React.SetStateAction<boolean>>;
  nome: string;
  setNome: React.Dispatch<React.SetStateAction<string>>;
  confirmarSenha: string;
  setConfirmarSenha: React.Dispatch<React.SetStateAction<string>>;
  mostrarSenha: boolean;
  setMostrarSenha: React.Dispatch<React.SetStateAction<boolean>>;
  skill: SkillsUsuario[];
  setSkill: React.Dispatch<React.SetStateAction<SkillsUsuario[]>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  modalDeletarVisivel: boolean;
  setModalDeletarVisivel: React.Dispatch<React.SetStateAction<boolean>>;
  idSkillUsuario: number | null;
  setIdSkillUsuario: React.Dispatch<React.SetStateAction<number | null>>;
  inputAtualizarVisivel: boolean;
  setInputAtualizarVisivel: React.Dispatch<React.SetStateAction<boolean>>;
  levelAtualizado: string;
  setLevelAtualizado: React.Dispatch<React.SetStateAction<string>>;
  modalAdicionarSkillVisivel: boolean;
  setModalAdicionarSkillVisivel: React.Dispatch<React.SetStateAction<boolean>>;
  totalElements: number;
  setTotalElements: React.Dispatch<React.SetStateAction<number>>;
}

interface SkillsProviderProps {
  children: ReactNode;
}

export const SkillsContext = createContext<SkillsContextProps>({
  usuario: null,
  setUsuario: () => {},
  skills: [],
  setSkills: () => {},
  apiResponse: { data: null, status: 0, statusText: "" },
  setApiResponse: () => {},
  apiError: { response: undefined },
  setApiError: () => {},
  login: "",
  setLogin: () => {},
  senha: "",
  setSenha: () => {},
  salvo: false,
  setSalvo: () => {},
  mostrarSenha: true,
  setMostrarSenha: () => {},
  nome: "",
  setNome: () => {},
  confirmarSenha: "",
  setConfirmarSenha: () => {},
  skill: [],
  setSkill: () => {},
  page: 0,
  setPage: () => {},
  filter: "",
  setFilter: () => {},
  loading: false,
  setLoading: () => {},
  modalDeletarVisivel: false,
  setModalDeletarVisivel: () => {},
  idSkillUsuario: null,
  setIdSkillUsuario: () => {},
  inputAtualizarVisivel: false,
  setInputAtualizarVisivel: () => {},
  levelAtualizado: "",
  setLevelAtualizado: () => {},
  modalAdicionarSkillVisivel: false,
  setModalAdicionarSkillVisivel: () => {},
  totalElements: 0,
  setTotalElements: () => {},
});

export const SkillsProvider = ({ children }: SkillsProviderProps) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [apiResponse, setApiResponse] = useState<ApiResponse>({
    data: null,
    status: 0,
    statusText: "",
  });
  const [apiError, setApiError] = useState<ApiError>({ response: undefined });
  const [login, setLogin] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [salvo, setSalvo] = useState<boolean>(false);
  const [nome, setNome] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState<boolean>(true);
  const [skill, setSkill] = useState<SkillsUsuario[]>([]);
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalDeletarVisivel, setModalDeletarVisivel] = useState(false);
  const [idSkillUsuario, setIdSkillUsuario] = useState<number | null>(null);
  const [inputAtualizarVisivel, setInputAtualizarVisivel] = useState(false);
  const [levelAtualizado, setLevelAtualizado] = useState("");
  const [modalAdicionarSkillVisivel, setModalAdicionarSkillVisivel] =
    useState(false);
  const [totalElements, setTotalElements] = useState<number>(0);

  const value = useMemo(
    () => ({
      usuario,
      setUsuario,
      skills,
      setSkills,
      apiResponse,
      setApiResponse,
      apiError,
      setApiError,
      login,
      setLogin,
      senha,
      setSenha,
      salvo,
      setSalvo,
      nome,
      setNome,
      confirmarSenha,
      setConfirmarSenha,
      mostrarSenha,
      setMostrarSenha,
      skill,
      setSkill,
      page,
      setPage,
      filter,
      setFilter,
      loading,
      setLoading,
      modalDeletarVisivel,
      setModalDeletarVisivel,
      idSkillUsuario,
      setIdSkillUsuario,
      inputAtualizarVisivel,
      setInputAtualizarVisivel,
      levelAtualizado,
      setLevelAtualizado,
      modalAdicionarSkillVisivel,
      setModalAdicionarSkillVisivel,
      totalElements,
      setTotalElements,
    }),
    [
      usuario,
      skills,
      apiResponse,
      apiError,
      login,
      senha,
      salvo,
      nome,
      confirmarSenha,
      mostrarSenha,
      skill,
      page,
      filter,
      loading,
      modalDeletarVisivel,
      idSkillUsuario,
      inputAtualizarVisivel,
      levelAtualizado,
      modalAdicionarSkillVisivel,
      totalElements,
    ]
  );

  return (
    <SkillsContext.Provider value={value}>{children}</SkillsContext.Provider>
  );
};
