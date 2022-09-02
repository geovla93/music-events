import { useState } from 'react';
import type { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import Image from 'next/future/image';
import { useRouter } from 'next/router';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { unstable_getServerSession } from 'next-auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import Modal from '@/components/Modal';
import { initializeApollo } from '@/graphql/client';
import {
  EventByIdDocument,
  useEventByIdQuery,
  useUpdateEventMutation,
} from '@/graphql/generated/codegen';
import authOptions from '@/lib/next-auth';
import { TUpdateEvent, updateEventSchema } from '@/utils/schemas';
import useModal from '@/hooks/useModal';

function EditEventPage() {
  const router = useRouter();
  const { openModal, closeModal, isOpen } = useModal();
  const { data } = useEventByIdQuery({
    variables: { id: router.query.eventId as string },
  });
  const [updateEvent] = useUpdateEventMutation({
    onCompleted(data) {
      router.push(`/events/${data.updateEvent.slug}`);
    },
    onError(error) {
      // toast.error(error.message);
    },
  });
  const [imagePreview, setImagePreview] = useState<string | null>(
    data?.eventById.image ?? null,
  );
  const { register, handleSubmit } = useForm<TUpdateEvent>({
    resolver: zodResolver(updateEventSchema),
    defaultValues: data
      ? {
          name: data.eventById.name,
          venue: data.eventById.venue,
          performers: data.eventById.performers.join(', '),
          description: data.eventById.description,
          address: data.eventById.address,
          date: new Date(data.eventById.date).toLocaleDateString('en-CA'),
          time: data.eventById.time,
          image: data.eventById.image ?? undefined,
        }
      : {
          name: '',
          venue: '',
          performers: '',
          description: '',
          address: '',
          date: '',
          time: '',
          image: undefined,
        },
  });
  const event = data?.eventById;

  const onImageUpload = (imageUrl: string) => {
    closeModal();
    setImagePreview(imageUrl);
  };

  const onSubmit: SubmitHandler<TUpdateEvent> = async (data) => {
    await updateEvent({
      variables: {
        ...data,
        updateEventId: event?.id ?? '',
        date: new Date(data.date!).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
        image: imagePreview,
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
        <h1 className="mb-5 text-3xl">Edit Event</h1>
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
                id="performer"
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
              id="description"
            />
          </div>

          <Button type="submit" className="mb-5 w-full">
            Update Event
          </Button>
        </form>

        <h2>Event Image</h2>
        {imagePreview ? (
          <Image
            src={imagePreview}
            alt="preview"
            width={170}
            height={100}
            className="aspect-video h-full w-auto"
          />
        ) : (
          <div>
            <p>No image uploaded</p>
          </div>
        )}

        <div className="mt-5">
          <Button
            onClick={openModal}
            variant="secondary"
            className="flex items-center"
          >
            <PhotoIcon className="mr-2 h-6 w-6" /> Set Image
          </Button>
        </div>

        <Modal
          onImageUpload={onImageUpload}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      </Container>
    </Layout>
  );
}

export default EditEventPage;

export async function getServerSideProps({
  req,
  res,
  params,
}: GetServerSidePropsContext) {
  const eventId = params?.eventId;
  if (typeof eventId !== 'string') {
    return {
      notFound: true,
    };
  }

  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: `/auth/signin?redirect=/events/edit/${eventId}`,
        permanent: false,
      },
    };
  }

  const apolloClient = initializeApollo(null, { req, res });
  await apolloClient.query({
    query: EventByIdDocument,
    variables: { id: eventId },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      session,
    },
  };
}
