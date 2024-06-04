"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const useUserInfo = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserInfo must be used within a UserProvider");
  }
  return context;
};

interface LayoutProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: LayoutProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
