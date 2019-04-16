
import {
    ADD_MOVIE,
    UPDATE_MOVIE,
    DELETE_MOVIE,
    INIT_MOVIES,
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

        case INIT_MOVIES:
            return {...state, items : action.payload};

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