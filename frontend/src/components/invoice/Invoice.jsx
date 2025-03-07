// // INVOICE COMPONENT

// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import { FaCheck } from "react-icons/fa6";

// const Invoice = ({ orderInfo, setShowInvoice }) => {
//   const invoiceRef = useRef(null);
//   const handlePrint = () => {
//     const printContent = invoiceRef.current.innerHTML;
//     const WinPrint = window.open("", "", "width=900,height=650");

//     WinPrint.document.write(`
//             <html>
//               <head>
//                 <title>Order Receipt</title>
//                 <style>
//                   body { font-family: Arial, sans-serif; padding: 20px; }
//                   .receipt-container { width: 300px; border: 1px solid #ddd; padding: 10px; }
//                   h2 { text-align: center; }
//                 </style>
//               </head>
//               <body>
//                 ${printContent}
//               </body>
//             </html>
//           `);

//     WinPrint.document.close();
//     WinPrint.focus();
//     setTimeout(() => {
//       WinPrint.print();
//       WinPrint.close();
//     }, 1000);
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-4 rounded-lg shadow-lg w-[400px]">
//         {/* Receipt Content for Printing */}

//         <div ref={invoiceRef} className="p-4">
//           {/* Receipt Header */}
//           <div className="flex justify-center mb-4">
//             <motion.div
//               initial={{ scale: 0, opacity: 0 }}
//               animate={{ scale: 1.2, opacity: 1 }}
//               transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
//               className="w-12 h-12 border-8 border-green-500 rounded-full flex items-center justify-center shadow-lg bg-green-500"
//             >
//               <motion.span
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.3, duration: 0.3 }}
//                 className="text-2xl"
//               >
//                 <FaCheck className="text-white" />
//               </motion.span>
//             </motion.div>
//           </div>

//           <h2 className="text-xl font-bold text-center mb-2">Order Receipt</h2>
//           <p className="text-gray-600 text-center">Thank you for your order!</p>

//           {/* Order Details */}

//           <div className="mt-4 border-t pt-4 text-sm text-gray-700">
//             <p>
//               <strong>Order ID:</strong>{" "}
//               {orderInfo.orderId?.orderId}
//             </p>
//             <p>
//               <strong>Name:</strong> {orderInfo.customerDetails.name}
//             </p>
//             <p>
//               <strong>Phone:</strong> {orderInfo.customerDetails.phone}
//             </p>
//             <p>
//               <strong>Guests:</strong> {orderInfo.customerDetails.guests}
//             </p>
//           </div>

//           {/* Items Summary */}

//           <div className="mt-4 border-t pt-4">
//             <h3 className="text-sm font-semibold">Items Ordered</h3>
//             <ul className="text-sm text-gray-700">
//               {orderInfo.items.map((item, index) => (
//                 <li
//                   key={index}
//                   className="flex justify-between items-center text-xs"
//                 >
//                   <span>
//                     {item.name} x{item.quantity}
//                   </span>
//                   <span>₹{item.price.toFixed(2)}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Bills Summary */}

//           <div className="mt-4 border-t pt-4 text-sm">
//             <p>
//               <strong>Subtotal:</strong> ₹{orderInfo.bills.total.toFixed(2)}
//             </p>
//             <p>
//               <strong>Tax:</strong> ₹{orderInfo.bills.tax.toFixed(2)}
//             </p>
//             <p className="text-md font-semibold">
//               <strong>Grand Total:</strong> ₹
//               {orderInfo.bills.totalWithTax.toFixed(2)}
//             </p>
//           </div>

//           {/* Payment Details */}

//           <div className="mb-2 mt-2 text-xs">
//             {orderInfo.paymentMethod === "Cash" ? (
//               <p>
//                 <strong>Payment Method:</strong> {orderInfo.paymentMethod}
//               </p>
//             ) : (
//               <>
//                 <p>
//                   <strong>Payment Method:</strong> {orderInfo.paymentMethod}
//                 </p>
              
//               </>
//             )}
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-between mt-4">
//           <button
//             onClick={handlePrint}
//             className="text-blue-500 hover:underline text-xs px-4 py-2 rounded-lg"
//           >
//             Print Receipt
//           </button>
//           <button
//             onClick={() => setShowInvoice(false)}
//             className="text-red-500 hover:underline text-xs px-4 py-2 rounded-lg"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Invoice;



// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import { FaCheck } from "react-icons/fa6";

// const Invoice = ({ orderInfo, setShowInvoice }) => {
//     const invoiceRef = useRef(null);
//     const handlePrint = () => {
//         console.log("Printing invoice:", orderInfo);
//         const printContent = invoiceRef.current.innerHTML;
//         const WinPrint = window.open("", "", "width=900,height=650");

//         WinPrint.document.write(`
//             <html>
//                 // <head>
//                 //     <title>Order Receipt</title>
//                 //     <style>
//                 //         body { font-family: Arial, sans-serif; padding: 20px; }
//                 //         .receipt-container { width: 300px; border: 1px solid #ddd; padding: 10px; }
//                 //         h2 { text-align: center; }
//                 //     </style>
//                 // </head>
//                   <head>
//                     <title>Order Receipt</title>
//                     <style>
//                         body { font-family: Arial, sans-serif; padding: 5px; } /*reduced padding*/
//                         @media print {
//                             .receipt-container { 
//                                 width: 78mm;
//                                 border: 1px solid #ddd; 
//                                 padding: 5px; /*reduced padding*/
//                             }
//                             h2 { text-align: center; }
//                             .items-list{
//                                 font-size: 10px;
//                             }
//                         }
//                     </style>
//                 </head>
//                 <body>
//                     ${printContent}
//                 </body>
//             </html>
//         `);

