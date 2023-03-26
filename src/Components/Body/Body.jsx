import React, { useEffect, useState } from 'react';
import Product from './Product';

const Body = () => {
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        fetch('../../../public/products.json').then(res=>res.json()).then(data=>setProduct(data));
    },[])
    return (
        <div className='grid grid-cols-5 w-11/12 mx-auto gap-5 my-5'>
            <div className='col-span-4 grid grid-cols-3 gap-5'>{product && product.map(product => <Product product={product}></Product>)}</div>
            <div className='border h-fit p-5 rounded-md'>Cart is here</div>
            
        </div>
    );
};

export default Body;