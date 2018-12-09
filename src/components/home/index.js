import React, {Component} from 'react';
import ProductCard from "./ProductCard";
import ServerMock from "../ServerMock";

class Home extends Component {
    render() {

        const products = ServerMock.recommendations.map(product =>
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