import {
    ADD_MOVIE,
    UPDATE_MOVIE,
    DELETE_MOVIE,
    SET_MOVIES,
    SET_MOVIES_PENDING,
    SET_MOVIES_FULFILLED,
    // OPEN_MODAL,
    // CLOSE_MODAL
} from './actions'

const initialState = {
    isLoaded:false,
    items:[],
    open:false
};

function moviesReducer(state = initialState, action) {

    let index = 0;
    let newitems = [];
    switch (action.type) {
        case ADD_MOVIE:
            newitems = [...state.items];
            newitems.push(action.payload);
            return {...state, items : newitems};

        case UPDATE_MOVIE:
            newitems = [...state.items];
            index = newitems.map(item => item.imdbID).indexOf(action.payload.imdbID);
            newitems[index] = action.payload;
            return {...state, items : newitems};

        case DELETE_MOVIE:
            newitems = [...state.items];
            index = newitems.map(item => item.imdbID).indexOf(action.payload);
            newitems.splice(index, 1);
            return {...state, items : newitems};

        // case SET_MOVIES:
        // console.log("test");
        // return "test";

        // case SET_MOVIES_PENDING:
        // console.log("pending");
        // return "test";
        
        case SET_MOVIES_FULFILLED:
            
            newitems = [...action.payload];            
            return {...state, items : newitems};

        default:
            return state
    }
}

// function modalReducer(state = true, action) {

//     switch (action.type) {
        
//         case OPEN_MODAL:
//             return Object.assign({},state,{open : true});
//         case CLOSE_MODAL:
//             return Object.assign({},state,{open : false});
//         default:
//             return state
//     }
// }


export default moviesReducer