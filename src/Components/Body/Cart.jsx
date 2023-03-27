import React from 'react';

const Cart = (props) => {
    const {name,price} = props.cartData;
    return (
        <table className='table-auto text-left w-full'>
            <tbody>
                <tr>
                    <td>{name.length > 10 ? name.slice(0,15):name}</td>
                    <td className='text-right'>${price}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Cart;