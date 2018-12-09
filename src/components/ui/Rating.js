import React, {Component} from 'react';

class Rating extends Component {

    render() {
        return (
            <div>
                {[...Array(this.props.rating)].map(() =>
                    <svg className="rating-star __active" height="20" width="23" data-rating="1">
                        <polygon points="9.9, 1.1, 3.3, 20, 19.8, 8.4, 0, 8.4, 16.5, 20"/>
                    </svg>
                )}
                {[...Array(5 - this.props.rating)].map(() =>
                    <svg className="rating-star" height="20" width="23" data-rating="1">
                        <polygon points="9.9, 1.1, 3.3, 20, 19.8, 8.4, 0, 8.4, 16.5, 20"/>
                    </svg>
                )}
            </div>
        );
    }
}

export default Rating;