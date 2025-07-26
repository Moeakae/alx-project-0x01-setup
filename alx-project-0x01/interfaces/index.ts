
export interface UserProps {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'user' | 'guest'; 
  username: string;
  street: string;
  catchPhrase: string;
  content: string;
  
}


export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
  name?: string; // Optional field for the user's name
  catchPhrase: string;
}
export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}
export interface PostContainerProps {
  posts: PostProps[];
}
const myContainer: PostContainerProps = {
  posts: [
    {id: 1, title: 'Post 1', userId: 1, body: 'content 1', catchPhrase:  } , 
    {id: 2, title: 'Post 2', userId: 2, body: 'Content 2', catchPhrase:  },
  ]
};
myContainer.posts.forEach((post) => {
  console.log(post.title);
}
)
export interface UserModalProps {
  onClose: () => void;
  onSubmit: (post: UserProps) => void;
}
