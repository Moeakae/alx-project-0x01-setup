
export interface UserProps {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'user' | 'guest'; 
  username: string;
  street: string;
  
}


export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
  name?: string; // Optional field for the user's name
}
