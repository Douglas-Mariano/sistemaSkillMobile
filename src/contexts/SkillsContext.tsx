import { createContext, useState } from "react";
import { Usuario, Skills, ApiResponse, ApiError, SkillsUsuario } from "../service/api/Types";

interface SkillsContextProps {
  usuario: Usuario;
  skills: Skills;
  skillsUsuario: SkillsUsuario;
  apiResponse: ApiResponse;
  apiError: ApiError;
  setUsuario: React.Dispatch<React.SetStateAction<Usuario>>;
  setSkills: React.Dispatch<React.SetStateAction<Skills>>;
  setSkillsUsuario: React.Dispatch<React.SetStateAction<SkillsUsuario>>;
  setApiResponse: React.Dispatch<React.SetStateAction<ApiResponse>>;
  setApiError: React.Dispatch<React.SetStateAction<ApiError>>;
}

interface SkillsProviderProps {
  children: React.ReactNode;
}

export const SkillsContext = createContext<SkillsContextProps>({
  usuario: {
    id: 0,
    nome: "",
    login: "",
    senha: "",
    skills: [],
  },
  skills: {
    id: 0,
    nome: "",
    descricao: "",
    imagem: "",
  },
  skillsUsuario: {
    id: 0,
    level: 0,
    usuario: {
      id: 0,
      nome: "",
      login: "",
      senha: "",
      skills: [],
    },
    skills: {
      id: 0,
      nome: "",
      descricao: "",
      imagem: "",
    },
  },
  apiResponse: { data: null, status: 0, statusText: "" },
  apiError: { response: undefined },
  setUsuario: () => {},
  setSkills: () => {},
  setSkillsUsuario: () => {},
  setApiResponse: () => {},
  setApiError: () => {},
});

export const SkillsProvider = ({ children }: SkillsProviderProps) => {
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    login: "",
    senha: "",
    skills: [],
  });
  const [skills, setSkills] = useState<Skills>({
    id: 0,
    nome: "",
    descricao: "",
    imagem: "",
  });
  const [skillsUsuario, setSkillsUsuario] = useState<SkillsUsuario>({
    id: 0,
    level: 0,
    usuario: {
      id: 0,
      nome: "",
      login: "",
      senha: "",
      skills: [],
    },
    skills: {
      id: 0,
      nome: "",
      descricao: "",
      imagem: "",
    },
  });
  const [apiResponse, setApiResponse] = useState<ApiResponse>({
    data: null,
    status: 0,
    statusText: "",
  });
  const [apiError, setApiError] = useState<ApiError>({ response: undefined });

  return (
    <SkillsContext.Provider
      value={{
        usuario,
        skills,
        skillsUsuario,
        apiResponse,
        apiError,
        setUsuario,
        setSkills,
        setSkillsUsuario,
        setApiResponse,
        setApiError,
      }}
    >
      {children}
    </SkillsContext.Provider>
  );
};
