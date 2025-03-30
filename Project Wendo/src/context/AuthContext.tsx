import React, { useEffect, useState, createContext, useContext } from 'react';
interface User {
  id: string;
  email: string;
  name: string;
}
interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => void;
  isLoading: boolean;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
// Simulated auth service (replace with real authentication service in production)
const simulateAuth = async (email: string, password: string): Promise<User> => {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
  // In production, this would be a real authentication call
  return {
    id: '1',
    email,
    name: email.split('@')[0]
  };
};
export function AuthProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate checking auth state
    setIsLoading(false);
  }, []);
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);
  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const user = await simulateAuth(email, password);
      setUser(user);
    } finally {
      setIsLoading(false);
    }
  };
  const signUp = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    try {
      const user = await simulateAuth(email, password);
      setUser({
        ...user,
        name
      });
    } finally {
      setIsLoading(false);
    }
  };
  const signOut = () => {
    setUser(null);
  };
  return <AuthContext.Provider value={{
    user,
    signIn,
    signUp,
    signOut,
    isLoading
  }}>
      {children}
    </AuthContext.Provider>;
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}