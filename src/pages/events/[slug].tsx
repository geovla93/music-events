import type { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import Image from 'next/future/image';
import { useRouter } from 'next/router';
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';

import Layout from '@/components/Layout';
import Container from '@/components/Container';
import { initializeApollo } from '@/graphql/client';
import {
  EventBySlugDocument,
  EventsDocument,
  EventsQuery,
  useEventBySlugQuery,
} from '@/graphql/generated/codegen';

function EventPage() {
  const router = useRouter();
  const { data } = useEventBySlugQuery({
    variables: { slug: router.query.slug as string },
  });

  if (!data) {
    return <div>Loading...</div>;
  }

  const event = data.eventBySlug;

  const eventDate = new Date(event.date).toLocaleDateString('en-GB', {
    dateStyle: 'short',
  });

  return (
    <Layout title="Event" className="pt-10">
      <Container className="relative">
        <span className="text-sm">
          {eventDate} at {event.time}
        </span>
        <h1 className="my-5 text-3xl font-bold">{event.name}</h1>
        {event.image && (
          <div className="mb-5">
            <Image
              src={event.image}
              alt="event"
              width={960}
              height={600}
              className="h-auto w-full object-cover object-center"
              quality={100}
            />
          </div>
        )}

        <h3 className="text-2xl">Performer:</h3>
        <p className="my-5">{event.performers.join(', ')}</p>
        <h3 className="text-2xl">Description:</h3>
        <p className="my-5">{event.description}</p>
        <h3 className="text-2xl">Venue: {event.venue}</h3>
        <p className="my-5">{event.address}</p>

        <Link
          href="/events"
          className="mt-10 inline-flex text-blue-500 transition-colors hover:text-blue-400"
        >
          <ArrowLongLeftIcon width={24} height={24} /> Go Back
        </Link>
      </Container>
    </Layout>
  );
}

export default EventPage;

// export async function getStaticPaths() {
//   const apolloClient = initializeApollo();
//   const { data } = await apolloClient.query<EventsQuery>({
//     query: EventsDocument,
//   });

//   const paths = data.events.map((event) => ({
//     params: { slug: event.slug },
//   }));

//   return {
//     paths,
//     fallback: 'blocking',
//   };
// }

// export async function getStaticProps({ params }: GetStaticPropsContext) {
//   const slug = params?.slug;
//   if (typeof slug === 'undefined' || Array.isArray(slug)) {
//     return {
//       notFound: true,
//     };
//   }

//   const apolloClient = initializeApollo();
//   await apolloClient.query({
//     query: EventBySlugDocument,
//     variables: { slug },
//   });

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//     revalidate: 60,
//   };
// }

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const slug = ctx.params?.slug;
  if (typeof slug === 'undefined' || Array.isArray(slug)) {
    return {
      notFound: true,
    };
  }

  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: EventBySlugDocument,
    variables: { slug },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
