import Link from 'next/link';
import { XMarkIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

import { Event, UserEventsDocument } from '@/graphql/generated/codegen';
import { useDeleteEventMutation } from '@/graphql/generated/codegen';

type Props = { event: Omit<Event, 'user' | 'createdAt' | 'updatedAt'> };

function DashboardEvent({ event }: Props) {
  const [deleteEvent] = useDeleteEventMutation({
    onCompleted(data) {
      // toast.success(
      //   `Successfully deleted event with id: ${data.deleteEvent.id}`,
      // );
    },
    onError(error) {
      // toast.error(error.message);
    },
    refetchQueries(result) {
      return [{ query: UserEventsDocument }, 'UserEvents'];
    },
  });

  return (
    <div className="flex items-center space-x-3 rounded border border-[#ddd] bg-white p-2.5 shadow-md">
      <h4 className="mb-2.5 flex-grow">
        <Link href={`/events/${event.slug}`}>{event.name}</Link>
      </h4>
      <Link
        href={`/events/edit/${event.id}`}
        className="flex items-center gap-2.5 text-blue-500 transition-colors hover:text-blue-400"
      >
        <PencilSquareIcon className="h-6 w-6" />{' '}
        <span className="hidden lg:inline">Edit</span>
      </Link>
      <button
        className="flex items-center gap-2.5 text-red-500 transition-colors hover:text-red-400"
        onClick={() => deleteEvent({ variables: { slug: event.slug } })}
      >
        <XMarkIcon className="h-6 w-6" />
        <span className="hidden lg:inline">Delete</span>
      </button>
    </div>
  );
}

export default DashboardEvent;
