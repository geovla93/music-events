import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import Pagination from '@/components/Pagination';
import Spinner from '@/components/Spinner';
import { initializeApollo } from '@/graphql/client';
import {
  usePaginatedEventsQuery,
  PaginatedEventsDocument,
} from '@/graphql/generated/codegen';

function EventsPage() {
  const router = useRouter();
  const take = router.query.take as string | undefined;
  const page = router.query.page as string | undefined;
  const { data } = usePaginatedEventsQuery({
    variables: {
      page: page ? parseInt(page, 10) : undefined,
      take: take ? parseInt(take, 10) : undefined,
    },
  });

  if (!data) {
    return (
      <Layout title="Events">
        <Container>
          <Spinner size="large" />
        </Container>
      </Layout>
    );
  }

  const { events, pagination } = data.paginatedEvents;

  return (
    <Layout title="Events">
      <Hero />
      <Container>
        <h1 className="mb-4 text-4xl font-bold">Events</h1>
        {events.length === 0 ? (
          <h3>No events to show</h3>
        ) : (
          <Pagination events={events} pagination={pagination} />
        )}
      </Container>
    </Layout>
  );
}

export default EventsPage;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const page = ctx.query.page as string | undefined;
  const take = ctx.query.take as string | undefined;

  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: PaginatedEventsDocument,
    variables: {
      take: take ? parseInt(take, 10) : undefined,
      page: page ? parseInt(page, 10) : undefined,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
