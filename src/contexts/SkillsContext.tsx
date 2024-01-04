import { createContext, useState } from "react";
import { Usuario, Skill, ApiResponse, ApiError } from "../service/api/Types";

interface SkillsContextProps {
  usuario: Usuario;
  skill: Skill;
  apiResponse: ApiResponse;
  apiError: ApiError;
  setUsuario: React.Dispatch<React.SetStateAction<Usuario>>;
  setSkill: React.Dispatch<React.SetStateAction<Skill>>;
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
  skill: {
    id: 0,
    nome: "",
    descricao: "",
    level: 0,
    imagem: "",
  },
  apiResponse: { data: null, status: 0, statusText: "" },
  apiError: { response: undefined },
  setUsuario: () => {},
  setSkill: () => {},
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
  const [skill, setSkill] = useState<Skill>({
    id: 0,
    nome: "",
    descricao: "",
    level: 0,
    imagem: "",
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
        skill,
        apiResponse,
        apiError,
        setUsuario,
        setSkill,
        setApiResponse,
        setApiError,
      }}
    >
      {children}
    </SkillsContext.Provider>
  );
};
