import { initializeApollo } from '@/graphql/client';
import {
  GetLimitedEventsDocument,
  useGetLimitedEventsQuery,
} from '@/graphql/generated/codegen';

function HomePage() {
  const { data } = useGetLimitedEventsQuery({ variables: { take: 3 } });

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100">
      <h1>Hello world</h1>
      <div>
        {data.getLimitedEvents.map((event) => (
          <div key={event.id}>{event.name}</div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GetLimitedEventsDocument,
    variables: { take: 3 },
  });

  return { props: { initialApolloState: apolloClient.cache.extract() } };
}