//         WinPrint.document.close();
//         WinPrint.focus();
//         setTimeout(() => {
//             WinPrint.print();
//             WinPrint.close();
//         }, 1000);
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//             <div className="bg-white p-4 rounded-lg shadow-lg w-[400px]">
//                 <div ref={invoiceRef} className="p-4">
//                     <div className="flex justify-center mb-4">
//                         <motion.div
//                             initial={{ scale: 0, opacity: 0 }}
//                             animate={{ scale: 1.2, opacity: 1 }}
//                             transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
//                             className="w-12 h-12 border-8 border-green-500 rounded-full flex items-center justify-center shadow-lg bg-green-500"
//                         >
//                             <motion.span
//                                 initial={{ scale: 0 }}
//                                 animate={{ scale: 1 }}
//                                 transition={{ delay: 0.3, duration: 0.3 }}
//                                 className="text-2xl"
//                             >
//                                 <FaCheck className="text-white" />
//                             </motion.span>
//                         </motion.div>
//                     </div>

//                     <h2 className="text-xl font-bold text-center mb-2">Order Receipt</h2>
//                     <p className="text-gray-600 text-center">Thank you for your order!</p>

//                     <div className="mt-4 border-t pt-4 text-sm text-gray-700">
//                         <p>
//                             <strong>Order ID:</strong> {orderInfo?.orderId?.orderId}
//                         </p>
//                         <p>
//                             <strong>Name:</strong> {orderInfo?.customerDetails?.name}
//                         </p>
//                         <p>
//                             <strong>Phone:</strong> {orderInfo?.customerDetails?.phone}
//                         </p>
//                         <p>
//                             <strong>Guests:</strong> {orderInfo?.customerDetails?.guests}
//                         </p>
//                     </div>

//                     <div className="mt-4 border-t pt-4">
//                         <h3 className="text-sm font-semibold">Items Ordered</h3>
//                         <ul className="text-sm text-gray-700">
//                             {orderInfo?.items?.map((item, index) => (
//                                 <li
//                                     key={index}
//                                     className="flex justify-between items-center text-xs"
//                                 >
//                                     <span>
//                                         {item.name} x{item.quantity}
//                                     </span>
//                                     <span>Rs {item.price?.toFixed(2)}</span>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     <div className="mt-4 border-t pt-4 text-sm">
//                         <p>
//                             <strong>Subtotal:</strong> Rs {orderInfo?.bills?.total?.toFixed(2)}
//                         </p>
//                         <p>
//                             <strong>Tax:</strong> Rs {orderInfo?.bills?.tax?.toFixed(2)}
//                         </p>
//                         <p className="text-md font-semibold">
//                             <strong>Grand Total:</strong> Rs {orderInfo?.bills?.totalWithTax?.toFixed(2)}
//                         </p>
//                     </div>

//                     <div className="mb-2 mt-2 text-xs">
//                         {orderInfo?.paymentMethod === "Cash" ? (
//                             <p>
//                                 <strong>Payment Method:</strong> {orderInfo?.paymentMethod}
//                             </p>
//                         ) : (
//                             <>
//                                 <p>
//                                     <strong>Payment Method:</strong> {orderInfo?.paymentMethod}
//                                 </p>
//                             </>
//                         )}
//                     </div>
//                 </div>

//                 <div className="flex justify-between mt-4">
//                     <button
//                         onClick={handlePrint}
//                         className="text-blue-500 hover:underline text-xs px-4 py-2 rounded-lg"
//                     >
//                         Print Receipt
//                     </button>
//                     <button
//                         onClick={() => setShowInvoice(false)}
//                         className="text-red-500 hover:underline text-xs px-4 py-2 rounded-lg"
//                     >
//                         Close
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Invoice;

// import React, { useRef } from "react";
// import logo from "../../assets/logo.png";

// const Receipt = ({ orderInfo, setShowInvoice }) => {
//     const receiptRef = useRef(null);

//     const handlePrint = () => {
//         const printContent = receiptRef.current.innerHTML;
//         const WinPrint = window.open("", "", "width=900,height=650");
    
//         WinPrint.document.write(`
//             <html>
//                 <head>
//                     <title>Receipt</title>
//                     <style>
//                         body { 
//                             font-family: monospace; 
//                             padding: 5px; 
//                             width: 78mm; /* Set the body width directly */
//                             margin: 0; /* Remove default body margins */
//                         }
//                         @media print {
//                             .receipt-container {
//                                 width: 78mm; /* Match the body width */
//                                 padding: 5px;
//                             }
//                             h2 { text-align: center; }
//                             .items-list {
//                                 font-size: 10px;
//                             }
//                             body {
//                                 font-size: 12px; /* Adjust font size */
//                             }
//                         }
//                     </style>
//                 </head>
//                 <body>
//                     <div class="receipt-container">
//                         ${printContent}
//                     </div>
//                 </body>
//             </html>
//         `);
    
//         WinPrint.document.close();
//         WinPrint.focus();
//         setTimeout(() => {
//             WinPrint.print();
//             WinPrint.close();
//         }, 1000);
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-2">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
//                 <div ref={receiptRef} className="text-sm">
//                     <div className="text-center mb-2">
//                         <img src={logo} alt="restaurant logo" className="h-auto w-auto object-contain px-20 mb-5" />
//                         <h2 className="text-xl font-bold">Savory Bites</h2>
//                         <p>Address: Shop no.2 plot no.19-C, Rahat Commercial Lane Phase VI, D.H.A, Karachi</p>
//                         <p>Telp. +92 337 8018705</p>
//                         <div className="text-left  mt-2">
//                             <p>
//                                 <strong>Payment Method:</strong> {orderInfo?.paymentMethod}
//                             </p>
//                             <p>
//                                 <strong>Order Type:</strong> {orderInfo?.customerDetails?.orderType}
//                             </p>
//                         </div>
//                     </div>

