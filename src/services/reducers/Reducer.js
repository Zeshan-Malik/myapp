import { ADD_TO_CART,
         FETCH_API,
        REMOVE_FROM_CART,
        HACKER_NEWS, 
        FETCH_IMAGES,
        REMOVE_IMAGE } from "../Constants";
        
export default function cardItem(state = [], action) {
        switch (action.type) {
                case ADD_TO_CART:
                        return ([...state,
                        { cardData: action.data }])

                case REMOVE_FROM_CART:
                        state.pop()
                        return ([...state])
                                ;
                default:
                        return state
        }
}
export function apiData(state = [], action) {
        switch (action.type) {
                case FETCH_API:
                        return (
                                { ...state, data: action.data }

                        )
                default:
                        return state
        }

}
export function hackerNewsData(state = [], action) {
        switch (action.type) {
                case HACKER_NEWS:
                        return (
                                [...state, { data: action.data }]
                        )
                default:
                        return state
        }
}

export function imagesData(state = [], action) {
        switch (action.type) {
                case FETCH_IMAGES:
                        return (
                                { ...state, data: action.data.message }

                        )
                case REMOVE_IMAGE:
                        return(
                                {...state, data:action.data}
                        )
                default:
                        return state
        }

}
