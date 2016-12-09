// require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';

import RepositoryList from './components/repository-list';
/** 
 * renders repository list into 
 * a <div> with an id of app 
*/
document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<RepositoryList />, document.getElementById('app'))
);