//                     <div className="text-center my-2">
//                         <p>---------------------------------------</p>
//                         <p className="font-bold">CASH RECEIPT</p>
//                         <p>---------------------------------------</p>
//                     </div>

//                     <div className="flex justify-between mb-2 border">
                        
//                         <p className="font-bold">Description</p>
//                         <p className="font-bold">Price</p>
//                     </div>

//                     <div className="mb-2">
//                         {orderInfo?.items?.map((item, index) => (
//                             <div key={index} className="flex justify-between">
//                                 <p>
//                                     {item.quantity} x {item.name}
//                                 </p>
//                                 <p>Rs{item.price?.toFixed(2)}</p>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="text-center my-2">
//                         <p>---------------------------------------</p>
//                     </div>

//                     <div className="flex justify-between mb-2">
//                         <p className="font-bold">Subtotal</p>
//                         <p className="font-bold">{orderInfo?.bills?.total?.toFixed(2)}</p>
//                     </div>

//                     <div className="flex justify-between mb-2">
//                         <p className="font-bold">Sales Tax</p>
//                         <p className="font-bold">{orderInfo?.bills?.tax?.toFixed(2)}</p>
//                     </div>

//                     {orderInfo?.bills.discountPercentage && (
//                         <div className="flex justify-between ">
//                             <p className="font-bold">
//                                 Discount ({orderInfo?.bills.discountPercentage}%)
//                             </p>
//                             <p className="font-bold">
//                                 - Rs{" "}
//                                 {(
//                                     orderInfo?.bills?.total +
//                                     orderInfo?.bills?.tax -
//                                     orderInfo?.bills?.totalWithTax
//                                 ).toFixed(2)}
//                             </p>
//                         </div>
//                     )}
// <div className="text-center my-2">
//                         <p>---------------------------------------</p>
//                     </div>
//                     <div className="flex justify-between ">
//                         <p className="font-bold">Total</p>
//                         <p className="font-bold">
//                             {orderInfo?.bills?.totalWithTax?.toFixed(2)}
//                         </p>
//                     </div>

                    


//                     <div className="text-center my-">
//                         <p>---------------------------------------</p>
//                     </div>

                    

//                     <div className="text-center my-">
//                         <p>---------------------------------------</p>
//                     </div>

//                     <div className="text-center">
//                         <p className="font-bold">THANK YOU!</p>
//                     </div>
//                 </div>

//                 <div className="flex justify-between mt-6">
//                     <button
//                         onClick={handlePrint}
//                         className="text-blue-500 hover:underline text-sm px-4 py-2 rounded-lg"
//                     >
//                         Print Receipt
//                     </button>
//                     <button
//                         onClick={() => setShowInvoice(false)}
//                         className="text-red-500 hover:underline text-sm px-4 py-2 rounded-lg"
//                     >
//                         Close
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Receipt;

// import React, { useRef } from "react";
// import { useSelector } from "react-redux";
// import logo from "../../assets/logo.png";

// const Receipt = ({ orderInfo, setShowInvoice }) => {
//     const receiptRef = useRef(null);
//     const customerData = useSelector(state => state.customer);
//     const user = useSelector(state => state.user);

//     const handlePrint = () => {
//         const printContent = receiptRef.current.innerHTML;
//         const WinPrint = window.open("", "", "width=900,height=650");

//         WinPrint.document.write(`
//             <html>
//                 <head>
//                     <title>Receipt</title>
//                     <style>
//                         body { 
//                             font-family: monospace; 
//                             padding: 1px; 
//                             width: 78mm; 
//                             margin: 0 auto; 
//                         }
//                         @media print {
//                             .receipt-container {
//                                 width: 88mm; 
//                                 padding: 1px;
//                                 margin: 1mm; /* Adjust this value as needed */
//                             }
//                             h2 { text-align: center; }
//                             .items-list {
//                                 font-size: 10px;
//                             }
//                             body {
//                                 font-size: 18px; 
//                             }
//                         }
//                     </style>
//                 </head>
//                 <body>
//                     <div class="receipt-container">
//                         ${printContent}
//                     </div>
//                 </body>
//             </html>
//         `);

//         WinPrint.document.close();
//         WinPrint.focus();
//         setTimeout(() => {
//             WinPrint.print();
//             WinPrint.close();
//         }, 1000);
//     };

//     // Get order date and time and format it
//     const orderDateTime = new Date(orderInfo?.createdAt);
//     const formattedOrderDateTime = orderDateTime.toLocaleString();

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-2">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-[450px]">
//                 <div ref={receiptRef} className="text-sm">
//                     <div className="text-center mb-2">
//                         <img src={logo} alt="restaurant logo" className="h-auto w-auto object-contain px-20 mb-5" />
//                         {/* <div className=""><img src={logo} alt="restaurant logo" className="h-auto w-[300px] object-contain px-20 mb-5 " /></div> */}
//                         <h2 className="text-xl font-bold">Savory Bites</h2>
//                         <p>Address: Shop no.2 plot no.19-C, Rahat Commercial Lane Phase VI, D.H.A, Karachi</p>
//                         <p>Telp. +92 337 8018705</p>
//                         <div className="text-left mt-2">
//                             <p>
//                                 <strong>Payment Method:</strong> {orderInfo?.paymentMethod}
//                             </p>
//                             <p>
//                                 <strong>Order Type:</strong> {orderInfo?.customerDetails?.orderType}
//                             </p>
//                             <p className="text-xs  font-medium mt-1">
//                                 Invoice No: #{customerData.orderId || "N/A"}
//                             </p>
//                             <p className="text-xs font-medium mt-1">
//                                 Order Date: {formattedOrderDateTime}
//                             </p>
//                             {user && <p className="text-xs font-medium mt-1">User: {user.role} </p>} {/* Added user info */}
//                         </div>
//                     </div>

