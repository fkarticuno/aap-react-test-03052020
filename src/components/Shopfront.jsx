import React, {Component} from 'react';
import products from '../../src/products.json';
import Card from './Card'
import '../index.css'
class Shopfront extends Component {
    render() {
        return (
            <>  
            <div>
                {products.map (item => (
                    <Card
                    key = {item.number}
                    img = {item.img}
                    name = {item.name}
                    number = {item.number}
                    price = {item.pricing}
                    />
                ))}
            </div>
            </>
        )
    }
}
export default Shopfront