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
            id
            name
        }
        
        comments {
            id
            text
            author {
                id
                name
            }
            post {
                author {
                    id
                }
            }
            createdAt
        }

        published
        createdAt
        }
    }
`

export const getComments = gql `
    query comments {
        comments {
            id
            text
            author {
                id
                name
            }
            post {
                id
            }
            createdAt
        }
    }
`
export const getPost =  gql `
    query post($id: ID!) {
        post(id: $id) {
            id
            title
            body
            comments {
                id
                text
            }
        }
    }
`

export const getComment =  gql `
    query comment($id: ID!) {
        comment(id: $id) {
            id
            text
        }
    }
`