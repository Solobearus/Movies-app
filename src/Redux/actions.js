
/*
 * action types
 */

export const ADD_MOVIE = 'ADD_MOVIE'
export const UPDATE_MOVIE = 'UPDATE_MOVIE'
export const DELETE_MOVIE = 'DELETE_MOVIE'
export const INIT_MOVIES = 'SET_MOVIES'

/*
 * action creators
 */

export function addMovie(payload) {
    return { type: ADD_MOVIE, payload }
};

export function updateMovie(payload) {
    return { type: UPDATE_MOVIE, payload }
};

export function deleteMovie(payload) {
    return { type: DELETE_MOVIE, payload }
};

export function initMovies() {
    return dispatch => {
        fetchMovies(dispatch)
    }
};

const fetchMovies = (dispatch) => {
    let key = '887c425e';
    let search = 'war';
    let page = 1;

    fetch(`http://www.omdbapi.com/?apikey=${key}&s=${search}&page=${page}`)
        .then(res => res.json())
        .then(
            (results) => {
                let promises = [];

                //Unfortunatly I could not find any API that could fetch all requested data in one API call.
                //So my solution was to run a API call for every movie the fetch got me and get all data for every movie in the list.
                results.Search.map((result) => {
                    promises.push(fetch(`http://www.omdbapi.com/?i=${result.imdbID}&apikey=${key}`));
                });

                Promise.all(promises).then((values) => {
                    let movies = [];

                    // Retrieve its body as ReadableStream
                    console.log("values");
                    let readerPromises = [];

                    // for every value in values we have to read the stream of it.
                    values.map((value) => {
                        const reader = value.body.getReader();

                        // Read every stream and update the final
                        readerPromises.push(reader.read().then(function processText({ done, value }) {

                            // if done end the read 
                            if (done) {
                                console.log("Stream complete");
                                return;
                            }

                            var stringValue = new TextDecoder("utf-8").decode(value);
                            let parsedText = JSON.parse(stringValue);
                            movies.push(parsedText);

                            //read next block in the stram.
                            return reader.read().then(processText);
                        }))
                    })

                    // this waits for all stream reads to finish before updating items in state. 
                    Promise.all(readerPromises).then(() => {
                        dispatch({
                            type: INIT_MOVIES,
                            payload: movies
                        });
                    });
                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
};