import React, {Component} from 'react';
import ServerMock from "../ServerMock";
import Rating from "../ui/Rating";
import {getProduct, getRecommendations} from "../../util/APIUtils";

class ProductPage extends Component {

    state = {
        product: {},
        isLoading: false
    };

    loadProduct = () => {
        let promise = getProduct(this.props.match.params.id);

        if (!promise) {
            return;
        }

        this.setState({
            isLoading: true
        });

        promise.then(response => {
            this.setState({
                product: response,
                isLoading: false
            });
            console.log(this.state.products)
        }).catch(error => {
            this.setState({
                product: ServerMock.recommendations.find(
                    product => product.id.toString() === this.props.match.params.id
                ),
                isLoading: false
            });
            console.log('error while getting prod')
        });


    };


    componentWillMount() {
        this.loadProduct();
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div>Loading...</div>
            )
        }
        const prod = this.state.product;
        console.log(prod);
        const props = prod.description.split(';\n');
        return (
            <div className='product-details'>
                <div className='product-details_title'>
                    {prod.title}
                </div>
                <div className='product-details_content'>
                    <div className='product-details_img-section'>
                        <img className='product-details_img-section_img' src={prod.imageUrl} alt='product'/>
                    </div>
                    <div className='product-details_info-section'>
                        <div className='product-details_info-section_price'>
                            <div className='product-details_info-section_price_label'>
                                Our price:
                            </div>
                            <div className='product-details_info-section_price_value'>
                                {prod.cost}
                            </div>
                        </div>
                        <div className='product-details_info-section_rating'>
                            <div className='product-details_info-section_rating_label'>
                                Average rating:
                            </div>
                            <div className='product-details_info-section_rating_stars'>
                                <Rating rating={4}/>
                            </div>
                        </div>
                        <div className='product-details_info-section_props'>
                            <div className='product-details_info-section_props_label'>
                                Description:
                            </div>
                            <div className='product-details_info-section_props_value'>
                                <ul>
                                    {props.slice(0, props.length - 2).map(prop => <li>{prop}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ProductPage;