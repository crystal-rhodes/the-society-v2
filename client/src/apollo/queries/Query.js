
import gql from 'graphql-tag'

export const getUsers = gql `
    query {
        users {
            id
            name
            email
            gender
            birthDate
            createdAt
        }
    }
`

export const getMe = gql `
    query me {
        me {
            id
            name
            email
            gender
            birthDate
        }
    }
`

export const MyPosts = gql `
    query myPosts {
        myPosts {
        id
        title
        body
        published
        createdAt
        }
    }
`

export const getPosts = gql `
    query posts {
        posts {
        id
        title
        body
        author {
            name
        }
        published
        createdAt
        }
    }
`