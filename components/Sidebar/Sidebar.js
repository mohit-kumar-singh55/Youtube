import React from 'react';
import { CashIcon, ColorSwatchIcon, CubeTransparentIcon, DesktopComputerIcon, HomeIcon, LibraryIcon, RefreshIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Link from "next/link";

const Sidebar = () => {
    const router = useRouter();

    return (
        <aside className='h-screen overflow-y-scroll bg-[#202020]'>
            <div className='w-[250px] flex items-center justify-start flex-col gap-1 truncate'>
                {/* section */}
                <div className='w-full flex items-center justify-start flex-col py-2'>
                    {/* Home */}
                    <Link href="/">
                        <div className={`w-full flex items-center justify-start ${router.pathname === "/" ? "bg-[#363636]" : ""} hover:bg-[#4C4C4C] transition duration-300 py-2 px-6 gap-6 cursor-pointer`}>
                            <HomeIcon className='w-6 h-6' />
                            <p className='font-semibold leading-8'>Home</p>
                        </div>
                    </Link>
                    {/* Explore */}
                    <Link href="/feed/explore">
                        <div className={`w-full flex items-center justify-start ${router.pathname === "/feed/explore" ? "bg-[#363636]" : ""} hover:bg-[#4C4C4C] transition duration-300 py-2 px-6 gap-6 cursor-pointer`}>
                            <DesktopComputerIcon className='w-6 h-6' />
                            <p className='font-semibold leading-8'>Explore</p>
                        </div>
                    </Link>
                    {/* Shorts */}
                    <Link href="/feed/shorts">
                        <div className={`w-full flex items-center justify-start ${router.pathname === "/feed/shorts" ? "bg-[#363636]" : ""} hover:bg-[#4C4C4C] transition duration-300 py-2 px-6 gap-6 cursor-pointer`}>
                            <CubeTransparentIcon className='w-6 h-6' />
                            <p className='font-semibold leading-8'>Shorts</p>
                        </div>
                    </Link>
                    {/* Subscription */}
                    <Link href="/feed/subscriptions">
                        <div className={`w-full flex items-center justify-start ${router.pathname === "/feed/subscriptions" ? "bg-[#363636]" : ""} hover:bg-[#4C4C4C] transition duration-300 py-2 px-6 gap-6 cursor-pointer`}>
                            <CashIcon className='w-6 h-6' />
                            <p className='font-semibold leading-8'>Subscription</p>
                        </div>
                    </Link>
                </div>

                {/* Divider */}
                <span className='w-[85%] bg-[rgba(255,255,255,0.1)] h-[1px]' />

                {/* section */}
                <div className='w-full flex items-center justify-start flex-col py-2'>
                    {/* Library */}
                    <Link href="/feed/library">
                        <div className={`w-full flex items-center justify-start ${router.pathname === "/feed/library" ? "bg-[#363636]" : ""} hover:bg-[#4C4C4C] transition duration-300 py-2 px-6 gap-6 cursor-pointer`}>
                            <LibraryIcon className='w-6 h-6' />
                            <p className='font-semibold leading-8'>Library</p>
                        </div>
                    </Link>
                    {/* History */}
                    <Link href="/feed/history">
                        <div className={`w-full flex items-center justify-start ${router.pathname === "/feed/history" ? "bg-[#363636]" : ""} hover:bg-[#4C4C4C] transition duration-300 py-2 px-6 gap-6 cursor-pointer`}>
                            <RefreshIcon className='w-6 h-6' />
                            <p className='font-semibold leading-8'>History</p>
                        </div>
                    </Link>
                    {/* Playlists */}
                    <Link href="/playlist/${id}">
                        <div className={`w-full flex items-center justify-start ${router.pathname === "/playlist/id" ? "bg-[#363636]" : ""} hover:bg-[#4C4C4C] transition duration-300 py-2 px-6 gap-6 cursor-pointer`}>
                            <ColorSwatchIcon className='w-6 h-6' />
                            <p className='font-semibold leading-8'>Render Playlists</p>
                        </div>
                    </Link>
                </div>

                {/* Divider */}
                <span className='w-[85%] bg-[rgba(255,255,255,0.1)] h-[1px]' />
            </div>
        </aside>
    )
}
export default Sidebar;