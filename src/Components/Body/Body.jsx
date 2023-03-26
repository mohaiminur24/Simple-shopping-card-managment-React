import React, { useEffect, useState } from 'react';
import Product from './Product';
import Cart from './Cart';

const Body = () => {
    const [cartData, setCardData] = useState([]);
    const [product, setProduct] = useState([]);
    const [localdata, setLocaldata] = useState([]);
    useEffect(()=>{
        let localStorageData = localStorage.getItem('cart');
        localStorageData = JSON.parse(localStorageData);
        setLocaldata(localStorageData);
    },[cartData])
    useEffect(()=>{
        fetch('../../../public/products.json').then(res=>res.json()).then(data=>setProduct(data));
    },[])

    const setdata = (data) =>{
        data && setCardData([...cartData,data]);
        let cart = [];
        const cartloacal = localStorage.getItem('cart');
        if(cartloacal){
            const cartstring = JSON.stringify(cartData);
            localStorage.setItem('cart',cartstring);
            
        }else{
            const cartstring = JSON.stringify(cart);
            localStorage.setItem('cart',cartstring);
        };

    };

    console.log(localdata)
    
    return (
        <div className='grid grid-cols-5 w-11/12 mx-auto gap-5 my-5'>
            <div className='col-span-4 grid grid-cols-3 gap-5'>{product && product.map(product => <Product funnctions={setdata} key={product.id} product={product}></Product>)}</div>



            <div className='border h-fit p-5 rounded-md'>
                <h1 className='text-center font-semibold text-sm border-b pb-2'>Your Cart Summary</h1>
                <div className='my-5'>
                    <h1 className='font-semibold'>Total items: <span className='text-sm'>{cartData.length}</span></h1>

                    <div className='text-xs'>{localdata && localdata.map(data=> <Cart cartData={data}></Cart>)}</div>
                </div>
            </div>
            
        </div>
    );
};

export default Body;