import Head from 'next/head';
import { useSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import { useEffect } from 'react';

const Home = () => {
  const { data: session } = useSession();

  const fetchUser = async () => {
    try {
      const apikey = process.env.GOOGLE_API_KEY;
      const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&mine=true&key=AIzaSyDAaMnN9r2CSrbOO7fYzClMt3vjikCFw8U`;
      const res = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + session?.user?.accessToken
        },
        credentials: 'include'
      });
      const data = res.json();

      console.log(data);
    }
    catch (e) {
      console.log(e);
    }
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