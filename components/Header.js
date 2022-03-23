import React from 'react';
import Image from 'next/image';
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";
import youtube from "../public/assets/youtube.png";

const Header = () => {
    return (

        <nav className='bg-[#202020] sticky top-0 z-50'>
            <div className='flex justify-between items-center w-full gap-10 p-2 px-8'>
                {/* Left */}
                <div className='flex items-center justify-between'>
                    <MenuIcon className='w-7 h-7' />
                    <div className='relative w-24 h-10 ml-6'>
                        <Image src={youtube} alt="logo" className='invert' objectFit='contain' layout='fill' />
                    </div>
                </div>

                {/* Center */}
                <div className='w-[600px]'>
                    <div className='bg-[#313131] p-[0.8px] rounded-sm flex items-center justify-center'>
                        <input className='w-full bg-[#121212] p-4 h-10 rounded-sm block sm:text-sm focus:border-gray-50' type="Search" placeholder='Search' />
                        <SearchIcon className='w-6 h-6 mx-5' />
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center justify-end space-x-4">
                    {/* <HomeIcon onClick={handleClick} className='navbtn' /> */}
                    <MenuIcon className='h-6' />
                </div>
            </div>
        </nav>
    )
}

export default Header;