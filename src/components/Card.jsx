import React from 'react';
const Card = props => (
    <div className='card'>
        <div>
            <img className={props.name} src={props.img} alt={props.name} />
        </div>
        <div>
            <p className='name'> {props.name} </p>
            <span className='partNumber'> PartNo: <span className='number'> {props.number} </span></span>
            <p className='price'> ${props.price} </p>
            <div className='addToCartButton' onClick={() => console.log({'partNo':props.number, 'price':props.price})}>Add to cart</div>
        </div>
        <div className='break'> 
            &nbsp;
        </div>
    </div>
);
export default Card