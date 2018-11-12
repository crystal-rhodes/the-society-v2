import {
  ApolloClient
} from 'apollo-client';
import {
  createHttpLink
} from 'apollo-link-http';
import {
  setContext
} from 'apollo-link-context';
import {
  InMemoryCache
} from 'apollo-cache-inmemory';
import { AUTH_TOKEN } from './constants'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/'
})

const authLink = setContext((_, {
  headers
}) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export default new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
