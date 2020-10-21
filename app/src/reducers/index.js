const initialState = {
    articles: [],
    isLoading: false,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_ARTICLES_START":
            return {
                ...state,
                isLoading: true
            }

        case "FETCHING_ARTICLES_SUCCESS":
            return {
                ...state,
                articles: action.payload,
                isLoading: false
            }

        case "FETCHING_ARTICLES_FAILURE":
            return {
                ...state,
                isLoading: false
            }

        default:
            return state;
    }
}