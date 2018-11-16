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
import {
  WebSocketLink
} from 'apollo-link-ws'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/'
})

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

export default new ApolloClient({
  link: ApolloLink.from([
    stateLink,
    authLink.concat(httpLink)
  ]),
  cache
});
