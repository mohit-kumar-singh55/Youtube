import Head from 'next/head';
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>YouTube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {session.user.name}
      </main>

    </div>
  )
}

export default Home;