//                     <div className="text-center my-2">
//                         <p>----------------------------------</p>
//                         <p className="font-bold">SALE RECEIPT</p>
//                         <p>----------------------------------</p>
//                     </div>

//                     <div className="flex justify-between mb-2 border">
//                         <p className="font-bold">Description</p>
//                         <p className="font-bold">Price</p>
//                     </div>

//                     <div className="mb-2">
//                         {orderInfo?.items?.map((item, index) => (
//                             <div key={index} className="flex justify-between">
//                                 <p>
//                                     {item.quantity} x {item.name}
//                                 </p>
//                                 <p>Rs{item.price?.toFixed(2)}</p>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="text-center my-2">
//                         <p>----------------------------------</p>
//                     </div>

//                     <div className="flex justify-between mb-2">
//                         <p className="font-bold">Subtotal</p>
//                         <p className="font-bold">{orderInfo?.bills?.total?.toFixed(2)}</p>
//                     </div>

//                     <div className="flex justify-between mb-2">
//                         <p className="font-bold">Sales Tax</p>
//                         <p className="font-bold">{orderInfo?.bills?.tax?.toFixed(2)}</p>
//                     </div>

//                     {orderInfo?.bills.discountPercentage && (
//                         <div className="flex justify-between ">
//                             <p className="font-bold">
//                                 Discount ({orderInfo?.bills.discountPercentage}%)
//                             </p>
//                             <p className="font-bold">
//                                 - Rs{" "}
//                                 {(
//                                     orderInfo?.bills?.total +
//                                     orderInfo?.bills?.tax -
//                                     orderInfo?.bills?.totalWithTax
//                                 ).toFixed(2)}
//                             </p>
//                         </div>
//                     )}

//                     <div className="text-center my-2">
//                         <p>----------------------------------</p>
//                     </div>

//                     <div className="flex justify-between ">
//                         <p className="font-bold">Total</p>
//                         <p className="font-bold">
//                             {orderInfo?.bills?.totalWithTax?.toFixed(2)}
//                         </p>
//                     </div>

//                     <div className="text-center my-">
//                         <p>----------------------------------</p>
//                     </div>

//                     <div className="text-center my-">
//                         <p>----------------------------------</p>
//                     </div>

//                     <div className="text-center">
//                         <p className="font-bold">THANK YOU!</p>
//                     </div>
//                 </div>

//                 <div className="flex justify-between mt-6">
//                     <button
//                         onClick={handlePrint}
//                         className="text-blue-500 hover:underline text-sm px-4 py-2 rounded-lg"
//                     >
//                         Print Receipt
//                     </button>
//                     <button
//                         onClick={() => setShowInvoice(false)}
//                         className="text-red-500 hover:underline text-sm px-4 py-2 rounded-lg"
//                     >
//                         Close
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Receipt;


// import React, { useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import logo from "../../assets/logo.png";

// const Receipt = ({ orderInfo, setShowInvoice }) => {
//     const receiptRef = useRef(null);
//     const kitchenReceiptRef = useRef(null); // Ref for kitchen receipt
//     const customerData = useSelector(state => state.customer);
//     const user = useSelector(state => state.user);
//     const [showPrintOptions, setShowPrintOptions] = useState(false); // State to control the popup

//     const handlePrint = (type) => {
//         let printContent;
//         let title;

//         if (type === "sales") {
//             printContent = receiptRef.current.innerHTML;
//             title = "Sales Receipt";
//         } else if (type === "kitchen") {
//             printContent = kitchenReceiptRef.current.innerHTML;
//             title = "Kitchen Receipt";
//         }

//         const WinPrint = window.open("", "", "width=900,height=650");

//         WinPrint.document.write(`
//             <html>
//                 <head>
//                     <title>${title}</title>
//                     <style>
//                         body { 
//                             font-family: monospace; 
//                             padding: 1px; 
//                             width: 78mm; 
//                             margin: 0 auto; 
//                         }
//                         @media print {
//                             .receipt-container {
//                                 width: 88mm; 
//                                 padding: 1px;
//                                 margin: 1mm; /* Adjust this value as needed */
//                             }
//                             h2 { text-align: center; }
//                             .items-list {
//                                 font-size: 10px;
//                             }
//                             body {
//                                 font-size: 18px; 
//                             }
//                         }
//                     </style>
//                 </head>
//                 <body>
//                     <div class="receipt-container">
//                         ${printContent}
//                     </div>
//                 </body>
//             </html>
//         `);

//         WinPrint.document.close();
//         WinPrint.focus();
//         setTimeout(() => {
//             WinPrint.print();
//             WinPrint.close();
//         }, 1000);

//         setShowPrintOptions(false); // Close the popup after printing
//     };

