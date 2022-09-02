import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Event = {
  __typename?: 'Event';
  address: Scalars['String'];
  createdAt: Scalars['Date'];
  date: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  performers: Array<Scalars['String']>;
  slug: Scalars['String'];
  time: Scalars['String'];
  updatedAt: Scalars['Date'];
  user: User;
  userId: Scalars['String'];
  venue: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEvent: Event;
  deleteEvent: Event;
  updateEvent: Event;
};


export type MutationCreateEventArgs = {
  address: Scalars['String'];
  date: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
  performers: Array<Scalars['String']>;
  time: Scalars['String'];
  venue: Scalars['String'];
};


export type MutationDeleteEventArgs = {
  slug: Scalars['String'];
};


export type MutationUpdateEventArgs = {
  address?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  performers?: InputMaybe<Array<Scalars['String']>>;
  time?: InputMaybe<Scalars['String']>;
  venue?: InputMaybe<Scalars['String']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  currentPage: Scalars['Int'];
  from: Scalars['Int'];
  perPage: Scalars['Int'];
  to: Scalars['Int'];
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PaginationEvents = {
  __typename?: 'PaginationEvents';
  events: Array<Event>;
  pagination: Pagination;
};

export type Query = {
  __typename?: 'Query';
  eventById: Event;
  eventBySlug: Event;
  events: Array<Event>;
  eventsByKeyword: Array<Event>;
  limitedEvents: Array<Event>;
  paginatedEvents: PaginationEvents;
  userEvents: Array<Event>;
};


export type QueryEventByIdArgs = {
  id: Scalars['String'];
};


export type QueryEventBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryEventsByKeywordArgs = {
  keyword: Scalars['String'];
};


export type QueryLimitedEventsArgs = {
  take: Scalars['Int'];
};


export type QueryPaginatedEventsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  events: Array<Event>;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type EventDataFragment = { __typename?: 'Event', id: string, name: string, slug: string, venue: string, address: string, performers: Array<string>, date: string, time: string, description: string, image?: string | null, userId: string };

export type CreateEventMutationVariables = Exact<{
  name: Scalars['String'];
  address: Scalars['String'];
  performers: Array<Scalars['String']> | Scalars['String'];
  venue: Scalars['String'];
  date: Scalars['String'];
  time: Scalars['String'];
  description: Scalars['String'];
}>;


export type CreateEventMutation = { __typename?: 'Mutation', createEvent: { __typename?: 'Event', id: string, name: string, slug: string, venue: string, address: string, performers: Array<string>, date: string, time: string, description: string, image?: string | null, userId: string } };

export type DeleteEventMutationVariables = Exact<{
  slug: Scalars['String'];
}>;


export type DeleteEventMutation = { __typename?: 'Mutation', deleteEvent: { __typename?: 'Event', id: string } };

export type UpdateEventMutationVariables = Exact<{
  updateEventId: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  performers?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  venue?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
}>;


export type UpdateEventMutation = { __typename?: 'Mutation', updateEvent: { __typename?: 'Event', id: string, name: string, slug: string, venue: string, address: string, performers: Array<string>, date: string, time: string, description: string, image?: string | null, userId: string } };

export type UserEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserEventsQuery = { __typename?: 'Query', userEvents: Array<{ __typename?: 'Event', id: string, name: string, slug: string, venue: string, address: string, performers: Array<string>, date: string, time: string, description: string, image?: string | null, userId: string }> };

export type EventsQueryVariables = Exact<{ [key: string]: never; }>;


export type EventsQuery = { __typename?: 'Query', events: Array<{ __typename?: 'Event', id: string, slug: string }> };

export type EventByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type EventByIdQuery = { __typename?: 'Query', eventById: { __typename?: 'Event', id: string, name: string, slug: string, venue: string, address: string, performers: Array<string>, date: string, time: string, description: string, image?: string | null, userId: string } };

export type EventBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type EventBySlugQuery = { __typename?: 'Query', eventBySlug: { __typename?: 'Event', id: string, name: string, slug: string, venue: string, address: string, performers: Array<string>, date: string, time: string, description: string, image?: string | null, userId: string } };

export type EventsByKeywordQueryVariables = Exact<{
  keyword: Scalars['String'];
}>;


export type EventsByKeywordQuery = { __typename?: 'Query', eventsByKeyword: Array<{ __typename?: 'Event', id: string, name: string, slug: string, venue: string, address: string, performers: Array<string>, date: string, time: string, description: string, image?: string | null, userId: string }> };

export type LimitedEventsQueryVariables = Exact<{
  take: Scalars['Int'];
}>;


export type LimitedEventsQuery = { __typename?: 'Query', limitedEvents: Array<{ __typename?: 'Event', id: string, name: string, slug: string, venue: string, address: string, performers: Array<string>, date: string, time: string, description: string, image?: string | null, userId: string }> };

export type PaginatedEventsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
}>;


