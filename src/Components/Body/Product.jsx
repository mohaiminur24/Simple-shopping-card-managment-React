import React from 'react';

const Product = (props) => {
    const singledata = props.funnctions;
    const {img,name,price,ratingsCount,seller,shipping,stock} = props.product;
    return (
        <div className='border p-5 rounded-md shadow-sm relative'>
            <img className='w-full h-64' src={img && img} alt=""/>
            <h1 className='my-2 font-bold text-lg'>{name && name}</h1>
            <h1 className='font-semibold'>Seller name: <span className='text-sm font-normal'>{seller}</span></h1>
            <p className='font-semibold'>Price: <span className='text-sm font-normal'>${price}</span></p>
            <p className='font-semibold'>Total Rating: <span className='text-sm font-normal'>{ratingsCount}</span></p>
            <p className='font-semibold mb-10'>InStock: <span className='text-sm font-normal'>{stock}</span></p>

            <button onClick={()=>singledata(props.product)} className='w-full text-center border-b-2 text-white text-sm py-3 absolute bottom-0 left-0 right-0 rounded-b-md bg-yellow-500'>Add to cart</button>
            
        </div>
    );
};

export default Product;