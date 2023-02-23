import { GetServerSideProps } from 'next';

import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';
import { jwtParser } from '@/lib/jwt';

type Props = {
  user: {
    name: string;
    email: string;
  };
};

export default function Dashboard({ user }: Props) {
  return <h1>Bem vindo {user.name}!!</h1>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  const token = context.req.cookies['@piggyplus_token'];
  const user = jwtParser(token);

  if (!session && !token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session?.user || user,
    },
  };
};
