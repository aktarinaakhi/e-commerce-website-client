import React from 'react';


const Cart = ({ singleProduct, children }) => {


    let total = 0;
    let shipping = 0;
    let totalBeforeTax = 0;
    let estimitedTax = 0;
    let taxTotal = 0;

    total = Number(total + singleProduct?.price);
    shipping = Number(total * 0.1);
    totalBeforeTax = Number(total + shipping)
    estimitedTax = Number(totalBeforeTax * 0.1);
    taxTotal = Number(estimitedTax + totalBeforeTax);



    return (
        <div>
            <h2 className='text-2xl'>Order summery</h2>

            <div>
                <p className="my-3 text-orange-600">BDT <span className="text-2xl ">{singleProduct?.price}</span></p>
                <div>
                    <p className='my-2'> Items :  {singleProduct?.price}</p>
                    <p className='mb-2'>Shipping & Handling :  {shipping.toFixed(2)}</p>
                    <p className='mb-2'>Total before tax:  {totalBeforeTax}</p>
                    <p className='mb-2'>Estimited tax: {estimitedTax.toFixed(2)}</p>
                    <h4> Total amount : BDT {taxTotal.toFixed(2)}</h4>
                </div>
                <div className='my-5'>

                    {children}

                </div>
                {/* <Link to="/orderNow/:productId">
                    <button class="bg-orange-500 hover:bg-orange-700 font-semibold py-2 px-20 rounded-full text-center">
                        Order now
                    </button>
                </Link> */}


            </div>
        </div>
    );
};

export default Cart;