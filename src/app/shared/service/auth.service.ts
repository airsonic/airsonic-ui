import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class AuthService {

  constructor() { }

  loginUser(username: string, password: string, server: string) {
    const salt = this.generateSalt();
    const md5 = new Md5();
    md5.appendStr(password);
    md5.appendStr(salt);
    const token = md5.end().toString();
    const user: User = {
      name: username,
      salt: salt,
      token: token,
      server: server
    };
    localStorage.setItem(USER_INFO, JSON.stringify(user));
    localStorage.setItem(SERVER_URL, server);
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem(USER_INFO));
  }

  hasUser(): boolean {
    return this.getUser() !== null;
  }

  logout() {
    localStorage.clear();
  }

  private generateSalt() {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 20; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }
}

export interface User {
  name: string;
  salt: string;
  token: string;
  server: string;
}

export const USER_INFO = 'user_info';
export const SERVER_URL = 'server_url';
