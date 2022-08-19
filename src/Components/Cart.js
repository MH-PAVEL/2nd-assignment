import React from 'react';
import { useSelector } from 'react-redux';
import CartQuantity from './CartQuantity';

function Cart() {
    const state = useSelector(state => state);

    const itemNum = state.reduce(
        (previousValue, currentValue) => previousValue + currentValue.qty, 0);
    const priceSum = state.reduce(
        (previousValue, currentValue) => previousValue + currentValue.price * currentValue.qty, 0);

    return (
        <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                <CartQuantity />

                {/* Total item section  */}
                <div className="flex justify-center items-center text-center">
                    <div className="text-xl font-semibold">
                        <p>Total Item</p>
                        <p className="text-5xl">{itemNum}</p>
                    </div>
                </div>
            </div>

            {/* total price section  */}
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                <div className="flex justify-center items-center text-center">
                    <div className="text-xl font-semibold">
                        <p>Total Price</p>
                        <p className="text-5xl">{priceSum}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart