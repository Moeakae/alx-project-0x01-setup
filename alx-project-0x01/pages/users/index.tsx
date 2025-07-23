// pages/users/index.tsx

import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

const users: UserProps[] = [
  
];
const Users = () => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  )
}
    export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

  

 export default UserCard;
