import type { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { unstable_getServerSession } from 'next-auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import authOptions from '@/lib/next-auth';
import { createEventSchema, TCreateEvent } from '@/utils/schemas';
import { useCreateEventMutation } from '@/graphql/generated/codegen';

function SubmitPage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<TCreateEvent>({
    resolver: zodResolver(createEventSchema),
    defaultValues: {
      address: '',
      date: '',
      description: '',
      name: '',
      performers: '',
      time: '',
      venue: '',
    },
  });
  const [createEvent] = useCreateEventMutation({
    onCompleted(data) {
      router.push(`/events/${data.createEvent.slug}`);
    },
    onError(error) {
      // toast.error(error.message);
    },
  });

  const onSubmit: SubmitHandler<TCreateEvent> = async (data) => {
    await createEvent({
      variables: {
        ...data,
        performers: data.performers.replace(' ', '').split(','),
        date: new Date(data.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
      },
    });
  };

  return (
    <Layout title="Submit Event" className="pt-10">
      <Container>
        <Link
          href="/events"
          className="text-blue-500 transition-colors hover:text-blue-400"
        >
          Go Back
        </Link>
        <h1 className="mb-5 text-3xl">Add Event</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5 grid gap-8 sm:grid-cols-2">
            <div>
              <label className="block" htmlFor="name">
                Event Name
              </label>
              <input
                {...register('name')}
                className="h-10 w-full p-1.5"
                type="text"
                id="name"
              />
            </div>
            <div>
              <label className="block" htmlFor="venue">
                Venue
              </label>
              <input
                {...register('venue')}
                className="h-10 w-full p-1.5"
                type="text"
                id="venue"
              />
            </div>
            <div>
              <label className="block" htmlFor="performer">
                Event Performers
              </label>
              <input
                {...register('performers')}
                className="h-10 w-full p-1.5"
                type="text"
                id="performers"
              />
            </div>
            <div>
              <label className="block" htmlFor="address">
                Event Address
              </label>
              <input
                {...register('address')}
                className="h-10 w-full p-1.5"
                type="text"
                id="address"
              />
            </div>
            <div>
              <label className="block" htmlFor="date">
                Event Date
              </label>
              <input
                {...register('date')}
                className="h-10 w-full p-1.5"
                type="date"
                id="date"
              />
            </div>
            <div>
              <label className="block" htmlFor="time">
                Event Time
              </label>
              <input
                {...register('time')}
                className="h-10 w-full p-1.5"
                type="text"
                id="time"
              />
            </div>
          </div>

          <div>
            <label className="block" htmlFor="description">
              Event Description
            </label>
            <textarea
              {...register('description')}
              className="mb-5 h-36 w-full"
              name="description"
              id="description"
            />
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Container>
    </Layout>
  );
}

export default SubmitPage;

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

  return {
    props: { session },
  };
}