//     // Get order date and time and format it
//     const orderDateTime = new Date(orderInfo?.createdAt);
//     const formattedOrderDateTime = orderDateTime.toLocaleString();

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-2">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-[450px] relative">
//                 {/* Sales Receipt */}
//                 <div ref={receiptRef} className="text-sm">
//                     <div className="text-center mb-2">
//                         <img src={logo} alt="restaurant logo" className="h-auto w-auto object-contain px-20 mb-5" />
//                         <h2 className="text-xl font-bold">Savory Bites</h2>
//                         <p>Address: Shop no.2 plot no.19-C, Rahat Commercial Lane Phase VI, D.H.A, Karachi</p>
//                         <p>Telp. +92 337 8018705</p>
//                         <div className="text-left mt-2">
//                             <p>
//                                 <strong>Payment Method:</strong> {orderInfo?.paymentMethod}
//                             </p>
//                             <p>
//                                 <strong>Order Type:</strong> {orderInfo?.customerDetails?.orderType}
//                             </p>
//                             <p className="text-xs font-medium mt-1">
//                                 Invoice No: #{customerData.orderId || "N/A"}
//                             </p>
//                             <p className="text-xs font-medium mt-1">
//                                 Order Date: {formattedOrderDateTime}
//                             </p>
//                             {user && <p className="text-xs font-medium mt-1">User: {user.role} </p>}
//                         </div>
//                     </div>

//                     <div className="text-center my-2">
//                         <p>----------------------------------</p>
//                         <p className="font-bold">SALE RECEIPT</p>
//                         <p>----------------------------------</p>
//                     </div>

//                     <div className="flex justify-between mb-2 border">
//                         <p className="font-bold">Description</p>
//                         <p className="font-bold">Price</p>
//                     </div>

//                     <div className="mb-2">
//                         {orderInfo?.items?.map((item, index) => (
//                             <div key={index} className="flex justify-between">
//                                 <p>
//                                     {item.quantity} x {item.name}
//                                 </p>
//                                 <p>Rs{item.price?.toFixed(2)}</p>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="text-center my-2">
//                         <p>----------------------------------</p>
//                     </div>

//                     <div className="flex justify-between mb-2">
//                         <p className="font-bold">Subtotal</p>
//                         <p className="font-bold">{orderInfo?.bills?.total?.toFixed(2)}</p>
//                     </div>

//                     <div className="flex justify-between mb-2">
//                         <p className="font-bold">Sales Tax</p>
//                         <p className="font-bold">{orderInfo?.bills?.tax?.toFixed(2)}</p>
//                     </div>

//                     {orderInfo?.bills.discountPercentage && (
//                         <div className="flex justify-between ">
//                             <p className="font-bold">
//                                 Discount ({orderInfo?.bills.discountPercentage}%)
//                             </p>
//                             <p className="font-bold">
//                                 - Rs{" "}
//                                 {(
//                                     orderInfo?.bills?.total +
//                                     orderInfo?.bills?.tax -
//                                     orderInfo?.bills?.totalWithTax
//                                 ).toFixed(2)}
//                             </p>
//                         </div>
//                     )}

//                     <div className="text-center my-2">
//                         <p>----------------------------------</p>
//                     </div>

//                     <div className="flex justify-between ">
//                         <p className="font-bold">Total</p>
//                         <p className="font-bold">
//                             {orderInfo?.bills?.totalWithTax?.toFixed(2)}
//                         </p>
//                     </div>

//                     <div className="text-center my-">
//                         <p>----------------------------------</p>
//                     </div>

//                     <div className="text-center my-">
//                         <p>----------------------------------</p>
//                     </div>

//                     <div className="text-center">
//                         <p className="font-bold">THANK YOU!</p>
//                     </div>
//                 </div>

//                 {/* Kitchen Receipt */}
//                 <div ref={kitchenReceiptRef} className="hidden">
//                     <div className="text-center mb-2">
//                         <img src={logo} alt="restaurant logo" className="h-auto w-auto object-contain px-20 mb-5" />
//                         <h2 className="text-xl font-bold">Savory Bites</h2>
//                         <p>Address: Shop no.2 plot no.19-C, Rahat Commercial Lane Phase VI, D.H.A, Karachi</p>
//                         <p>Telp. +92 337 8018705</p>
//                         <div className="text-left mt-2">
//                             <p className="text-xs font-medium mt-1">
//                                 Order Date: {formattedOrderDateTime}
//                             </p>
//                         </div>
//                     </div>

//                     <div className="text-center my-2">
//                         <p>----------------------------------</p>
//                         <p className="font-bold">KITCHEN RECEIPT</p>
//                         <p>----------------------------------</p>
//                     </div>

//                     <div className="flex justify-between mb-2 border">
//                         <p className="font-bold">Description</p>
//                         <p className="font-bold">Quantity</p>
//                     </div>

//                     <div className="mb-2">
//                         {orderInfo?.items?.map((item, index) => (
//                             <div key={index} className="flex justify-between">
//                                 <p>{item.name}</p>
//                                 <p>{item.quantity}</p>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="text-center my-2">
//                         <p>----------------------------------</p>
//                     </div>

//                     <div className="text-center">
//                         <p className="font-bold">THANK YOU!</p>
//                     </div>
//                 </div>

//                 {/* Print Options Popup */}
//                 {showPrintOptions && (
//                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-10">
//                         <h3 className="text-lg font-bold mb-4">Select Receipt Type</h3>
//                         <button
//                             onClick={() => handlePrint("sales")}
//                             className="block w-full text-blue-500 hover:underline text-sm px-4 py-2 rounded-lg mb-2"
//                         >
//                             Print Sales Receipt
//                         </button>
//                         <button
//                             onClick={() => handlePrint("kitchen")}
//                             className="block w-full text-green-500 hover:underline text-sm px-4 py-2 rounded-lg mb-2"
//                         >
//                             Print Kitchen Receipt
//                         </button>
//                         <button
//                             onClick={() => setShowPrintOptions(false)}
//                             className="block w-full text-red-500 hover:underline text-sm px-4 py-2 rounded-lg"
//                         >
//                             Cancel
//                         </button>
//                     </div>
//                 )}

