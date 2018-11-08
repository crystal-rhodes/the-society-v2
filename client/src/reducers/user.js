const userReducerDefaultState = []

export default (state = userReducerDefaultState, action) => {
    switch (action.type) {
        case "CREATE_USER": {
            return [
                ...state,
                action.userData
            ]
        }
        case "DELETE_USER": {
            return state.filter(({id}) => id !== action.id)
        }
        case "UPDATE_USER": {
            state.map((user) => {
                if (id === action.id) {
                    return {
                        ...user,
                        ...action.userData
                    }
                } else {
                    return user;
                }
            })
        }
        default: {
            return state
        }
    }
}