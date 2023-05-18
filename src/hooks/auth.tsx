import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
// import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<any>= ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@Tasks:token',
        '@Tasks:user',
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStorageData();
  });

  const signIn = useCallback(async ({ email, password }: { email: string, password: string }) => {
    console.log(email, password)
    if(email === 'teste@gmail.com' && password === '123456') {
      const token = 'tokenTeste'
      const user = {
        name: "teste"
      }

      await AsyncStorage.multiSet([
        ['@Tasks:token', token],
        ['@Tasks:user', JSON.stringify(user)],
      ]);

      setData({
          token,
          user,
        });
    } else {
      Alert.alert("Algo deu errado, tente novamente!")
    }
    
    // const response = await api.post('/sessions', {
    //   email,
    //   password,
    // });

    // const { token, user } = response.data;

    // await AsyncStorage.multiSet([
    //   ['@Tasks:token', token],
    //   ['@Tasks:user', JSON.stringify(user)],
    // ]);

    // setData({
    //   token,
    //   user,
    // });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@Tasks:user', '@Tasks:token']);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };