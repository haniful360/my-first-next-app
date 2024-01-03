import React from 'react';

const RootLayout = ({children}) => {
    return (
        <div>
            <nav>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">blog</a>
                <a href="">contact</a>
            </nav>
            {children}
        </div>
    );
};

export default RootLayout;