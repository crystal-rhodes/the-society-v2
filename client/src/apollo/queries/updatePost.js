import gql from 'graphql-tag'


const getCurrentPostList = gql `
    query {
        currentPostList @client {
            currentPostList
        }
    }
`

const updatePostList = gql `
    mutation updatePostList($index: String!, $value: String!) {
        updatePostList(index: $index, value: $value) {
            currentPostList
        }
    }
`

export { updatePostList, getCurrentPostList }