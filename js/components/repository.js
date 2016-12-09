import React from 'react';

import StarRater from './star-rater';
/**
 * The Repository component displays the 
 * repository's name, and a StarRater component.
 */
export default class Repository extends React.Component {
    constructor(props) {
        super(props);
        this.changeRating = this.changeRating.bind(this);
    }

    changeRating(rating) {
        // TODO: Change the rating
        // this.props.dispatch(
        //     actions.rateRepository(this.props.repository.name, rating)
        // );
    }

    render() {
        return (
            <div className="repository">
                {this.props.repository.name}
                &nbsp;
                <StarRater rating={this.props.repository.rating}
                           onChange={this.changeRating} />
            </div>
        );
    }
}