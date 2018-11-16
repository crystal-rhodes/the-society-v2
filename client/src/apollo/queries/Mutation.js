import {
  gql
} from 'apollo-boost'

export const createUserMutation = gql `
    mutation createUser($data: CreateUserInput!) {
        createUser(data: $data) {
        user {
            id
            name
            password
            birthDate
        }
        token
        }
    }
`

export const deleteUserMutation = gql `
    mutation deleteUser {
        deleteUser {
        id
        name
        } 
    }
`

export const loginMutation = gql `
mutation login($data: LoginUserInput!) {
    login(data: $data) {
        user {
        name
        id
        }
        token
    }
    }
` 

export const updateUserMutation = gql `
mutation updateUser($data: UpdateUserInput!) {
  updateUser(data: $data) {
    id
    password
    name
    email
  }
}

`

export const updatePostMutation = gql`
    mutation($id: ID!, $data: UpdatePostInput!) {
        updatePost(
            id: $id,
            data: $data
        ){
            id
            title
            body
            published
        }
    }
`

export const createPostMutation = gql`
    mutation($data: CreatePostInput!) {
        createPost(
            data: $data
        ){
            id
            title
            body
            published
        }
    }
`

export const createCommentMutation = gql`
    mutation createCommentMutation($data: CreateCommentInput!) {
  	createComment(data: $data) {
    id
    post {
      id
    }
    author {
      id
    }
    createdAt
  }
}
`

export const deletePostMutation = gql`
    mutation($id: ID!) {
        deletePost(
            id: $id
        ) {
            id
        }
    }
`

export const deleteCommentMutation = gql`
    mutation deleteCommentMutation($id: ID!) {
        deleteComment(
            id: $id
        ) {
            id
        	text
        }
    }
`

export const updateCommentMutation = gql`
    mutation($id: ID!, $data: UpdateCommentInput!) {
        updateComment(
            id: $id,
            data: $data
        ){
            id
            text
        }
    }
`