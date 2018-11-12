

export const createUser = (userData) => ({
    type: "CREATE_USER",
    userData
})


export const updateUser = (id, updates) => ({
    type: "UPDATE_USER",
    id,
    updates
})

export const deleteUser = (id) => ({
    type: "DELETE_USER",
    id
})