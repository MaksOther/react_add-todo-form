import { User } from './UserInterfase';

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
  user?: User;
}
