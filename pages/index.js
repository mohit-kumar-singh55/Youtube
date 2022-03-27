import Head from 'next/head';
import { useSession } from "next-auth/react";
import { useEffect } from 'react';

const Home = () => {
  const { data: session } = useSession();

  const fetchUser = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&mine=true&key=`;
    const res = await fetch(url)

    console.log(res);
  }

  useEffect(() => {
    fetchUser();
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