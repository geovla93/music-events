import Link from 'next/link';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';
import cn from 'classnames';

import Button from './Button';
import EventItem from './EventItem';
import List from './List';
import type {
  Pagination as TPagination,
  Event,
} from '@/graphql/generated/codegen';

type Props = {
  events: Omit<Event, 'user' | 'createdAt' | 'updatedAt'>[];
  pagination: TPagination;
};

function Pagination({ events, pagination }: Props) {
  const isFirstPage = pagination.currentPage === 1;
  const isLastPage = pagination.currentPage === pagination.totalPages;

  return (
    <>
      <List
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <EventItem event={item} />}
        className="space-y-3"
      />
      <div
        className={cn('relative flex py-5', {
          'justify-end': isFirstPage,
          'justify-between': !isFirstPage && !isLastPage,
        })}
      >
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-medium">
          Showing results {pagination.from} - {pagination.to}
        </p>
        {!isFirstPage && (
          <Link
            href={`/events?take=${pagination.perPage}&page=${
              pagination.currentPage - 1
            }`}
          >
            <Button
              variant="secondary"
              className="flex w-32 items-center justify-center"
            >
              <ArrowLongLeftIcon className="mr-2 h-8 w-8" /> Previous
            </Button>
          </Link>
        )}
        {!isLastPage && (
          <Link
            href={`/events?take=${pagination.perPage}&page=${
              pagination.currentPage + 1
            }`}
          >
            <Button
              variant="secondary"
              className="flex w-32 items-center justify-center"
            >
              Next <ArrowLongRightIcon className="ml-2 h-8 w-8" />
            </Button>
          </Link>
        )}
      </div>
    </>
  );
}

export default Pagination;
