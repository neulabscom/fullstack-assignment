export type Post = {
  id: number
  title: string
  body: string
  user: {
    id: number
    name: string
    email: string
  }
}