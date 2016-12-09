import React from 'react';
/** 
 * This displays five star icons 
 * (using FontAwesome), and allows 
 * you to click on them to call the 
 * onChange callback with the new rating.
 */
function StarRater(props) {

    const stars = [];
    
    for (let i=0; i<5; i++) {
        let className;
        if (i < this.props.rating) {
            className = 'fa fa-star';
        }
        else {
            className = 'fa fa-star-o';
        }
        const star = (
            <i className={className} key={i}
               onClick={this.props.onChange.bind(null, i + 1)}>
            </i>
        );
        stars.push(star);
    }

    return (
        <span className="star-rater">
            {stars}
        </span>
    );
}

StarRater.defaultProps = {
    rating: 0
};