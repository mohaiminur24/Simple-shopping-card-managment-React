import React, { useEffect, useState } from 'react';
import Product from './Product';
import Cart from './Cart';

const Body = () => {
    const [cartData, setCardData] = useState([]);
    const [product, setProduct] = useState([]);
    const [localdata, setLocaldata] = useState();
    useEffect(()=>{
        let localStorageData = localStorage.getItem('cart');
        localStorageData = JSON.parse(localStorageData);
        setLocaldata(localStorageData);
    },[cartData])
    useEffect(()=>{
        fetch('../../../public/products.json').then(res=>res.json()).then(data=>setProduct(data));
    },[])

    const totalMoney = localdata && localdata.reduce((previews, current)=>current.price+previews,0);

    const setdata = (data) =>{
        data && setCardData([...cartData,data]);
        const newdata = [...cartData,data];
        const newdatastring = JSON.stringify(newdata);

        if(localdata == null){
            const firstdata = JSON.stringify([data]);
            localStorage.setItem('cart',firstdata);
        }else{
            localStorage.setItem('cart',newdatastring);
        };
        
    };
    
    return (
        <div className='grid grid-cols-5 w-11/12 mx-auto gap-5 my-5'>
            <div className='col-span-4 grid grid-cols-3 gap-5'>{product && product.map(product => <Product funnctions={setdata} key={product.id} product={product}></Product>)}</div>



            <div className='border h-fit p-5 rounded-md'>
                <h1 className='text-center font-semibold text-sm border-b pb-2'>Your Cart Summary</h1>
                <div className='my-5'>
                    <h1 className='font-semibold border px-2 py-1 rounded-md mb-3 w-fit'>Total items: <span className='text-sm'>{localdata && localdata.length}</span></h1>

                    <div className='text-xs'>{localdata && localdata.map(data=> <Cart cartData={data}></Cart>)}</div>
                </div>

                <h1 className='border-t pt-2'>Total Price: ${totalMoney? totalMoney: 0}</h1>
            </div>
            
        </div>
    );
};

export default Body;