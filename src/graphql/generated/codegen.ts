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
  performer: Scalars['String'];
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
  performer?: InputMaybe<Scalars['String']>;
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
  getAllEvents: Array<Event>;
  getEventById: Event;
  getEventBySlug: Event;
  getEventsByKeyword: Array<Event>;
  getLimitedEvents: Array<Event>;
  getPaginatedEvents: PaginationEvents;
  getUserEvents: Array<Event>;
};


export type QueryGetEventByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetEventBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryGetEventsByKeywordArgs = {
  keyword: Scalars['String'];
};


export type QueryGetLimitedEventsArgs = {
  take: Scalars['Int'];
};


export type QueryGetPaginatedEventsArgs = {
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
  performer: Scalars['String'];
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
  performer?: InputMaybe<Scalars['String']>;
  venue?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
}>;


export type UpdateEventMutation = { __typename?: 'Mutation', updateEvent: { __typename?: 'Event', id: string, name: string, slug: string, venue: string, address: string, performers: Array<string>, date: string, time: string, description: string, image?: string | null, userId: string } };

export type GetUserEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserEventsQuery = { __typename?: 'Query', getUserEvents: Array<{ __typename?: 'Event', id: string, name: string, slug: string, venue: string, address: string, performers: Array<string>, date: string, time: string, description: string, image?: string | null, userId: string }> };

export type GetAllEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEventsQuery = { __typename?: 'Query', getAllEvents: Array<{ __typename?: 'Event', id: string, slug: string }> };

export type GetEventByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetEventByIdQuery = { __typename?: 'Query', getEventById: { __typename?: 'Event', id: string, name: string, slug: string, venue: string, address: string, performers: Array<string>, date: string, time: string, description: string, image?: string | null, userId: string } };

export type GetEventBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetEventBySlugQuery = { __typename?: 'Query', getEventBySlug: { __typename?: 'Event', id: string, name: string, slug: string, venue: string, address: string, performers: Array<string>, date: string, time: string, description: string, image?: string | null, userId: string } };

export type GetEventsByKeywordQueryVariables = Exact<{
  keyword: Scalars['String'];
}>;


export type GetEventsByKeywordQuery = { __typename?: 'Query', getEventsByKeyword: Array<{ __typename?: 'Event', id: string, name: string, slug: string, venue: string, address: string, performers: Array<string>, date: string, time: string, description: string, image?: string | null, userId: string }> };

export type GetLimitedEventsQueryVariables = Exact<{
  take: Scalars['Int'];
}>;


export type GetLimitedEventsQuery = { __typename?: 'Query', getLimitedEvents: Array<{ __typename?: 'Event', id: string, name: string, slug: string, venue: string, address: string, performers: Array<string>, date: string, time: string, description: string, image?: string | null, userId: string }> };

