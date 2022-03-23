import React from 'react';
import Image from 'next/image';
import { BellIcon, MenuIcon, SearchIcon, VideoCameraIcon, ViewGridIcon } from "@heroicons/react/outline";
import { MicrophoneIcon } from "@heroicons/react/solid";
import youtube from "../public/assets/youtube.png";

const Header = () => {
    return (

        <nav className='bg-[#202020] sticky top-0 z-50'>
            <div className='flex justify-between items-center w-full gap-10 p-2 px-8'>
                {/* Left */}
                <div className='flex items-center justify-between'>
                    <MenuIcon className='w-7 h-7 cursor-pointer' />
                    <div className='relative w-24 h-10 ml-6 cursor-pointer'>
                        <Image src={youtube} alt="logo" className='invert' objectFit='contain' layout='fill' />
                    </div>
                </div>

                {/* Center */}
                <div className='w-[600px] flex items-center justify-between gap-4'>
                    <div className='bg-[#313131] p-[0.8px] rounded-sm flex items-center justify-center flex-1 cursor-pointer'>
                        <input className='w-full bg-[#121212] p-4 h-10 rounded-sm focus:border-gray-50' type="Search" placeholder='Search here...' />
                        <SearchIcon className='w-6 h-6 mx-5' />
                    </div>
                    <span className='bg-[#181818] rounded-full p-2'>
                        <MicrophoneIcon className='w-6 h-6 cursor-pointer' />
                    </span>
                </div>

                {/* Right */}
                <div className="flex items-center justify-end gap-6">
                    <VideoCameraIcon className='h-6 stroke-1 cursor-pointer' />
                    <ViewGridIcon className='h-6 stroke-1 cursor-pointer' />
                    <BellIcon className='h-6 stroke-1 cursor-pointer' />
                    <img className='w-[35px] h-[35px] rounded-full' src="https://yt3.ggpht.com/yti/APfAmoFuyHWZVQb4EHeZbbKyNwaBi-_YpZ2SKA6LHm3Vpg=s88-c-k-c0x00ffffff-no-rj-mo" alt="user" />
                </div>
            </div>
        </nav>
    )
}

export default Header;