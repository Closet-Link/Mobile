import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { AuthState, User } from '../types/auth';

// Actions
type AuthAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'LOGIN_SUCCESS'; payload: { user: User; accessToken: string; refreshToken?: string } }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_TOKEN'; payload: string };

// Initial state
const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isLoading: true,
  isAuthenticated: false,
};

// Reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken ?? null,
        isAuthenticated: true,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        ...initialState,
        isLoading: false,
      };
    case 'UPDATE_TOKEN':
      return {
        ...state,
        accessToken: action.payload,
      };
    default:
      return state;
  }
};

// Context
interface AuthContextType extends AuthState {
  login: (user: User, accessToken: string, refreshToken?: string) => Promise<void>;
  logout: () => Promise<void>;
  updateToken: (token: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // 앱 시작 시 저장된 토큰 확인
  useEffect(() => {
    const loadStoredAuth = async () => {
      try {
        const [storedUser, storedAccessToken, storedRefreshToken] = await Promise.all([
          AsyncStorage.getItem('user'),
          AsyncStorage.getItem('accessToken'),
          AsyncStorage.getItem('refreshToken'),
        ]);

        if (storedUser && storedAccessToken && storedRefreshToken) {
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: {
              user: JSON.parse(storedUser),
              accessToken: storedAccessToken,
              refreshToken: storedRefreshToken,
            },
          });
        } else {
          dispatch({ type: 'SET_LOADING', payload: false });
        }
      } catch (error) {
        console.error('저장된 인증 정보 로드 실패:', error);
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    loadStoredAuth();
  }, []);

  const login = async (user: User, accessToken: string, refreshToken?: string) => {
    try {
      // AsyncStorage에 저장
      const storagePromises = [
        AsyncStorage.setItem('user', JSON.stringify(user)),
        AsyncStorage.setItem('accessToken', accessToken),
      ];

      if (refreshToken) {
        storagePromises.push(AsyncStorage.setItem('refreshToken', refreshToken));
      }

      await Promise.all(storagePromises);

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { user, accessToken, refreshToken },
      });
    } catch (error) {
      console.error('로그인 정보 저장 실패:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      // AsyncStorage에서 제거
      await Promise.all([
        AsyncStorage.removeItem('user'),
        AsyncStorage.removeItem('accessToken'),
        AsyncStorage.removeItem('refreshToken'),
      ]);

      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      console.error('로그아웃 처리 실패:', error);
    }
  };

  const updateToken = (token: string) => {
    AsyncStorage.setItem('accessToken', token);
    dispatch({ type: 'UPDATE_TOKEN', payload: token });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
        updateToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth는 AuthProvider 내에서 사용되어야 합니다');
  }
  return context;
};