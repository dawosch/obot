import type { NextPage, GetServerSideProps } from 'next';
import { useSession, getSession } from 'next-auth/client';
// import styles from '../styles/Home.module.css';
import { Navbar } from '../components/navbar';

const Home: NextPage = () => {
  const [session, loading] = useSession();

  return <div>Test</div>;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return { props: { session } };
  }

  return {
    redirect: {
      destination: '/api/auth/signin',
      permanent: false,
    },
  };
};
