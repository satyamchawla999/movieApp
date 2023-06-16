// import movies from "../reducers";


// action type
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';


// action creator
export function addMovies(movies) {
    return {
        type:'ADD_MOVIES',
        movies
    }
}

export function addFavourite(movie) {
    return {
        type:'ADD_FAVOURITE',
        movie
    }
}

export function removeFromFavourites(movie) {
    return {
        type:'REMOVE_FROM_FAVOURITES',
        movie
    }
}

export function setShowFavourites(val) {
    return {
        type:'SET_SHOW_FAVOURITES',
        val
    }
}

export function addMovieToList(movie) {
    return {
        type: ADD_MOVIE_TO_LIST,
        movie
    }
}

export function handleMovieSearch(movie) {
    console.log(movie);
    const url = `https://www.omdbapi.com/?apikey=d9fa4b84&t=${movie}`
    return function(dispatch) {
        fetch(url)
            .then(response => response.json())
            .then(movie=> {
                console.log('movie name = ',movie);
                dispatch(addMovieToSearchResult(movie));
            })
    }
}

export function addMovieToSearchResult(movie) {
    return {
        type: ADD_SEARCH_RESULT,
        movie
    }
}