export type PaginatedEventsQuery = { __typename?: 'Query', paginatedEvents: { __typename?: 'PaginationEvents', events: Array<{ __typename?: 'Event', id: string, name: string, slug: string, venue: string, address: string, performers: Array<string>, date: string, time: string, description: string, image?: string | null, userId: string }>, pagination: { __typename?: 'Pagination', total: number, currentPage: number, totalPages: number, perPage: number, from: number, to: number } } };

export const EventDataFragmentDoc = gql`
    fragment EventData on Event {
  id
  name
  slug
  venue
  address
  performers
  date
  time
  description
  image
  userId
}
    `;
export const CreateEventDocument = gql`
    mutation CreateEvent($name: String!, $address: String!, $performers: [String!]!, $venue: String!, $date: String!, $time: String!, $description: String!) {
  createEvent(
    name: $name
    address: $address
    performers: $performers
    venue: $venue
    date: $date
    time: $time
    description: $description
  ) {
    ...EventData
  }
}
    ${EventDataFragmentDoc}`;
export type CreateEventMutationFn = Apollo.MutationFunction<CreateEventMutation, CreateEventMutationVariables>;

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      name: // value for 'name'
 *      address: // value for 'address'
 *      performers: // value for 'performers'
 *      venue: // value for 'venue'
 *      date: // value for 'date'
 *      time: // value for 'time'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, options);
      }
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>;
export type CreateEventMutationResult = Apollo.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = Apollo.BaseMutationOptions<CreateEventMutation, CreateEventMutationVariables>;
export const DeleteEventDocument = gql`
    mutation DeleteEvent($slug: String!) {
  deleteEvent(slug: $slug) {
    id
  }
}
    `;
export type DeleteEventMutationFn = Apollo.MutationFunction<DeleteEventMutation, DeleteEventMutationVariables>;

