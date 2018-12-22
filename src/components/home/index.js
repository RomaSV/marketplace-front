import React, {Component} from 'react';
import ProductCard from "./ProductCard";
import ServerMock from "../ServerMock";
import {getRecommendations} from "../../util/APIUtils";

class Home extends Component {

    state = {
        products: [],
        last: true,
        isLoading: false
    };

    loadRecommendations = (page = 0, size = 20) => {
        let promise = getRecommendations(this.props.uid, page, size);

        if (!promise) {
            return;
        }

        this.setState({
            isLoading: true
        });

        promise.then(response => {
            this.setState({
                products: response,
                isLoading: false
            });
            console.log(this.state.products)
        }).catch(error => {
            this.setState({
                products: ServerMock.recommendations,
                isLoading: false
            });
            console.log('error while getting rec')
        });
    };

    componentWillMount() {
        this.loadRecommendations();
    }


    render() {

        const products = this.state.products.map(product =>
            <ProductCard key={product.id} data={product}/>
        );

        return (
            <div>
                <div className='recommendations'>
                    <div className='recommendations-section_header'>
                        You might be interested in:
                    </div>
                    {products}
                </div>
                <div className='project-info'>
                </div>
            </div>
        );
    }
}

export default Home;