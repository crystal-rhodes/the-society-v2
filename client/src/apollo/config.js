import ApolloBoost from 'apollo-boost';

const client = new ApolloBoost({
  uri: 'http://localhost:4000/',

});

export default client;