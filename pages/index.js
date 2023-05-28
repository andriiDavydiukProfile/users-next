import Head from "next/head";
import Link from "next/link";

const Home = () => {

  return (
      <>
        <Head>
          <title>Home</title>
          <meta name="description" content=''/>
          <meta name="keywords" content='' />
        </Head>

        <div>
          <h4>Hello from Next!</h4>
          <div>
            <Link href="/users">Users</Link>
          </div>
        </div>
      </>
  );
};

export default Home