//                 {/* Buttons */}
//                 <div className="flex justify-between mt-6">
//                     <button
//                         onClick={() => setShowPrintOptions(true)} // Open the popup
//                         className="text-blue-500 hover:underline text-sm px-4 py-2 rounded-lg"
//                     >
//                         Print Receipt
//                     </button>
//                     <button
//                         onClick={() => setShowInvoice(false)}
//                         className="text-red-500 hover:underline text-sm px-4 py-2 rounded-lg"
//                     >
//                         Close
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Receipt;

// import React, { useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import logo from "../../assets/logo.png";

// const Receipt = ({ orderInfo, setShowInvoice }) => {
//     const receiptRef = useRef(null);
//     const kitchenReceiptRef = useRef(null); // Ref for kitchen receipt
//     const customerData = useSelector(state => state.customer);
//     const user = useSelector(state => state.user);
//     const [showPrintOptions, setShowPrintOptions] = useState(false); // State to control the popup

//     const handlePrint = (type) => {
//         let printContent;
//         let title;

//         if (type === "sales") {
//             printContent = receiptRef.current.innerHTML;
//             title = "Sales Receipt";
//         } else if (type === "kitchen") {
//             printContent = kitchenReceiptRef.current.innerHTML;
//             title = "Kitchen Receipt";
//         }

//         const WinPrint = window.open("", "", "width=900,height=650");

//         WinPrint.document.write(`
//             <html>
//                 <head>
//                     <title>${title}</title>
//                     <style>
//                         body { 
//                             font-family: monospace; 
//                             padding: 1px; 
//                             width: 78mm; 
//                             margin: 0 auto; 
//                         }
//                         @media print {
//                             .receipt-container {
//                                 width: 88mm; 
//                                 padding: 1px;
//                                 margin: 1mm; /* Adjust this value as needed */
//                             }
//                             h2 { text-align: center; }
//                             .items-list {
//                                 font-size: 10px;
//                             }
//                             body {
//                                 font-size: 18px; 
//                             }
//                             /* Increase logo size for print */
//                             .logo-print {
//                                 width: 150px !important; /* Adjust the size as needed */
//                                 height: auto !important;
//                                 margin: 0 auto; /* Center the logo */
//                                 display: block;
//                             }
//                         }
//                     </style>
//                 </head>
//                 <body>
//                     <div class="receipt-container">
//                         ${printContent}
//                     </div>
//                 </body>
//             </html>
//         `);

//         WinPrint.document.close();
//         WinPrint.focus();

//         // Add a delay before printing and closing the window
//         setTimeout(() => {
//             WinPrint.print();
//             // Close the window after a longer delay to ensure the print job is processed
//             setTimeout(() => {
//                 WinPrint.close();
//             }, 2000); // Adjust the delay as needed
//         }, 1000);

//         setShowPrintOptions(false); // Close the popup after printing
//     };

//     // Get order date and time and format it
//     const orderDateTime = new Date(orderInfo?.createdAt);
//     const formattedOrderDateTime = orderDateTime.toLocaleString();

//     // Determine sales tax percentage based on payment method
//     const salesTaxPercentage = orderInfo?.paymentMethod === "Cash" ? 15 : 8;

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-2">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] relative">
//                 {/* Sales Receipt */}
//                 <div ref={receiptRef} className="text-sm">
//                     <div className="text-center mb-2">
//                         <img
//                             src={logo}
//                             alt="restaurant logo"
//                             className="mx-auto w-24 h-auto object-contain mb-3 logo-print" // Added logo-print class
//                         />
//                         <h2 className="text-xl font-bold">Savory Bites</h2>
//                         <p>Address: Shop no.2 plot no.19-C, Rahat Commercial Lane Phase VI, D.H.A, Karachi</p>
//                         <p>Telp. +92 337 8018705</p>
//                         <div className="text-left mt-2">
//                             <p>
//                                 <strong>Payment Method:</strong> {orderInfo?.paymentMethod}
//                             </p>
//                             <p>
//                                 <strong>Order Type:</strong> {orderInfo?.customerDetails?.orderType}
//                             </p>
//                             <p className="text-xs font-medium mt-1">
//                                 Invoice No: #{customerData.orderId || "N/A"}
//                             </p>
//                             <p className="text-xs font-medium mt-1">
//                                 Order Date: {formattedOrderDateTime}
//                             </p>
//                             {user && <p className="text-xs font-medium mt-1">User: {user.role} </p>}
//                         </div>
//                     </div>

//                     <div className="text-center my-2">
//                         <p>----------------------------------</p>
//                         <p className="font-bold">SALE RECEIPT</p>
//                         <p>----------------------------------</p>
//                     </div>

//                     <div className="flex justify-between mb-2 border">
//                         <p className="font-bold">Description</p>
//                         <p className="font-bold">Price</p>
//                     </div>

//                     <div className="mb-2">
//                         {orderInfo?.items?.map((item, index) => (
//                             <div key={index} className="flex justify-between">
//                                 <p>
//                                     {item.quantity} x {item.name}
//                                 </p>
//                                 <p>Rs{item.price?.toFixed(2)}</p>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="text-center my-2">
//                         <p>----------------------------------</p>
//                     </div>

