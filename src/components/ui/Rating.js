import React, {Component} from 'react';

class Rating extends Component {

    render() {
        const rating = this.props.rating * 20;
        return (
            <svg height="20" width="104" data-rating="1">
                <defs>
                    <clipPath id='star-mask' width='100%' height='100%'>
                        <polygon points="9.9, 1.1, 3.3, 20.0, 19.8, 8.4, 0.0, 8.4, 16.5, 20.0"/>
                        <polygon points="30.9, 1.1, 24.3, 20.0, 40.8, 8.4, 21.0, 8.4, 37.5, 20.0"/>
                        <polygon points="51.9, 1.1, 45.3, 20.0, 61.8, 8.4, 42.0, 8.4, 58.5, 20.0"/>
                        <polygon points="72.9, 1.1, 67.3, 20.0, 82.8, 8.4, 63.0, 8.4, 79.5, 20.0"/>
                        <polygon points="93.9, 1.1, 87.3, 20.0, 103.8, 8.4, 84.0, 8.4, 100.5, 20.0"/>
                    </clipPath>
                </defs>
                <rect className='rating-stars' width='100%' height='100%' clipPath='url(#star-mask)'/>
                <rect className='rating-stars __active' width={rating + '%'} height='100%' clipPath='url(#star-mask)'/>
            </svg>
        );
    }
}

export default Rating;