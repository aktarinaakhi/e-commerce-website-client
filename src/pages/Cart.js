import React from 'react';
import useCart from '../hooks/useCart';
import { addToDb } from '../utilities/fakeDb';

const Cart = ({ singleProduct, children }) => {
    const [cart, setCart] = useCart();

    const handleAddToCart = (product) => {
        const exist = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exist) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];

        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        //update local storage
        addToDb(product.key);
    }


    let total = 0;
    let shipping = 0;
    let totalBeforeTax = 0;
    let estimitedTax = 0;
    let taxTotal = 0;
    let totalQuantity = 0;

    for (const product of cart) {

        if (!product.quantity) {
            product.quantity = 1;
        }

        totalQuantity = totalQuantity + product.quantity;

        total = total + product.price * product.quantity;
        shipping = total * 0.1;
        totalBeforeTax = total + shipping;
        estimitedTax = totalBeforeTax * 0.1;
        taxTotal = totalBeforeTax + estimitedTax;


    }

    return (
        <div>
            <h2 className='text-2xl'>Order summery</h2>

            <div>
                <p className="my-3 text-orange-600">BDT <span className="text-2xl ">{singleProduct?.price}</span></p>
                <p>Items Ordered : {totalQuantity}</p>
                <div className="order-tax">
                    <p><small>Items : ${total.toFixed(2)}</small></p>
                    <p><small>Shipping & Handling : $ {shipping.toFixed(2)}</small></p>
                    <p><small>Total before tax  : $ {totalBeforeTax.toFixed(2)}</small></p>
                    <p><small>Estimited tax : $ {estimitedTax.toFixed(2)}</small></p>
                    <h4> Total order : $ {taxTotal.toFixed(2)}</h4>
                </div>
                <div className='my-5'>
                    
                    {children}

                </div>
                <button class="bg-orange-500 hover:bg-orange-700 font-semibold py-2 px-20 rounded-full">
                    Add to cart
                </button>

            </div>
        </div>
    );
};

export default Cart;