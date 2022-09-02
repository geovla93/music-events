import Image from 'next/future/image';
import Link from 'next/link';

import Button from './Button';
import type { Event } from '@/graphql/generated/codegen';

type Props = { event: Omit<Event, 'createdAt' | 'updatedAt' | 'user'> };

function EventItem({ event }: Props) {
  const eventDate = new Date(event.date).toLocaleDateString('en-GB', {
    dateStyle: 'short',
  });

  return (
    <div className="flex flex-col items-center justify-between space-x-4 rounded bg-white p-3 text-center shadow-md sm:flex-row sm:text-left">
      <Image
        src={event.image ?? '/images/event-default.png'}
        alt="event"
        width={170}
        height={100}
      />

      <div className="flex-grow">
        <span>
          {eventDate} at {event.time}
        </span>
        <h3 className="font-bold">{event.name}</h3>
      </div>
      <div>
        <Link href={`/events/${event.slug}`}>
          <Button>Details</Button>
        </Link>
      </div>
    </div>
  );
}

export default EventItem;
