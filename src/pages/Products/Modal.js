// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// import { Fragment } from 'react'
// // import { XIcon } from '@heroicons/react/outline'



// const Modal = ({ handleClose, show, children }) => {
//     const showHideClassName = show ? "block" : "hidden";
//     const [showModal, setShowModal] = useState(false);
//     const { productId } = useParams();

//     const allProductState = useSelector(state => state.products.allProducts);
//     // const singleProduct = allProductState.find(product => product._id === payload._id)




//     const [open, setOpen] = useState(true)


//     return (
//         <>

//             <div className={showHideClassName}>


//                 <Transition.Root show={open} as={Fragment}>
//                     <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
//                         <div className="absolute inset-0 overflow-hidden">
//                             <Transition.Child
//                                 as={Fragment}
//                                 enter="ease-in-out duration-500"
//                                 enterFrom="opacity-0"
//                                 enterTo="opacity-100"
//                                 leave="ease-in-out duration-500"
//                                 leaveFrom="opacity-100"
//                                 leaveTo="opacity-0"
//                             >
//                                 <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//                             </Transition.Child>

//                             <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
//                                 <Transition.Child
//                                     as={Fragment}
//                                     enter="transform transition ease-in-out duration-500 sm:duration-700"
//                                     enterFrom="translate-x-full"
//                                     enterTo="translate-x-0"
//                                     leave="transform transition ease-in-out duration-500 sm:duration-700"
//                                     leaveFrom="translate-x-0"
//                                     leaveTo="translate-x-full"
//                                 >
//                                     <div className="w-screen max-w-md">
//                                         <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
//                                             <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
//                                                 <div className="flex items-start justify-between">
//                                                     <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
//                                                     <div className="ml-3 h-7 flex items-center">
//                                                         <button
//                                                             type="button"
//                                                             className="-m-2 p-2 text-gray-400 hover:text-gray-500"
//                                                             // onClick={() => setOpen(false)}
//                                                             onClick={handleClose}
//                                                         >
//                                                             <span className="sr-only">Close panel</span>
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                                 {children}

//                                                 {/* <div className="mt-8">
//                                                 <div className="flow-root">
//                                                     <ul role="list" className="-my-6 divide-y divide-gray-200">
//                                                         {allProductState.map((product) => (
//                                                             <li key={product.id} className="py-6 flex">
//                                                                 <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
//                                                                     <img
//                                                                         src={product.imageSrc}
//                                                                         alt={product.imageAlt}
//                                                                         className="w-full h-full object-center object-cover"
//                                                                     />
//                                                                 </div>

//                                                                 <div className="ml-4 flex-1 flex flex-col">
//                                                                     <div>
//                                                                         <div className="flex justify-between text-base font-medium text-gray-900">
//                                                                             <h3>
//                                                                                 <a href={product.href}>{product.name}</a>
//                                                                             </h3>
//                                                                             <p className="ml-4">{product.price}</p>
//                                                                         </div>
//                                                                         <p className="mt-1 text-sm text-gray-500">{product.color}</p>
//                                                                     </div>
//                                                                     <div className="flex-1 flex items-end justify-between text-sm">
//                                                                         <p className="text-gray-500">Qty {product.quantity}</p>

//                                                                         <div className="flex">
//                                                                             <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
//                                                                                 Remove
//                                                                             </button>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </li>
//                                                         ))}
//                                                     </ul>
//                                                 </div>
//                                             </div> */}
//                                             </div>

//                                             <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
//                                                 <div className="flex justify-between text-base font-medium text-gray-900">
//                                                     <p>Subtotal</p>
//                                                     <p>$262.00</p>
//                                                 </div>
//                                                 <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
//                                                 <div className="mt-6">
//                                                     <a
//                                                         href="#"
//                                                         className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
//                                                     >
//                                                         Checkout
//                                                     </a>
//                                                 </div>
//                                                 <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
//                                                     <p>
//                                                         or{' '}
//                                                         <button
//                                                             type="button"
//                                                             className="text-indigo-600 font-medium hover:text-indigo-500"
//                                                             onClick={() => setOpen(false)}
//                                                         >
//                                                             Continue Shopping<span aria-hidden="true"> &rarr;</span>
//                                                         </button>
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </Transition.Child>
//                             </div>
//                         </div>
//                     </Dialog>
//                 </Transition.Root>
//             </div>


//             {/* <div className={showHideClassName}>
//                 <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex" >

//                     <div className="relative w-auto my-6 mx-auto max-w-3xl">
//                         {/*content*/}
//             {/* <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                             {/*header*/}

//             {/* <div>
//                                 <button onClick={handleClose}>
//                                     <span className="text-red-700 text-2xl block"> X </span>
//                                 </button>
//                             </div>

//                             <div className="grid grid-cols-2 gap-4 my-3">

//                                 {children} */}




//             {/*
//                                 <div>
//                                     <img className="m-4" src={singleproduct?.image} alt="" />

//                                 </div>
//                                 <div className=" flex items-start justify-between p-5 rounded-t">
//                                     <div>
//                                         <h1 className="text-2xl mb-3">{singleproduct?.name}</h1>
//                                         <h2 className="text-gray-400">{singleproduct?.descriptoin}</h2>
//                                         <p className="my-3">BDT <span className="text-2xl">{singleproduct?.price}</span></p>
//                                     </div>


//                                 </div> */}







//             {/* </div> */}
//             {/*body*/}
//             {/* <div className="relative p-6 flex-auto">
//                                 <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
//                                     I always felt like I could do anything. That’s the main
//                                     thing people are controlled by! Thoughts- their perception
//                                     of themselves! They're slowed down by their perception of
//                                     themselves. If you're taught you can’t do anything, you
//                                     won’t do anything. I was taught I could do everything.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}




//         </>
//     );
// }
// export default Modal;