import {
  ApolloClient,
  ApolloLink
} from 'apollo-boost';
import {
  createHttpLink
} from 'apollo-link-http';
import {
  setContext
} from 'apollo-link-context';
import {
  InMemoryCache
} from 'apollo-cache-inmemory';
import {
  AUTH_TOKEN
} from './constants'
import {
  withClientState
} from 'apollo-link-state'
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/'
})

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/`,
  options: {
    reconnect: true
  },
});

const cache = new InMemoryCache();

const defaultState = {
  currentPostList: []
}

const stateLink = withClientState({
  cache,
  defaults: defaultState,
  resolvers: {
      Mutation: {
        updatePostList: (_, {index, value}, {cache}) => {
          console.log(index, value)
        }
      }
  }
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

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  authLink.concat(httpLink),
);

export default new ApolloClient({
  link,
  cache
});
