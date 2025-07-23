
export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
    name: string;
}
// interfaces/index.ts

export interface UserProps {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'user' | 'guest'; // You can adjust based on roles used
}
