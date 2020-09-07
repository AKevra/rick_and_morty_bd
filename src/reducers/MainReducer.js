import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    characters: [],
    paginator: {
      prevPageUrl: null,
      nextPageUrl: null,
      currentPage: null,
      pageCount: null,
    }
}

function MaintReducer(state = initialState, action) {
    switch (action.type) {
      case 'IS_CHARACTERS':
        return {
          ...state, 
          characters: action.payload.characters, 
          paginator: action.payload.paginator,
        }
      default:
        return state
    }
}

let store = createStore(MaintReducer, applyMiddleware(thunk));

export default store;