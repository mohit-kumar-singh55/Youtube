import React from 'react';
import Image from 'next/image';
import { BellIcon, MenuIcon, SearchIcon, VideoCameraIcon, ViewGridIcon } from "@heroicons/react/outline";
import { MicrophoneIcon } from "@heroicons/react/solid";
import youtube from "../../public/assets/youtube.png";
import styles from "./Header.module.css";
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { sidebarToggle } from "../../atoms/SidebarAtom";

const Header = () => {
    const [toggle, setToggle] = useRecoilState(sidebarToggle);

    return (

        <nav className='bg-[#202020] sticky top-0 z-50'>
            <div className={`flex justify-between items-center w-full gap-10 p-2 px-6 ${styles.custom_nav}`}>
                {/* Left */}
                <div className='flex items-center justify-between'>
                    <MenuIcon className='w-7 h-7 cursor-pointer stroke-1' onClick={() => setToggle(toggle ? false : true)} />
                    <Link href="/">
                        <div className={`relative w-24 h-10 ml-6 cursor-pointer ${styles.custom_logo}`}>
                            <Image src={youtube} alt="logo" className='invert' objectFit='contain' layout='fill' />
                        </div>
                    </Link>
                </div>

                {/* Center */}
                <div className={`w-[600px] flex items-center justify-between gap-4 ${styles.custom_search}`}>
                    <div className=' bg-[#313131] p-[0.8px] rounded-sm flex items-center justify-center flex-1 cursor-pointer'>
                        <input className='w-full bg-[#121212] p-4 h-10 rounded-sm focus:border-gray-50' type="Search" placeholder='Search here...' />
                        <SearchIcon className={`w-6 h-6 mx-5 ${styles.custom_searchIcon}`} />
                    </div>
                    <span className='bg-[#181818] rounded-full p-2'>
                        <MicrophoneIcon className='w-6 h-6 cursor-pointer' />
                    </span>
                </div>

                {/* Right */}
                <div className="hidden sm:flex items-center justify-end gap-6">
                    <span>
                        <VideoCameraIcon className={`h-6 stroke-1 cursor-pointer`} />
                    </span>
                    <span>
                        <ViewGridIcon className={`h-6 stroke-1 cursor-pointer`} />
                    </span>
                    <span>
                        <BellIcon className={`h-6 stroke-1 cursor-pointer`} />
                    </span>
                    <img className='w-[35px] h-[35px] rounded-full cursor-pointer' src="https://yt3.ggpht.com/yti/APfAmoFuyHWZVQb4EHeZbbKyNwaBi-_YpZ2SKA6LHm3Vpg=s88-c-k-c0x00ffffff-no-rj-mo" alt="user" />
                </div>
            </div>
        </nav>
    )
}

export default Header;