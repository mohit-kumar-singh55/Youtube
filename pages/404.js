import React from 'react';

const ErrorPage = () => {
    return (
        <div className='w-full flex items-center justify-center text-center flex-col gap-5 h-screen overflow-y-scroll'>
            <img src={"/assets/error.svg"} alt="404" className='w-[300px] h-[300px]' />
            <div className='font-semibold text-lg'>
                <p>Hmm... This page is under construction</p>
                <p>Please visit again later</p>
            </div>
        </div>
    )
}

export default ErrorPage;