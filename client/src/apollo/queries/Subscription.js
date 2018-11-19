import {
    gql
  } from 'apollo-boost'

const subscribeToComments = gql`
    subscription($postId: ID!) {
        comment(postId: $postId) {
            mutation
            node {
                id
                text
            }
        }
    }
`

export {
    subscribeToComments
}