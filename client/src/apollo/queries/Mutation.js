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
        }
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

