import Head from 'next/head';
import { useSession } from "next-auth/react";
import { useEffect } from 'react';

const Home = () => {
  const { data: session } = useSession();

  const fetchUser = async () => {
    try {
      const apikey = process.env.GOOGLE_API_KEY;
      // const url = `https://youtube.googleapis.com/youtube/v3/channels?access_token=${session?.user?.accessToken}&part=snippet%2CcontentDetails%2Cstatistics&mine=true&key=AIzaSyDAaMnN9r2CSrbOO7fYzClMt3vjikCFw8U`;
      const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&mine=true&key=AIzaSyDAaMnN9r2CSrbOO7fYzClMt3vjikCFw8U`;
      const res = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + session?.user?.accessToken
        },
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