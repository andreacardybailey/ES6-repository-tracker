import * as actions from '../actions/index';
import store from '../store';

// Array of empty repositories
const initialRepositoryState = [];

export const repositoryReducer = (state=initialRepositoryState, action) => {
    state = state || initialRepositoryState;
    if (action.type === actions.ADD_REPOSITORY) {
        /** 
         * Notice how we don't use push here; 
         * Just as in a standard React application you
         * should never mutate the state. 
         * Instead you return a new object containing the 
         * new state from the reducer. 
         */
        return [...state, {
            name: action.repository,
            rating: null
        }];
    }
    else if (action.type === actions.RATE_REPOSITORY) {
        // Find the index of the matching repository
        const index = state.findIndex(repository =>
            repository.name === action.repository
        );
        if (index === -1) {
            throw new Error('Could not find repository');
        }
        /**
         * Copy the repositories in the positions 
         * before and after the one you are changing
         */
        const before = state.slice(0, index);
        const after = state.slice(index + 1);
        /** 
         * Find the matching repository and create a
         * clone of it, adding in the new rating. 
         */
        const newRepository = Object.assign({}, state[index], {rating: action.rating});
        return [...before, newRepository, ...after];
    }
    
    return state;
};
