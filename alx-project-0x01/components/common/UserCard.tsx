// components/common/UserCard.tsx

import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, avatar, role }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-shadow duration-300 w-full max-w-sm">
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full border-2 border-indigo-500"
        />
        <div>
          <h2 className="text-lg font-bold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500">{email}</p>
          <span className="text-xs mt-1 inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full capitalize">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
