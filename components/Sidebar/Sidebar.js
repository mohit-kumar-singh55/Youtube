import React from 'react';
import { HomeIcon } from "@heroicons/react/solid";

const Sidebar = () => {
    return (
        <aside className='w-[250px] bg-[#202020] h-screen overflow-y-scroll flex items-center justify-start flex-col gap-5 py-2'>
            {/* sections */}
            <div className='w-full flex items-center justify-start flex-col'>
                <div className='w-full flex items-center justify-start hover:bg-[#4C4C4C] py-2 px-6 gap-6 cursor-pointer'>
                    <HomeIcon className='w-6 h-6' />
                    <p className='font-semibold leading-8'>Home</p>
                </div>
            </div>
        </aside>
    )
}
export default Sidebar;