export type GetPaginatedEventsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetPaginatedEventsQuery = { __typename?: 'Query', getPaginatedEvents: { __typename?: 'PaginationEvents', events: Array<{ __typename?: 'Event', id: string, name: string, slug: string, venue: string, address: string, performers: Array<string>, date: string, time: string, description: string, image?: string | null, userId: string }>, pagination: { __typename?: 'Pagination', total: number, currentPage: number, totalPages: number, perPage: number, from: number, to: number } } };

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
    mutation CreateEvent($name: String!, $address: String!, $performer: String!, $venue: String!, $date: String!, $time: String!, $description: String!) {
  createEvent(
    name: $name
    address: $address
    performer: $performer
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
 *      performer: // value for 'performer'
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
    mutation UpdateEvent($updateEventId: String!, $name: String, $address: String, $performer: String, $venue: String, $date: String, $time: String, $description: String, $image: String) {
  updateEvent(
    id: $updateEventId
    name: $name
    address: $address
    performer: $performer
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
 *      performer: // value for 'performer'
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
export const GetUserEventsDocument = gql`
    query GetUserEvents {
  getUserEvents {
    ...EventData
  }
}
    ${EventDataFragmentDoc}`;

/**
 * __useGetUserEventsQuery__
 *
 * To run a query within a React component, call `useGetUserEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserEventsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserEventsQuery, GetUserEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserEventsQuery, GetUserEventsQueryVariables>(GetUserEventsDocument, options);
      }
export function useGetUserEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserEventsQuery, GetUserEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserEventsQuery, GetUserEventsQueryVariables>(GetUserEventsDocument, options);
        }
export type GetUserEventsQueryHookResult = ReturnType<typeof useGetUserEventsQuery>;
export type GetUserEventsLazyQueryHookResult = ReturnType<typeof useGetUserEventsLazyQuery>;
export type GetUserEventsQueryResult = Apollo.QueryResult<GetUserEventsQuery, GetUserEventsQueryVariables>;
export const GetAllEventsDocument = gql`
    query GetAllEvents {
  getAllEvents {
    id
    slug
  }
}
    `;

/**
 * __useGetAllEventsQuery__
 *
 * To run a query within a React component, call `useGetAllEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllEventsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllEventsQuery, GetAllEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllEventsQuery, GetAllEventsQueryVariables>(GetAllEventsDocument, options);
      }
export function useGetAllEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllEventsQuery, GetAllEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllEventsQuery, GetAllEventsQueryVariables>(GetAllEventsDocument, options);
        }
export type GetAllEventsQueryHookResult = ReturnType<typeof useGetAllEventsQuery>;
export type GetAllEventsLazyQueryHookResult = ReturnType<typeof useGetAllEventsLazyQuery>;
export type GetAllEventsQueryResult = Apollo.QueryResult<GetAllEventsQuery, GetAllEventsQueryVariables>;
export const GetEventByIdDocument = gql`
    query GetEventById($id: String!) {
  getEventById(id: $id) {
    ...EventData
  }
}
    ${EventDataFragmentDoc}`;

/**
 * __useGetEventByIdQuery__
 *
 * To run a query within a React component, call `useGetEventByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEventByIdQuery(baseOptions: Apollo.QueryHookOptions<GetEventByIdQuery, GetEventByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventByIdQuery, GetEventByIdQueryVariables>(GetEventByIdDocument, options);
      }
export function useGetEventByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventByIdQuery, GetEventByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventByIdQuery, GetEventByIdQueryVariables>(GetEventByIdDocument, options);
        }
export type GetEventByIdQueryHookResult = ReturnType<typeof useGetEventByIdQuery>;
export type GetEventByIdLazyQueryHookResult = ReturnType<typeof useGetEventByIdLazyQuery>;
export type GetEventByIdQueryResult = Apollo.QueryResult<GetEventByIdQuery, GetEventByIdQueryVariables>;
export const GetEventBySlugDocument = gql`
    query GetEventBySlug($slug: String!) {
  getEventBySlug(slug: $slug) {
    ...EventData
  }
}
    ${EventDataFragmentDoc}`;

/**
 * __useGetEventBySlugQuery__
 *
 * To run a query within a React component, call `useGetEventBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetEventBySlugQuery(baseOptions: Apollo.QueryHookOptions<GetEventBySlugQuery, GetEventBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventBySlugQuery, GetEventBySlugQueryVariables>(GetEventBySlugDocument, options);
      }
export function useGetEventBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventBySlugQuery, GetEventBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventBySlugQuery, GetEventBySlugQueryVariables>(GetEventBySlugDocument, options);
        }
export type GetEventBySlugQueryHookResult = ReturnType<typeof useGetEventBySlugQuery>;
export type GetEventBySlugLazyQueryHookResult = ReturnType<typeof useGetEventBySlugLazyQuery>;
export type GetEventBySlugQueryResult = Apollo.QueryResult<GetEventBySlugQuery, GetEventBySlugQueryVariables>;
export const GetEventsByKeywordDocument = gql`
    query GetEventsByKeyword($keyword: String!) {
  getEventsByKeyword(keyword: $keyword) {
    ...EventData
  }
}
    ${EventDataFragmentDoc}`;

/**
 * __useGetEventsByKeywordQuery__
 *
 * To run a query within a React component, call `useGetEventsByKeywordQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventsByKeywordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventsByKeywordQuery({
 *   variables: {
 *      keyword: // value for 'keyword'
 *   },
 * });
 */
export function useGetEventsByKeywordQuery(baseOptions: Apollo.QueryHookOptions<GetEventsByKeywordQuery, GetEventsByKeywordQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventsByKeywordQuery, GetEventsByKeywordQueryVariables>(GetEventsByKeywordDocument, options);
      }
export function useGetEventsByKeywordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventsByKeywordQuery, GetEventsByKeywordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventsByKeywordQuery, GetEventsByKeywordQueryVariables>(GetEventsByKeywordDocument, options);
        }
export type GetEventsByKeywordQueryHookResult = ReturnType<typeof useGetEventsByKeywordQuery>;
export type GetEventsByKeywordLazyQueryHookResult = ReturnType<typeof useGetEventsByKeywordLazyQuery>;
export type GetEventsByKeywordQueryResult = Apollo.QueryResult<GetEventsByKeywordQuery, GetEventsByKeywordQueryVariables>;
export const GetLimitedEventsDocument = gql`
    query GetLimitedEvents($take: Int!) {
  getLimitedEvents(take: $take) {
    ...EventData
  }
}
    ${EventDataFragmentDoc}`;

/**
 * __useGetLimitedEventsQuery__
 *
 * To run a query within a React component, call `useGetLimitedEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLimitedEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLimitedEventsQuery({
 *   variables: {
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetLimitedEventsQuery(baseOptions: Apollo.QueryHookOptions<GetLimitedEventsQuery, GetLimitedEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLimitedEventsQuery, GetLimitedEventsQueryVariables>(GetLimitedEventsDocument, options);
      }
export function useGetLimitedEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLimitedEventsQuery, GetLimitedEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLimitedEventsQuery, GetLimitedEventsQueryVariables>(GetLimitedEventsDocument, options);
        }
export type GetLimitedEventsQueryHookResult = ReturnType<typeof useGetLimitedEventsQuery>;
export type GetLimitedEventsLazyQueryHookResult = ReturnType<typeof useGetLimitedEventsLazyQuery>;
export type GetLimitedEventsQueryResult = Apollo.QueryResult<GetLimitedEventsQuery, GetLimitedEventsQueryVariables>;
export const GetPaginatedEventsDocument = gql`
    query GetPaginatedEvents($take: Int, $page: Int) {
  getPaginatedEvents(take: $take, page: $page) {
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
 * __useGetPaginatedEventsQuery__
 *
 * To run a query within a React component, call `useGetPaginatedEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedEventsQuery({
 *   variables: {
 *      take: // value for 'take'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetPaginatedEventsQuery(baseOptions?: Apollo.QueryHookOptions<GetPaginatedEventsQuery, GetPaginatedEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedEventsQuery, GetPaginatedEventsQueryVariables>(GetPaginatedEventsDocument, options);
      }
export function useGetPaginatedEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedEventsQuery, GetPaginatedEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedEventsQuery, GetPaginatedEventsQueryVariables>(GetPaginatedEventsDocument, options);
        }
export type GetPaginatedEventsQueryHookResult = ReturnType<typeof useGetPaginatedEventsQuery>;
export type GetPaginatedEventsLazyQueryHookResult = ReturnType<typeof useGetPaginatedEventsLazyQuery>;
export type GetPaginatedEventsQueryResult = Apollo.QueryResult<GetPaginatedEventsQuery, GetPaginatedEventsQueryVariables>;