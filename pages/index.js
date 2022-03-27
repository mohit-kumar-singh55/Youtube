import Head from 'next/head';
import { useSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const { data: session } = useSession();

  useEffect(async () => {
    const { data } = await axios.get('/api/getYTData', {
      withCredentials: true,
    });
    console.log(data);
  }, [])

  return (
    <div>
      <Head>
        <title>YouTube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {session?.user?.name}
      </main>

    </div>
  )
}

export default Home;