import type { GetServerSidePropsContext } from 'next';
import { unstable_getServerSession } from 'next-auth';

import Layout from '@/components/Layout';
import Container from '@/components/Container';
import List from '@/components/List';
import Spinner from '@/components/Spinner';
import DashboardEvent from '@/components/DashboardEvent';
import { initializeApollo } from '@/graphql/client';
import authOptions from '@/lib/next-auth';
import {
  useUserEventsQuery,
  UserEventsDocument,
} from '@/graphql/generated/codegen';

function DashboardPage() {
  const { data } = useUserEventsQuery();

  if (!data) {
    return (
      <Layout title="Dashboard">
        <Container>
          <Spinner size="large" />
        </Container>
      </Layout>
    );
  }

  return (
    <Layout title="Dashboard">
      <Container>
        <h1>
          <span className="ml-2.5 text-xl text-[#777]">Dashboard</span>
        </h1>
        <h3 className="text-2xl text-red-500">My Events</h3>
        <List
          data={data.userEvents}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <DashboardEvent event={item} />}
          className="space-y-3"
        />
      </Container>
    </Layout>
  );
}

export default DashboardPage;

export async function getServerSideProps({
  req,
  res,
}: GetServerSidePropsContext) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }

  const apolloClient = initializeApollo();
  await apolloClient.query({ query: UserEventsDocument });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
