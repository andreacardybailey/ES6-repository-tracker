// var redux = require('redux');
// var createStore = redux.createStore;
// var reducers = require('./reducers/index');
// *
//  * create a store using the createStore method, 
//  * telling it to use the repositoryReducer to  
//  * handle any actions which are dispatched
 
// var store = createStore(reducers.repositoryReducer);

// import Redux from 'redux';
import {createStore} from 'redux';
import * as reducers from './reducers/index';

/**
 * create a store using the createStore method, 
 * telling it to use the repositoryReducer to  
 * handle any actions which are dispatched
 */
export default createStore(reducers.repositoryReducer);