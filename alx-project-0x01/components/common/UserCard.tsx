
import { UserProps } from '@/interfaces';

export const UserCard = ({ id, name, email, avatar, role }: UserProps) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <img src={avatar} alt={name} className="w-16 h-16 rounded-full mb-2" />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-500">{email}</p>
      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">{role}</span>
    </div>
  );
};
