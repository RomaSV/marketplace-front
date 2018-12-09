import React, {Component} from 'react';
import Rating from "../ui/Rating";

class ProductCard extends Component {
    render() {
        return (
            <div className='product-card'>
                <div className='product-card_img-w'>
                    <img className='product-card_img' src={this.props.data.img} alt='product'/>
                </div>
                <div className='product-card_features'>
                    <div className='product-card_price'>
                        {this.props.data.price}
                    </div>
                    <div className='product-card_rating'>
                        <Rating rating={this.props.data.rating}/>
                    </div>
                </div>
                <div className='product-card_name'>
                    {this.props.data.title}
                </div>
            </div>
        );
    }
}

export default ProductCard;