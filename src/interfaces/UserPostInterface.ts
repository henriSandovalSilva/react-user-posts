import { IUser } from './UserInterface';
import { IPost } from './PostInterface';

export interface IUserPost {
  post: IPost,
  user: IUser
}
