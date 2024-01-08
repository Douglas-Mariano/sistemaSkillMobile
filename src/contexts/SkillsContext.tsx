import { createContext, useState, ReactNode } from "react";
import {
  Usuario,
  Skills,
  ApiResponse,
  ApiError,
  SkillsUsuario,
} from "../service/api/Types";

interface SkillsContextProps {
  usuario: Usuario | null;
  skills: Skills[];
  apiResponse: ApiResponse;
  apiError: ApiError;
  setUsuario: React.Dispatch<React.SetStateAction<Usuario | null>>;
  setSkills: React.Dispatch<React.SetStateAction<Skills[]>>;
  setApiResponse: React.Dispatch<React.SetStateAction<ApiResponse>>;
  setApiError: React.Dispatch<React.SetStateAction<ApiError>>;
}

interface SkillsProviderProps {
  children: ReactNode;
}

export const SkillsContext = createContext<SkillsContextProps>({
  usuario: null,
  skills: [],
  apiResponse: { data: null, status: 0, statusText: "" },
  apiError: { response: undefined },
  setUsuario: () => {},
  setSkills: () => {},
  setApiResponse: () => {},
  setApiError: () => {},
});

export const SkillsProvider = ({ children }: SkillsProviderProps) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [skills, setSkills] = useState<Skills[]>([]);
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
        apiResponse,
        apiError,
        setUsuario,
        setSkills,
        setApiResponse,
        setApiError,
      }}
    >
      {children}
    </SkillsContext.Provider>
  );
};
