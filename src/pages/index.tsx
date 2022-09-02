import Layout from '@/components/Layout';
import { initializeApollo } from '@/graphql/client';
import {
  LimitedEventsDocument,
  useLimitedEventsQuery,
} from '@/graphql/generated/codegen';

function HomePage() {
  const { data } = useLimitedEventsQuery({ variables: { take: 3 } });

  return (
    <Layout title="Home" className="bg-gray-100">
      <h1>Hello world</h1>
      <div>
        {data?.limitedEvents.map((event) => (
          <div key={event.id}>{event.name}</div>
        ))}
      </div>
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
