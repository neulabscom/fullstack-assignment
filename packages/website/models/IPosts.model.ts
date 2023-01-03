export interface IPostResponse {
  posts: IPost[];
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  category: string;
  body: string;
  date: string;
}