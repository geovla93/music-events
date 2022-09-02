import type { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Container from '@/components/Container';
import EventItem from '@/components/EventItem';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import List from '@/components/List';
import Spinner from '@/components/Spinner';
import { initializeApollo } from '@/graphql/client';
import {
  useEventsByKeywordQuery,
  EventsByKeywordDocument,
} from '@/graphql/generated/codegen';

type Props = {};

function SearchEventsPage({}: Props) {
  const router = useRouter();
  const { data } = useEventsByKeywordQuery({
    variables: { keyword: router.query.keyword as string },
  });

  if (!data) {
    return (
      <Layout title="Search Events">
        <Container>
          <Spinner size="large" />
        </Container>
      </Layout>
    );
  }

  return (
    <Layout title="Search Events">
      <Hero />
      <Container>
        <Link
          href="/events"
          className="text-blue-500 transition-colors hover:text-blue-400"
        >
          Go Back
        </Link>
        <h1 className="mb-4 text-4xl font-bold">
          Search Results for {router.query.keyword}
        </h1>
        {data.eventsByKeyword.length === 0 ? (
          <h3>No events found</h3>
        ) : (
          <List
            data={data.eventsByKeyword}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <EventItem event={item} />}
            className="space-y-3"
          />
        )}
      </Container>
    </Layout>
  );
}

export default SearchEventsPage;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const keyword = ctx.query.keyword;
  if (typeof keyword !== 'string') {
    return {
      notFound: true,
    };
  }

  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: EventsByKeywordDocument,
    variables: { keyword },
  });

  return {
    props: { initialApolloState: apolloClient.cache.extract() },
  };
}
