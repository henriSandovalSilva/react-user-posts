import { User } from './User';
import { Post } from './Post';

export interface UserPost {
  post: Post,
  user: User
}
