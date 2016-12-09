import React from 'react';
import {connect} from 'react-redux';
import Repository from './repository';
import actions from '../actions/index';

// import React from 'react';

// import Repository from './repository';

/**
 * The RepositoryList component displays a list 
 * of Repository components, and has a text input 
 * for adding new repositories.
 */
export default class RepositoryList extends React.Component {
    constructor(props) {
        super(props);
        this.addRepository = this.addRepository.bind(this);
    }

    addRepository() {
        const repositoryName = this.refs.repositoryNameInput.value;
        this.props.dispatch(actions.addRepository(repositoryName));
        
    }

    render() {
        /**
         * The repositories prop should contain 
         * the array of repositories which is 
         * the entire state.
         */
        
        console.log(this);
        /**
         * the following block is from React V2 2.1.3 
         * and is throwing an error because there is no 
         * repositories prop on 'this'
         */

        const repositories = this.props.repositories.map(function(repository) {
            return <Repository repository={repository} key={repository.name} />;
        });

        return (
            <div className="repository-list">
                {repositories}
                <input type="text" ref={ref => this.repositoryNameInput = ref} />
                <button type="button" onClick={this.addRepository}>
                    Add repository
                </button>
            </div>
        );
    }
}