//                     <div className="flex justify-between mb-2">
//                         <p className="font-bold">Subtotal</p>
//                         <p className="font-bold">{orderInfo?.bills?.total?.toFixed(2)}</p>
//                     </div>

//                     <div className="flex justify-between mb-2">
//                         <p className="font-bold">Sales Tax ({salesTaxPercentage}%)</p>
//                         <p className="font-bold">
//                             Rs{orderInfo?.bills?.tax?.toFixed(2)}
//                         </p>
//                     </div>

//                     {orderInfo?.bills.discountPercentage && (
//                         <div className="flex justify-between ">
//                             <p className="font-bold">
//                                 Discount ({orderInfo?.bills.discountPercentage}%)
//                             </p>
//                             <p className="font-bold">
//                                 - Rs{" "}
//                                 {(
//                                     orderInfo?.bills?.total +
//                                     orderInfo?.bills?.tax -
//                                     orderInfo?.bills?.totalWithTax
//                                 ).toFixed(2)}
//                             </p>
//                         </div>
//                     )}

//                     <div className="text-center my-2">
//                         <p>----------------------------------</p>
//                     </div>

//                     <div className="flex justify-between ">
//                         <p className="font-bold">Total</p>
//                         <p className="font-bold">
//                             {orderInfo?.bills?.totalWithTax?.toFixed(2)}
//                         </p>
//                     </div>

//                     <div className="text-center my-">
//                         <p>----------------------------------</p>
//                     </div>

//                     <div className="text-center my-">
//                         <p>----------------------------------</p>
//                     </div>

//                     <div className="text-center">
//                         <p className="font-bold">THANK YOU!</p>
//                     </div>
//                 </div>

//                 {/* Kitchen Receipt */}
//                 <div ref={kitchenReceiptRef} className="hidden">
//                     <div className="text-center mb-2">
//                         <img
//                             src={logo}
//                             alt="restaurant logo"
//                             className="mx-auto w-250 h-auto object-contain mb-3 logo-print" // Added logo-print class
//                         />
//                         <h2 className="text-xl font-bold">Savory Bites</h2>
//                         <p>Address: Shop no.2 plot no.19-C, Rahat Commercial Lane Phase VI, D.H.A, Karachi</p>
//                         <p>Telp. +92 337 8018705</p>
//                         <div className="text-left mt-2">
//                             <p className="text-xs font-medium mt-1">
//                                 Order Date: {formattedOrderDateTime}
//                             </p>
//                         </div>
//                     </div>

//                     <div className="text-center my-2">
//                         <p>----------------------------------</p>
//                         <p className="font-bold">KITCHEN RECEIPT</p>
//                         <p>----------------------------------</p>
//                     </div>

//                     <div className="flex justify-between mb-2 border">
//                         <p className="font-bold">Description</p>
//                         <p className="font-bold">Quantity</p>
//                     </div>

//                     <div className="mb-2">
//                         {orderInfo?.items?.map((item, index) => (
//                             <div key={index} className="flex justify-between">
//                                 <p>{item.name}</p>
//                                 <p>{item.quantity}</p>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="text-center my-2">
//                         <p>----------------------------------</p>
//                     </div>

//                     <div className="text-center">
//                         <p className="font-bold">THANK YOU!</p>
//                     </div>
//                 </div>

//                 {/* Print Options Popup */}
//                 {showPrintOptions && (
//                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-10">
//                         <h3 className="text-lg font-bold mb-4">Select Receipt Type</h3>
//                         <button
//                             onClick={() => handlePrint("sales")}
//                             className="block w-full text-blue-500 hover:underline text-sm px-4 py-2 rounded-lg mb-2"
//                         >
//                             Print Sales Receipt
//                         </button>
//                         <button
//                             onClick={() => handlePrint("kitchen")}
//                             className="block w-full text-green-500 hover:underline text-sm px-4 py-2 rounded-lg mb-2"
//                         >
//                             Print Kitchen Receipt
//                         </button>
//                         <button
//                             onClick={() => setShowPrintOptions(false)}
//                             className="block w-full text-red-500 hover:underline text-sm px-4 py-2 rounded-lg"
//                         >
//                             Cancel
//                         </button>
//                     </div>
//                 )}

//                 {/* Buttons */}
//                 <div className="flex justify-between mt-6">
//                     <button
//                         onClick={() => setShowPrintOptions(true)} // Open the popup
//                         className="text-blue-500 hover:underline text-sm px-4 py-2 rounded-lg"
//                     >
//                         Print Receipt
//                     </button>
//                     <button
//                         onClick={() => setShowInvoice(false)}
//                         className="text-red-500 hover:underline text-sm px-4 py-2 rounded-lg"
//                     >
//                         Close
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Receipt;


import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.png";