/**
 * __useDeleteEventMutation__
 *
 * To run a mutation, you first call `useDeleteEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventMutation, { data, loading, error }] = useDeleteEventMutation({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useDeleteEventMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEventMutation, DeleteEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEventMutation, DeleteEventMutationVariables>(DeleteEventDocument, options);
      }
export type DeleteEventMutationHookResult = ReturnType<typeof useDeleteEventMutation>;
export type DeleteEventMutationResult = Apollo.MutationResult<DeleteEventMutation>;
export type DeleteEventMutationOptions = Apollo.BaseMutationOptions<DeleteEventMutation, DeleteEventMutationVariables>;
export const UpdateEventDocument = gql`
    mutation UpdateEvent($updateEventId: String!, $name: String, $address: String, $performers: [String!], $venue: String, $date: String, $time: String, $description: String, $image: String) {
  updateEvent(
    id: $updateEventId
    name: $name
    address: $address
    performers: $performers
    venue: $venue
    date: $date
    time: $time
    description: $description
    image: $image
  ) {
    ...EventData
  }
}
    ${EventDataFragmentDoc}`;
export type UpdateEventMutationFn = Apollo.MutationFunction<UpdateEventMutation, UpdateEventMutationVariables>;

/**
 * __useUpdateEventMutation__
 *
 * To run a mutation, you first call `useUpdateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventMutation, { data, loading, error }] = useUpdateEventMutation({
 *   variables: {
 *      updateEventId: // value for 'updateEventId'
 *      name: // value for 'name'
 *      address: // value for 'address'
 *      performers: // value for 'performers'
 *      venue: // value for 'venue'
 *      date: // value for 'date'
 *      time: // value for 'time'
 *      description: // value for 'description'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useUpdateEventMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEventMutation, UpdateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEventMutation, UpdateEventMutationVariables>(UpdateEventDocument, options);
      }
export type UpdateEventMutationHookResult = ReturnType<typeof useUpdateEventMutation>;
export type UpdateEventMutationResult = Apollo.MutationResult<UpdateEventMutation>;
export type UpdateEventMutationOptions = Apollo.BaseMutationOptions<UpdateEventMutation, UpdateEventMutationVariables>;
export const UserEventsDocument = gql`
    query UserEvents {
  userEvents {
    ...EventData
  }
}
    ${EventDataFragmentDoc}`;

/**
 * __useUserEventsQuery__
 *
 * To run a query within a React component, call `useUserEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserEventsQuery(baseOptions?: Apollo.QueryHookOptions<UserEventsQuery, UserEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserEventsQuery, UserEventsQueryVariables>(UserEventsDocument, options);
      }
export function useUserEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserEventsQuery, UserEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserEventsQuery, UserEventsQueryVariables>(UserEventsDocument, options);
        }
export type UserEventsQueryHookResult = ReturnType<typeof useUserEventsQuery>;
export type UserEventsLazyQueryHookResult = ReturnType<typeof useUserEventsLazyQuery>;
export type UserEventsQueryResult = Apollo.QueryResult<UserEventsQuery, UserEventsQueryVariables>;
export const EventsDocument = gql`
    query Events {
  events {
    id
    slug
  }
}
    `;

/**
 * __useEventsQuery__
 *
 * To run a query within a React component, call `useEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useEventsQuery(baseOptions?: Apollo.QueryHookOptions<EventsQuery, EventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
      }
export function useEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventsQuery, EventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
        }
export type EventsQueryHookResult = ReturnType<typeof useEventsQuery>;
export type EventsLazyQueryHookResult = ReturnType<typeof useEventsLazyQuery>;
export type EventsQueryResult = Apollo.QueryResult<EventsQuery, EventsQueryVariables>;
export const EventByIdDocument = gql`
    query EventById($id: String!) {
  eventById(id: $id) {
    ...EventData
  }
}
    ${EventDataFragmentDoc}`;

/**
 * __useEventByIdQuery__
 *
 * To run a query within a React component, call `useEventByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEventByIdQuery(baseOptions: Apollo.QueryHookOptions<EventByIdQuery, EventByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventByIdQuery, EventByIdQueryVariables>(EventByIdDocument, options);
      }
export function useEventByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventByIdQuery, EventByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventByIdQuery, EventByIdQueryVariables>(EventByIdDocument, options);
        }
export type EventByIdQueryHookResult = ReturnType<typeof useEventByIdQuery>;
export type EventByIdLazyQueryHookResult = ReturnType<typeof useEventByIdLazyQuery>;
export type EventByIdQueryResult = Apollo.QueryResult<EventByIdQuery, EventByIdQueryVariables>;
export const EventBySlugDocument = gql`
    query EventBySlug($slug: String!) {
  eventBySlug(slug: $slug) {
    ...EventData
  }
}
    ${EventDataFragmentDoc}`;

/**
 * __useEventBySlugQuery__
 *
 * To run a query within a React component, call `useEventBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useEventBySlugQuery(baseOptions: Apollo.QueryHookOptions<EventBySlugQuery, EventBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventBySlugQuery, EventBySlugQueryVariables>(EventBySlugDocument, options);
      }
export function useEventBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventBySlugQuery, EventBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventBySlugQuery, EventBySlugQueryVariables>(EventBySlugDocument, options);
        }
export type EventBySlugQueryHookResult = ReturnType<typeof useEventBySlugQuery>;
export type EventBySlugLazyQueryHookResult = ReturnType<typeof useEventBySlugLazyQuery>;
export type EventBySlugQueryResult = Apollo.QueryResult<EventBySlugQuery, EventBySlugQueryVariables>;
export const EventsByKeywordDocument = gql`
    query EventsByKeyword($keyword: String!) {
  eventsByKeyword(keyword: $keyword) {
    ...EventData
  }
}
    ${EventDataFragmentDoc}`;

/**
 * __useEventsByKeywordQuery__
 *
 * To run a query within a React component, call `useEventsByKeywordQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsByKeywordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsByKeywordQuery({
 *   variables: {
 *      keyword: // value for 'keyword'
 *   },
 * });
 */
