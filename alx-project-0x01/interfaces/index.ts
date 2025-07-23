
export interface UserProps {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'user' | 'guest'; 
  username: string
}

export interface CompanyProps {
  name: string;
  catchPhrase: string;
  bs: string;
}

const users: UserProps[] = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    avatar: 'https://i.pravatar.cc/150?img=1',
    role: 'admin',

    
        
    }
  
  
];
export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
  name?: string; // Optional field for the user's name
}
