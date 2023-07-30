import { createContext, useState } from "react";

interface AuthType {
  username?: string;
  email?: string;
  name?: string;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextType {
  authData?: AuthType;
  setAuthData: (item: AuthType) => void;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function AuthProvider({ children }: AuthProviderProps) {
  const [authData, setAuthData] = useState<AuthType>({
    name: "mayi tala",
    email: "mayi@gmail.com",
  });

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
}