export function useEventsByKeywordQuery(baseOptions: Apollo.QueryHookOptions<EventsByKeywordQuery, EventsByKeywordQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventsByKeywordQuery, EventsByKeywordQueryVariables>(EventsByKeywordDocument, options);
      }
export function useEventsByKeywordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventsByKeywordQuery, EventsByKeywordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventsByKeywordQuery, EventsByKeywordQueryVariables>(EventsByKeywordDocument, options);
        }
export type EventsByKeywordQueryHookResult = ReturnType<typeof useEventsByKeywordQuery>;
export type EventsByKeywordLazyQueryHookResult = ReturnType<typeof useEventsByKeywordLazyQuery>;
export type EventsByKeywordQueryResult = Apollo.QueryResult<EventsByKeywordQuery, EventsByKeywordQueryVariables>;
export const LimitedEventsDocument = gql`
    query LimitedEvents($take: Int!) {
  limitedEvents(take: $take) {
    ...EventData
  }
}
    ${EventDataFragmentDoc}`;

/**
 * __useLimitedEventsQuery__
 *
 * To run a query within a React component, call `useLimitedEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLimitedEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLimitedEventsQuery({
 *   variables: {
 *      take: // value for 'take'
 *   },
 * });
 */
export function useLimitedEventsQuery(baseOptions: Apollo.QueryHookOptions<LimitedEventsQuery, LimitedEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LimitedEventsQuery, LimitedEventsQueryVariables>(LimitedEventsDocument, options);
      }
export function useLimitedEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LimitedEventsQuery, LimitedEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LimitedEventsQuery, LimitedEventsQueryVariables>(LimitedEventsDocument, options);
        }
export type LimitedEventsQueryHookResult = ReturnType<typeof useLimitedEventsQuery>;
export type LimitedEventsLazyQueryHookResult = ReturnType<typeof useLimitedEventsLazyQuery>;
export type LimitedEventsQueryResult = Apollo.QueryResult<LimitedEventsQuery, LimitedEventsQueryVariables>;
export const PaginatedEventsDocument = gql`
    query PaginatedEvents($take: Int, $page: Int) {
  paginatedEvents(take: $take, page: $page) {
    events {
      ...EventData
    }
    pagination {
      total
      currentPage
      totalPages
      perPage
      from
      to
    }
  }
}
    ${EventDataFragmentDoc}`;

/**
 * __usePaginatedEventsQuery__
 *
 * To run a query within a React component, call `usePaginatedEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaginatedEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaginatedEventsQuery({
 *   variables: {
 *      take: // value for 'take'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePaginatedEventsQuery(baseOptions?: Apollo.QueryHookOptions<PaginatedEventsQuery, PaginatedEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaginatedEventsQuery, PaginatedEventsQueryVariables>(PaginatedEventsDocument, options);
      }
export function usePaginatedEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaginatedEventsQuery, PaginatedEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaginatedEventsQuery, PaginatedEventsQueryVariables>(PaginatedEventsDocument, options);
        }
export type PaginatedEventsQueryHookResult = ReturnType<typeof usePaginatedEventsQuery>;
export type PaginatedEventsLazyQueryHookResult = ReturnType<typeof usePaginatedEventsLazyQuery>;
export type PaginatedEventsQueryResult = Apollo.QueryResult<PaginatedEventsQuery, PaginatedEventsQueryVariables>;