import React from 'react';

const Header = () => {
    return (
        <div className='bg-black h-16 items-center flex'>
            <div className='w-4/5 mx-auto flex justify-between items-center'>
                <img className='w-28' src="../../public/images/Logo.svg" alt="" />
                <ul className='flex text-white gap-10'>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/cart">Cart</a></li>
                    <li><a href="/invoice">Invoice</a></li>
                    <li><a href="/about">About us</a></li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;