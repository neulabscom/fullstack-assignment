import { Author } from "./author";

export type Post = {
  author: Author;
  body: string;
  category: string;
  coverUrl: string;
  date: string;
  hasRedBorder: boolean;
  id: string;
  title: string;
};

export type PostProps = {
  post: Post;
};

export type QueryPost = {
  posts: Post[];
};
