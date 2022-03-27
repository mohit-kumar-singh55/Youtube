import React from 'react';
import { getProviders, signIn } from "next-auth/react";

const LogIn = ({ providers }) => {
    return (
        <div className='w-full flex items-center justify-center text-center flex-col gap-5 h-screen overflow-y-scroll'>
            <img src={"/assets/welcome.svg"} alt="welcome" className='w-[300px] h-[300px]' />
            {Object?.values(providers)?.map((provider, index) => (
                <button key={index}
                    className='py-3 px-8 bg-transparent font-semibold border-2 border-[#00FEFF] text-[#00FEFF] rounded-lg'
                    onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                >
                    Sign In With {provider.name}
                </button>
            ))}
        </div>
    )
}

export default LogIn;

export const getServerSideProps = async () => {
    const providers = await getProviders();

    return {
        props: {
            providers,
        }
    }
}