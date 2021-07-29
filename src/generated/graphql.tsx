import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};


export type Message = {
  __typename?: 'Message';
  id: Scalars['Float'];
  text: Scalars['String'];
  createdDate: Scalars['DateTime'];
  user: User;
  room: Room;
};

export type Mutation = {
  __typename?: 'Mutation';
  register: Scalars['Boolean'];
  login: ResLoginUser;
  userToRoom: Scalars['Boolean'];
  createRoom: Scalars['Boolean'];
  createMessage: ResNewMessage;
};


export type MutationRegisterArgs = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  userName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  userName: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUserToRoomArgs = {
  roomId: Scalars['Float'];
  uuid: Scalars['String'];
};


export type MutationCreateRoomArgs = {
  description: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreateMessageArgs = {
  text: Scalars['String'];
  roomId: Scalars['Int'];
  uuid: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  findAllWithRooms: Array<User>;
  findAllUsers: Array<User>;
  pingRoom: Scalars['String'];
  findAllRooms: Array<Room>;
  findMessagesByRoomId: Array<Message>;
  Ping: Scalars['String'];
  findMessagesWithRelations: Array<Message>;
  findMessgesByRoomId: Array<Room>;
};


export type QueryFindMessagesByRoomIdArgs = {
  roomId: Scalars['Float'];
};


export type QueryFindMessgesByRoomIdArgs = {
  roomId: Scalars['Float'];
};

export type ResLoginI = {
  __typename?: 'ResLoginI';
  token: Scalars['String'];
  userData: UserDataI;
};

export type ResNewMessage = {
  __typename?: 'ResNewMessage';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  data: Array<Message>;
};

export type Room = {
  __typename?: 'Room';
  id: Scalars['Float'];
  name: Scalars['String'];
  description: Scalars['String'];
  users: Array<User>;
  messages: Array<Message>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  uuid: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  userName: Scalars['String'];
  createdDate: Scalars['DateTime'];
  messages: Array<Message>;
  room: Room;
};

export type UserDataI = {
  __typename?: 'UserDataI';
  userName: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  uuid: Scalars['String'];
};

export type ResLoginUser = {
  __typename?: 'resLoginUser';
  data: ResLoginI;
};

export type LoginMutationVariables = Exact<{
  userName: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'resLoginUser' }
    & { data: (
      { __typename?: 'ResLoginI' }
      & Pick<ResLoginI, 'token'>
    ) }
  ) }
);

export type FindAllRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllRoomsQuery = (
  { __typename?: 'Query' }
  & { findAllRooms: Array<(
    { __typename?: 'Room' }
    & Pick<Room, 'name'>
  )> }
);


export const LoginDocument = gql`
    mutation Login($userName: String!, $password: String!) {
  login(userName: $userName, password: $password) {
    data {
      token
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      userName: // value for 'userName'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const FindAllRoomsDocument = gql`
    query findAllRooms {
  findAllRooms {
    name
  }
}
    `;

/**
 * __useFindAllRoomsQuery__
 *
 * To run a query within a React component, call `useFindAllRoomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllRoomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllRoomsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllRoomsQuery(baseOptions?: Apollo.QueryHookOptions<FindAllRoomsQuery, FindAllRoomsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllRoomsQuery, FindAllRoomsQueryVariables>(FindAllRoomsDocument, options);
      }
export function useFindAllRoomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllRoomsQuery, FindAllRoomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllRoomsQuery, FindAllRoomsQueryVariables>(FindAllRoomsDocument, options);
        }
export type FindAllRoomsQueryHookResult = ReturnType<typeof useFindAllRoomsQuery>;
export type FindAllRoomsLazyQueryHookResult = ReturnType<typeof useFindAllRoomsLazyQuery>;
export type FindAllRoomsQueryResult = Apollo.QueryResult<FindAllRoomsQuery, FindAllRoomsQueryVariables>;