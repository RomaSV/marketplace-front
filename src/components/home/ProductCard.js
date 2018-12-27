import React, {Component} from 'react';
import Rating from "../ui/Rating";
import {Link} from "react-router-dom";

class ProductCard extends Component {
    render() {
        let title = this.props.data.title;
        if (title.length > 65) {
            title = title.substr(0, 65).replace(/ [A-Za-z]+$/g, '...')
        }
        return (
            <Link to={"/products/" + this.props.data.id}>
            <div className='product-card'>
                <div className='product-card_img-w'>
                    <img className='product-card_img' src={this.props.data.imageUrl} alt='product'/>
                </div>
                <div className='product-card_features'>
                    <div className='product-card_price'>
                        {this.props.data.cost + '$'}
                    </div>
                    <div className='product-card_rating'>
                        <Rating rating={this.props.data.rating}/>
                    </div>
                </div>
                <div className='product-card_name'>
                    {title}
                </div>
            </div>
            </Link>
        );
    }
}

export default ProductCard;