const UserReducer = (state, action) => {
    switch (action.type) {
        case "GET_USERS_START":
            return {
                users: [],
                isFetching: true,
                error: false,
            };
        case "GET_USERS_SUCCESS":
            return {
                users: action.payload,
                isFetching: false,
                error: false,
            };
        case "GET_USERS_FAILURE":
            return {
                users: [],
                isFetching: false,
                error: true,
            };
        case "GET_SINGLE_USER_START":
            return {
                user: null,
                isFetching: true,
                error: false,
            };
        case "GET_SINGLE_USER_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            };
        case "GET_SINGLE_USER_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: true,
            };
            // case "CREATE_MOVIE_START":
            //   return {
            //     ...state,
            //     isFetching: true,
            //     error: false,
            //   };
            // case "CREATE_MOVIE_SUCCESS":
            //   return {
            //     movies: [...state.movies, action.payload],
            //     isFetching: false,
            //     error: false,
            //   };
            // case "CREATE_MOVIE_FAILURE":
            //   return {
            //     ...state,
            //     isFetching: false,
            //     error: true,
            //   };
        case "UPDATE_USER_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "UPDATE_USER_SUCCESS":
            return {
                user: state.user._id === action.payload._id && action.payload,
                isFetching: false,
                error: false,
            };
        case "UPDATE_USER_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };
        case "DELETE_USER_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "DELETE_USER_SUCCESS":
            return {
                users: state.users.filter((user) => user._id !== action.payload),
                isFetching: false,
                error: false,
            };
        case "DELETE_USER_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };
        case "GET_ISBANGLA_LAN":
            return {
                ...state,
                isBangla: action.payload
            }
        default:
            return {...state };
    }
};

export default UserReducer;