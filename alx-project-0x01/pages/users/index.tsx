// pages/users/index.tsx

import { UserCard } from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

const users: UserProps[] = [
  
];
const UsersPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-blue-700 text-white p-4">
        <h1 className="text-2xl font-semibold">Users</h1>
      </header>
      <main className="p-4">
        <div className="grid grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  email={user.email}
                  avatar={user.avatar}
                  role={user.role} username={''}            />
          ))}
        </div>
      </main>
    </div>
  );
};
