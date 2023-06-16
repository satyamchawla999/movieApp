import { combineReducers } from 'redux'
import {ADD_MOVIES ,ADD_FAVOURITE,REMOVE_FROM_FAVOURITES,SET_SHOW_FAVOURITES,ADD_MOVIE_TO_LIST, ADD_SEARCH_RESULT} from '../actions'

const initialMovieState = {
    list :[],
    favourities:[],
    showFavourites:false,
}

export function movies (state = initialMovieState,action) {

    switch (action.type) {
        case ADD_MOVIES :
            return {
                ...state,
                list:action.movies
            }
        
        case ADD_FAVOURITE:
            return{
                ...state,
                favourities:[action.movie,...state.favourities]
            }
        
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourities.filter (
                movie => movie.Title!==action.movie.Title
                )
            return{
                ...state,
                favourities:filteredArray
            }

        case SET_SHOW_FAVOURITES:
            state.showFavourite = !state.showFavourite;
            return {
                ...state,
                showFavourites:action.val
            }

        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list:[action.movie,...state.list]
            }

        default:
            return state;
    }
}

const initialSearchState = {
    result:{},
    showSearchResults:false
}

export function search (state = initialSearchState,action) {
    switch(action.type) {
        case ADD_SEARCH_RESULT :
            return {
                ...state,
                result: action.movie,
                showSearchResults:true
            }

        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                showSearchResults:false
            }
        default:
            return state;
    }
}

// const initialRootState = {
//     movies:initialMovieState,
//     search:initialSearchState
// }

// export default function rootReducer (state=initialRootState,action) {
//     return {
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }

export default combineReducers ({
    movies,
    search
})



