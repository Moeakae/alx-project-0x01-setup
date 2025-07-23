import React from 'react';

type UserCardProps = {
    name: string;
    avatarUrl?: string;
    email?: string;
    bio?: string;
    className?: string;
};

const UserCard: React.FC<UserCardProps> = ({
    name,
    avatarUrl,
    email,
    bio,
    className = '',
}) => (
    <div
        className={`user-card ${className}`}
        style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            background: '#fff',
            maxWidth: '350px',
            gap: '1rem',
        }}
    >
        <img
            src={avatarUrl || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(name)}
            alt={name}
            style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                objectFit: 'cover',
                background: '#f0f0f0',
            }}
        />
        <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.25rem' }}>{name}</div>
            {email && (
                <div style={{ fontSize: '0.95rem', color: '#555', marginBottom: '0.25rem' }}>{email}</div>
            )}
            {bio && (
                <div style={{ fontSize: '0.9rem', color: '#888' }}>{bio}</div>
            )}
        </div>
    </div>
);

export default UserCard;