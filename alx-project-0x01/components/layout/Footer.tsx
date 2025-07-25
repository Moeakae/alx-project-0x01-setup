import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '1rem 0', background: '#f5f5f5' }}>
            <small>&copy; {new Date().getFullYear()} ALX Project. All rights reserved.</small>
        </footer>
    );
};

export default Footer;