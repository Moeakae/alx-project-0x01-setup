import React from 'react';

type PostCardProps = {
    title: string;
    content: string;
    author?: string;
    date?: string;
};

const PostCard: React.FC<PostCardProps> = ({ title, content, author, date }) => (
    <div className="post-card" style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
        background: '#fff'
    }}>
        <h2 style={{ margin: '0 0 8px 0' }}>{title}</h2>
        <p style={{ margin: '0 0 8px 0' }}>{content}</p>
        <div style={{ fontSize: '0.9em', color: '#555' }}>
            {author && <span>By {author}</span>}
            {author && date && <span> &middot; </span>}
            {date && <span>{date}</span>}
        </div>
    </div>
);

export default PostCard;