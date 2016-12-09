import React from 'react';
import {connect} from 'react-redux';
import Repository from './repository';
import * as actions from '../actions/index';

/**
 * The RepositoryList component displays a list 
 * of Repository components, and has a text input 
 * for adding new repositories.
 */
export class RepositoryList extends React.Component {
    
    constructor(props) {
        super(props);
        this.addRepository = this.addRepository.bind(this);
    }

    addRepository() {
        const repositoryName = this.repositoryNameInput.value;
        this.props.dispatch(actions.addRepository(repositoryName));
    }

    render() {
        /**
         * The repositories prop should contain 
         * the array of repositories which is 
         * the entire state.
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

const mapStateToProps = (state, props) => ({
    repositories: state
});

export default connect(mapStateToProps)(RepositoryList);