const Receipt = ({ orderInfo, setShowInvoice }) => {
    const receiptRef = useRef(null);
    const kitchenReceiptRef = useRef(null); // Ref for kitchen receipt
    const customerData = useSelector(state => state.customer);
    const user = useSelector(state => state.user);
    const [activeReceipt, setActiveReceipt] = useState("sales"); // State to control which receipt is visible

    // Get order date and time and format it
    const orderDateTime = new Date(orderInfo?.createdAt);
    const formattedOrderDateTime = orderDateTime.toLocaleString();

    // Determine sales tax percentage based on payment method
    const salesTaxPercentage = orderInfo?.paymentMethod === "Cash" ? 15 : 8;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-2">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[450px] relative">
                {/* Sales Receipt */}
                <div
                    ref={receiptRef}
                    className="text-sm"
                    style={{ display: activeReceipt === "sales" ? "block" : "none" }} // Show/hide based on activeReceipt
                >
                    <div className="text-center mb-2 receipt-header">
                        <img
                            src={logo}
                            alt="restaurant logo"
                            className="mx-auto w-24 h-auto object-contain mb-3 logo-print"
                        />
                        <h2 className="text-xl font-bold">Savoury Bites</h2>
                        <p>Address: Shop no.2 plot no.19-C, Rahat Commercial Lane Phase VI, D.H.A, Karachi</p>
                        <p>Telp. +92 337 8018705</p>
                        <div className="text-left mt-2">
                            <p>
                                <strong>Payment Method:</strong> {orderInfo?.paymentMethod}
                            </p>
                            <p>
                                <strong>Order Type:</strong> {orderInfo?.customerDetails?.orderType}
                            </p>
                            <p className="text-xs font-medium mt-1">
                                Invoice No: #{customerData.orderId || "N/A"}
                            </p>
                            <p className="text-xs font-medium mt-1">
                                Order Date: {formattedOrderDateTime}
                            </p>
                            {user && <p className="text-xs font-medium mt-1">User: {user.role} </p>}
                        </div>
                    </div>

                    <div className="text-center my-2">
                        <p>----------------------------------</p>
                        <p className="font-bold">SALE RECEIPT</p>
                        <p>----------------------------------</p>
                    </div>

                    <div className="flex justify-between mb-2 border">
                        <p className="font-bold">Description</p>
                        <p className="font-bold">Price</p>
                    </div>

                    <div className="mb-2">
                        {orderInfo?.items?.map((item, index) => (
                            <div key={index} className="flex justify-between">
                                <p>
                                    {item.quantity} x {item.name}
                                </p>
                                <p>Rs{item.price?.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center my-2">
                        <p>----------------------------------</p>
                    </div>

                    <div className="flex justify-between mb-2">
                        <p className="font-bold">Subtotal</p>
                        <p className="font-bold">{orderInfo?.bills?.total?.toFixed(2)}</p>
                    </div>

                    <div className="flex justify-between mb-2">
                        <p className="font-bold">Sales Tax ({salesTaxPercentage}%)</p>
                        <p className="font-bold">
                            Rs{orderInfo?.bills?.tax?.toFixed(2)}
                        </p>
                    </div>

                    {orderInfo?.bills.discountPercentage && (
                        <div className="flex justify-between ">
                            <p className="font-bold">
                                Discount ({orderInfo?.bills.discountPercentage}%)
                            </p>
                            <p className="font-bold">
                                - Rs{" "}
                                {(
                                    orderInfo?.bills?.total +
                                    orderInfo?.bills?.tax -
                                    orderInfo?.bills?.totalWithTax
                                ).toFixed(2)}
                            </p>
                        </div>
                    )}

                    <div className="text-center my-2">
                        <p>----------------------------------</p>
                    </div>

                    <div className="flex justify-between ">
                        <p className="font-bold">Total</p>
                        <p className="font-bold">
                            {orderInfo?.bills?.totalWithTax?.toFixed(2)}
                        </p>
                    </div>

                    <div className="text-center my-">
                        <p>----------------------------------</p>
                    </div>

                    <div className="text-center my-">
                        <p>----------------------------------</p>
                    </div>

                    <div className="text-center">
                        <p className="font-bold">THANK YOU!</p>
                    </div>
                </div>

                {/* Kitchen Receipt */}
                <div
                    ref={kitchenReceiptRef}
                    className="text-sm"
                    style={{ display: activeReceipt === "kitchen" ? "block" : "none" }} // Show/hide based on activeReceipt
                >
                    <div className="text-center mb-2 receipt-header">
                        <img
                            src={logo}
                            alt="restaurant logo"
                            className="mx-auto w-24 h-auto object-contain mb-3 logo-print"
                        />
                        <h2 className="text-xl font-bold">Savoury Bites</h2>
                        <p>Address: Shop no.2 plot no.19-C, Rahat Commercial Lane Phase VI, D.H.A, Karachi</p>
                        <p>Telp. +92 337 8018705</p>
                        <div className="text-left mt-2">
                            <p className="text-xs font-medium mt-1">
                                Order Date: {formattedOrderDateTime}
                            </p>
                        </div>
                    </div>

                    <div className="text-center my-2">
                        <p>----------------------------------</p>
                        <p className="font-bold">KITCHEN RECEIPT</p>
                        <p>----------------------------------</p>
                    </div>

                    <div className="flex justify-between mb-2 border">
                        <p className="font-bold">Description</p>
                        <p className="font-bold">Quantity</p>
                    </div>

                    <div className="mb-2">
                        {orderInfo?.items?.map((item, index) => (
                            <div key={index} className="flex justify-between">
                                <p>{item.name}</p>
                                <p>{item.quantity}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center my-2">
                        <p>----------------------------------</p>
                    </div>

                    <div className="text-center">
                        <p className="font-bold">THANK YOU!</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button
                        onClick={() => setActiveReceipt("sales")} // Show Sales Receipt
                        className="text-blue-500 hover:underline text-sm px-4 py-2 rounded-lg"
                    >
                        Sales Receipt
                    </button>
                    <button
                        onClick={() => setActiveReceipt("kitchen")} // Show Kitchen Receipt
                        className="text-green-500 hover:underline text-sm px-4 py-2 rounded-lg"
                    >
                        Kitchen Receipt
                    </button>
                    <button
                        onClick={() => setShowInvoice(false)} // Close the modal
                        className="text-red-500 hover:underline text-sm px-4 py-2 rounded-lg"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Receipt;