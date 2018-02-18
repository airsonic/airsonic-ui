import { User } from './user.domain';

export interface UsersResponse {
  'subsonic-response': {
    status: string;
    version: string;
    users: Users;
  };
}

export interface Users {
  user: Array<User>;
}
