import { axiosInstance, setAccessToken } from '@/shared/lib/axiosInstance';
import { AuthResponse } from '../model';


export class UserService {
  static async refreshAccessToken(): Promise<AuthResponse> {
    const response = await axiosInstance.get<AuthResponse>("/tokens/refresh");
    if (response.status === 200) {
      setAccessToken(response.data.accessToken);
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  }

  //* Метод для регистрации пользователя
  static async signUp(
    name: string,
    email: string,
    password: string
  ): Promise<AuthResponse> {
    const response = await axiosInstance.post<AuthResponse>(
      "/auth/registration",
      {
        name,
        email,
        password,
      }
    );

    if (response.status === 201) {
      setAccessToken(response.data.accessToken);
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  }

  //* Метод для входа пользователя
  static async signIn(email: string, password: string): Promise<AuthResponse> {
    const response = await axiosInstance.post<AuthResponse>(
      "/auth/authorization",
      {
        email,
        password,
      }
    );

    if (response.status === 200) {
      setAccessToken(response.data.accessToken);

      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  }

  //* Метод для выхода пользователя
  static async logout(): Promise<void> {
    const response = await axiosInstance.delete("/auth/logout");
    if (response.status === 200) {
      setAccessToken("");
    } else {
      throw new Error(response.data.message);
    }
  }
}
