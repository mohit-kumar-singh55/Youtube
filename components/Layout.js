import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className='min-h-screen w-full flex'>
                <Sidebar />
                {children}
            </div>
        </>
    )
}

export default Layout;