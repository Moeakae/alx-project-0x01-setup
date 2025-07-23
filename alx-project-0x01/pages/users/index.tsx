// pages/users/index.tsx

import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';
import { GetServerSideProps } from 'next';

interface UsersPageProps {
  users: UserProps[];
}

const Users = ({ users }: UsersPageProps) => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default Users;

// ✅ Mock API fetch
export const getServerSideProps: GetServerSideProps = async () => {
  const users: UserProps[] = [
    
    
  ];

  return {
    props: { users },
  };
};

