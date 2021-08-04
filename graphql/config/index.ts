

import { API } from "../../config/env";
import * as Apollo from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const link = Apollo.createHttpLink({
    uri: `${API}/graphql`
});

export const setHeaders = (token: string) => {

  return setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });
}

export const authConfig = (token: string) => {

  return {
    cache: new Apollo.InMemoryCache(),
    link: setHeaders(token).concat(link),
    credentials: 'include'
  }
}