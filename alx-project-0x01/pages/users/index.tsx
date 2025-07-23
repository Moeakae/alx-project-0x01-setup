import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-7x1 font-thin">Welcome Page</h1>
            
        </div>
    );
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

export default Home;