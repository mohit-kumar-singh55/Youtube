import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className='w-full flex'>
                <Sidebar />
                {children}
            </div>
        </>
    )
}

export default Layout;