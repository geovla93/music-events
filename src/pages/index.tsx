import Link from 'next/link';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import List from '@/components/List';
import Spinner from '@/components/Spinner';
import EventItem from '@/components/EventItem';
import Hero from '@/components/Hero';
import { initializeApollo } from '@/graphql/client';
import {
  LimitedEventsDocument,
  useLimitedEventsQuery,
} from '@/graphql/generated/codegen';

function HomePage() {
  const { data } = useLimitedEventsQuery({ variables: { take: 3 } });

  if (!data) {
    return (
      <Layout title="Home">
        <Container>
          <Spinner size="large" />
        </Container>
      </Layout>
    );
  }

  return (
    <Layout title="Home">
      <Hero />
      <Container>
        <h1 className="mb-4 text-4xl font-bold">Upcoming Events</h1>
        {data.limitedEvents.length === 0 ? (
          <h3>No events to show</h3>
        ) : (
          <>
            <List
              data={data.limitedEvents}
              keyExtractor={(item) => item.id}
              renderItem={(item) => <EventItem event={item} />}
              className="mb-4 space-y-3"
            />

            <Link href="/events">
              <Button variant="secondary">View All Events</Button>
            </Link>
          </>
        )}
      </Container>
    </Layout>
  );
}

export default HomePage;

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: LimitedEventsDocument,
    variables: { take: 3 },
  });

  return { props: { initialApolloState: apolloClient.cache.extract() } };
}
