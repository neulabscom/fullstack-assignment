export type User = {
  id: number;
  name: string;
  email: string;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  category: string;
  body: string;
  date: string;
};

export type PostWithUser = {
  user: User;
  post: Post;
};
