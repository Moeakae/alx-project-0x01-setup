// pages/users/index.tsx

import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface UsersPageProps {
  posts: UserProps[];
}

const Users = ({ posts }: UsersPageProps) => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {posts.map((post) => (
        <UserCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  
  const posts: UserProps[] = data.map((user: any) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    avatar: `https://i.pravatar.cc/150?u=${user.id}`, 
    role: 'user', 
  }));

  return {
    props: {
      posts,
    },
  };
};


export default Users;

