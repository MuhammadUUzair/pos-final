// import React from 'react'
// import { IoCheckmarkDone } from 'react-icons/io5'
// import { FaCircle } from 'react-icons/fa'
// import { getAvatarName, formatDateAndTme, formatDateAndTimeNew } from '../../utils/index'
// import { useSelector } from 'react-redux';
// import { FaLongArrowAltRight } from 'react-icons/fa'



// const OrderCard = ({key, order}) => {
//     const customerData = useSelector((state) => state.customer);
//     console.log("order data",order)
//   return (
//     <div>
//     <div className='w-[450px] bg-[#262626] p-4 rounded-lg mb-4'>
//             <div className='flex items-center gap-5'>
//             <button className='bg-[#f6b100] p-3 text-xl font-bold rounded-lg'>{getAvatarName(order.customerDetails.name)}</button>
//             <div className='flex items-center justify-between w-[100%]'> 
//                 <div className='flex flex-col items-start gap-1'>
//                     <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>{order.customerDetails.name}</h1>
//                     <p className='text-[#ababab] text-sm'>
//                         {/* {Math.floor(new Date(order.orderDate ).getTime())}/Dine in */}
//                         {order.orderId?.orderId} / Dine In
                       
//                         </p>
//                     <p className='text-[#ababab] text-sm'>
//                         Table <FaLongArrowAltRight
//                                          className='text-[#ababab] ml-2 inline'/>  {order.table.tableNo}
                       
//                         </p>
//                 </div>
//                 {/* <div>
//                     <h1 className='text-[#f6b100] font-semibold border rounded-lg p-1'>Table No : 3</h1>
//                 </div> */}
//                 <div className='flex flex-col items-end gap-2'>
//                    {
//                     order.orderStatus === "Ready" ?(
//                         <>
//                         <p className=' text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg'>
//                             <IoCheckmarkDone className='inline mr-2'/>{order.orderStatus}</p>
//                         <p className='text-[#ababab] text-sm'>
//                             <FaCircle className='inline mr-2 text-green-600'/>Your Order is Ready</p>
//                         </>
//                     ) : (
//                         <>
//                         <p className=' text-yellow-600 bg-[#4a452e] px-2 py-1 rounded-lg'>
//                             <FaCircle className='inline mr-2'/>{order.orderStatus}</p>
//                         <p className='text-[#ababab] text-sm'>
//                             <FaCircle className='inline mr-2 text-yellow-600'/>
//                             Now Cooking</p>
//                         </>
//                     )

//                    }
//                 </div>
//             </div>
        
//         </div>
//         <div className='flex justify-between items-center mt-4 text-[#ababab]'>
//             <p>{formatDateAndTme(order.createdAt)}</p>
//             <p>{order.items.length}</p>
//         </div>
//         <hr className='text-[#f5f5f5] mt-4 border-t-1 border-gray-500'/>

//         <div className='flex items-center justify-between mt-4'>
//             <h1 className='text-[#f5f5f5] text-lg semi-bold'>Total</h1>
//             <p className='text-[#f5f5f5] text-lg font-semi-bold'>Rs {order.bills.totalWithTax.toFixed(2)}</p>
//         </div>
//             </div>
        
//     </div>
//   )
// }

// export default OrderCard




// import React from 'react'
// import { IoCheckmarkDone } from 'react-icons/io5'
// import { FaCircle } from 'react-icons/fa'
// import { getAvatarName, formatDateAndTme, formatDateAndTimeNew } from '../../utils/index'
// import { useSelector } from 'react-redux';
// import { FaLongArrowAltRight } from 'react-icons/fa'



// const OrderCard = ({key, order}) => {
//     const customerData = useSelector((state) => state.customer);
//     console.log("order data",order)
//   return (
//     <div>
//     <div className='w-[450px] bg-[#262626] p-4 rounded-lg mb-20'>
//             <div className='flex items-center gap-5'>
//             <button className='bg-[#f6b100] p-3 text-xl font-bold rounded-lg'>{getAvatarName(order.customerDetails.name)}</button>
//             <div className='flex items-center justify-between w-[100%]'> 
//                 <div className='flex flex-col items-start gap-1'>
//                     <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>{order.customerDetails.name}</h1>
//                     <p className='text-[#ababab] text-sm'>
//                         {/* {Math.floor(new Date(order.orderDate ).getTime())}/Dine in */}
//                         #{order.orderId?.orderId} / {order.customerDetails.orderType}
                       
//                         </p>
//                         {order.table && (
//                                 <p className='text-[#ababab] text-sm'>
//                                     Table <FaLongArrowAltRight className='text-[#ababab] ml-2 inline' /> {order.table.tableNo}
//                                 </p>
//                             )}
//                 </div>
//                 {/* <div>
//                     <h1 className='text-[#f6b100] font-semibold border rounded-lg p-1'>Table No : 3</h1>
//                 </div> */}
//                 <div className='flex flex-col items-end gap-2'>
//                    {
//                     order.orderStatus === "Ready" ?(
//                         <>
//                         <p className=' text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg'>
//                             <IoCheckmarkDone className='inline mr-2'/>{order.orderStatus}</p>
//                         <p className='text-[#ababab] text-sm'>
//                             <FaCircle className='inline mr-2 text-green-600'/>Order Ready</p>
//                         </>
//                     ) : (
//                         <>
//                         <p className=' text-yellow-600 bg-[#4a452e] px-2 py-1 rounded-lg'>
//                             <FaCircle className='inline mr-2'/>{order.orderStatus}</p>
//                         <p className='text-[#ababab] text-sm'>
//                             <FaCircle className='inline mr-2 text-yellow-600'/>
//                             Now Cooking</p>
//                         </>
//                     )

//                    }
//                 </div>
//             </div>
        
//         </div>
//         <div className='flex justify-between items-center mt-4 text-[#ababab]'>
//             <p>{formatDateAndTme(order.createdAt)}</p>
//             <p>Items {order.items.length}</p>
//         </div>
//         <hr className='text-[#f5f5f5] mt-4 border-t-1 border-gray-500'/>

//         <div className='flex items-center justify-between mt-4'>
//             <h1 className='text-[#f5f5f5] text-lg semi-bold'>Total</h1>
//             <p className='text-[#f5f5f5] text-lg font-semi-bold'>Rs {order.bills.totalWithTax.toFixed(2)}</p>
//         </div>
//             </div>
        
//     </div>
//   )
// }

// export default OrderCard



// import React, { useState } from "react";
// import { IoCheckmarkDone } from "react-icons/io5";
// import { FaCircle, FaEllipsisV } from "react-icons/fa";
// import { getAvatarName, formatDateAndTme } from "../../utils/index";
// import { useSelector, useDispatch } from "react-redux";
// import { FaLongArrowAltRight } from "react-icons/fa";
// import { updateOrder, deleteOrder } from "../../https/index"; // Add API functions
// import { enqueueSnackbar } from "notistack";

// const OrderCard = ({ order }) => {
//     const customerData = useSelector((state) => state.customer);
//     const dispatch = useDispatch();
//     const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility

//     // Handle order status change
//     const handleStatusChange = async (newStatus) => {
//         try {
//             const response = await updateOrder(order._id, { status: newStatus });
//             console.log("Order status updated:", response);
//             enqueueSnackbar(`Order status updated to ${newStatus}`, { variant: "success" });
//             setShowDropdown(false); // Close dropdown after selection
//         } catch (error) {
//             console.error("Error updating order status:", error);
//             enqueueSnackbar("Failed to update order status", { variant: "error" });
//         }
//     };

//     // Handle order deletion
//     const handleDeleteOrder = async () => {
//         try {
//             const response = await deleteOrder(order._id);
//             console.log("Order deleted:", response);
//             enqueueSnackbar("Order deleted successfully", { variant: "success" });
//             setShowDropdown(false); // Close dropdown after deletion
//         } catch (error) {
//             console.error("Error deleting order:", error);
//             enqueueSnackbar("Failed to delete order", { variant: "error" });
//         }
//     };

//     return (
//         <div>
//             <div className="w-[450px] bg-[#262626] p-4 rounded-lg mb-20 relative">
//                 {/* Dropdown Menu */}
//                 <div className="absolute top-6 right-1 ">
//                     <button
//                         onClick={() => setShowDropdown(!showDropdown)}
//                         className="text-[#ababab] hover:text-[#f5f5f5] "
//                     >
//                         <FaEllipsisV />
//                     </button>
//                     {showDropdown && (
//                         <div className="absolute right-0 mt-2 w-48 bg-[#383838] rounded-lg shadow-lg z-10">
//                             <button
//                                 onClick={() => handleStatusChange("In Progress")}
//                                 className="block w-full text-left px-4 py-2 text-[#f5f5f5] hover:bg-[#4a452e]"
//                             >
//                                 In Progress
//                             </button>
//                             <button
//                                 onClick={() => handleStatusChange("Ready")}
//                                 className="block w-full text-left px-4 py-2 text-[#f5f5f5] hover:bg-[#4a452e]"
//                             >
//                                 Ready
//                             </button>
//                             <button
//                                 onClick={() => handleStatusChange("Completed")}
//                                 className="block w-full text-left px-4 py-2 text-[#f5f5f5] hover:bg-[#4a452e]"
//                             >
//                                 Completed
//                             </button>
//                             <button
//                                 onClick={handleDeleteOrder}
//                                 className="block w-full text-left px-4 py-2 text-red-500 hover:bg-[#4a452e]"
//                             >
//                                 Delete Order
//                             </button>
//                         </div>
//                     )}
//                 </div>

//                 {/* Order Card Content */}
//                 <div className="flex items-center gap-5">
//                     <button className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg">
//                         {getAvatarName(order.customerDetails.name)}
//                     </button>
//                     <div className="flex items-center justify-between w-[100%]">
//                         <div className="flex flex-col items-start gap-1">
//                             <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
//                                 {order.customerDetails.name}
//                             </h1>
//                             <p className="text-[#ababab] text-sm">
//                                 #{order.orderId?.orderId} / {order.customerDetails.orderType}
//                             </p>
//                             {order.table && (
//                                 <p className="text-[#ababab] text-sm">
//                                     Table <FaLongArrowAltRight className="text-[#ababab] ml-2 inline" />{" "}
//                                     {order.table.tableNo}
//                                 </p>
//                             )}
//                         </div>
//                         <div className="flex flex-col items-end gap-2">
//                             {order.orderStatus === "Ready" ? (
//                                 <>
//                                     <p className="text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg">
//                                         <IoCheckmarkDone className="inline mr-2" />
//                                         {order.orderStatus}
//                                     </p>
//                                     <p className="text-[#ababab] text-sm">
//                                         <FaCircle className="inline mr-2 text-green-600" />
//                                         Order Ready
//                                     </p>
//                                 </>
//                             ) : (
//                                 <>
//                                     <p className="text-yellow-600 bg-[#4a452e] px-2 py-1 rounded-lg">
//                                         <FaCircle className="inline mr-2" />
//                                         {order.orderStatus}
//                                     </p>
//                                     <p className="text-[#ababab] text-sm">
//                                         <FaCircle className="inline mr-2 text-yellow-600" />
//                                         Now Cooking
//                                     </p>
//                                 </>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex justify-between items-center mt-4 text-[#ababab]">
//                     <p>{formatDateAndTme(order.createdAt)}</p>
//                     <p>{order.items.length}</p>
//                 </div>
//                 <hr className="text-[#f5f5f5] mt-4 border-t-1 border-gray-500" />

//                 <div className="flex items-center justify-between mt-4">
//                     <h1 className="text-[#f5f5f5] text-lg semi-bold">Total</h1>
//                     <p className="text-[#f5f5f5] text-lg font-semi-bold">
//                         Rs {order.bills.totalWithTax.toFixed(2)}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OrderCard;


// import React from "react";
// import { IoCheckmarkDone } from "react-icons/io5";
// import { FaCircle } from "react-icons/fa";
// import { getAvatarName, formatDateAndTme } from "../../utils/index";
// import { useSelector } from "react-redux";
// import { FaLongArrowAltRight } from "react-icons/fa";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { updateOrder } from "../../https/index"; // Import the updateOrder function
// import { enqueueSnackbar } from "notistack";
// import { MdFileDownloadDone } from "react-icons/md";

// const OrderCard = ({ order }) => {
//     const customerData = useSelector((state) => state.customer);
//     const queryClient = useQueryClient();

//     // Mutation for updating order status
//     const orderStatusUpdateMutation = useMutation({
//         mutationFn: ({ orderId, orderStatus }) => {
//             return updateOrder({ orderId, orderStatus });
//         },
//         onSuccess: (data) => {
//             enqueueSnackbar("Order status updated successfully!", { variant: "success" });
//             queryClient.invalidateQueries(["orders"]); // Refresh the orders list
//         },
//         onError: (error) => {
//             console.error("Error updating order status:", error);
//             enqueueSnackbar("Failed to update order status!", { variant: "error" });
//         },
//     });

//     // Handle order status change
//     const handleStatusChange = (newStatus) => {
//         orderStatusUpdateMutation.mutate({ orderId: order._id, orderStatus: newStatus });
//     };

//     return (
//         <div className="w-[450px] bg-[#262626] p-4 rounded-lg mb-20">
//             <div className="flex items-center gap-5">
//                 <button className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg">
//                     {getAvatarName(order.customerDetails.name)}
//                 </button>
//                 <div className="flex items-center justify-between w-[100%]">
//                     <div className="flex flex-col items-start gap-1">
//                         <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
//                             {order.customerDetails.name}
//                         </h1>
//                         <p className="text-[#ababab] text-sm">
//                             #{order.orderId?.orderId} / {order.customerDetails.orderType}
//                         </p>
//                         {order.table && (
//                             <p className="text-[#ababab] text-sm">
//                                 Table <FaLongArrowAltRight className="text-[#ababab] ml-2 inline" />{" "}
//                                 {order.table.tableNo}
//                             </p>
//                         )}
//                     </div>
//                     <div className="flex flex-col items-end gap-2">
//                         {/* Dropdown for order status */}
//                         <select
//                             className={`bg-[#1a1a1a] text-[#f5f5f5] border border-gray-500 p-2 rounded-lg focus:outline-none ${
//                                 order.orderStatus === "Ready"
//                                     ? "text-green-500"
//                                     : order.orderStatus === "Completed"
//                                     ? "text-blue-500"
//                                     : "text-yellow-500"
//                             }`}
//                             value={order.orderStatus}
//                             onChange={(e) => handleStatusChange(e.target.value)}
//                         >
//                             <option className="text-yellow-500" value="In Progress">
//                                 In Progress
//                             </option>
//                             <option className="text-green-500" value="Ready">
//                                 Ready
//                             </option>
//                             <option className="text-blue-500" value="Completed">
//                                 Completed
//                             </option>
//                         </select>
//                         <p className="text-[#ababab] text-sm">
//     {order.orderStatus === "Ready" ? (
//         <>
//             <FaCircle className="inline mr-2 text-green-600" />
//             Order Ready
//         </>
//     ) : order.orderStatus === "Completed" ? (
//         <>
//             <MdFileDownloadDone className="inline mr-2 text-blue-600" />
//             Order Completed
//         </>
//     ) : (
//         <>
//             <FaCircle className="inline mr-2 text-yellow-600" />
//             Now Cooking
//         </>
//     )}
// </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex justify-between items-center mt-4 text-[#ababab]">
//                 <p>{formatDateAndTme(order.createdAt)}</p>
//                 <p>{order.items.length} Items</p>
//             </div>
//             <hr className="text-[#f5f5f5] mt-4 border-t-1 border-gray-500" />

//             <div className="flex items-center justify-between mt-4">
//                 <h1 className="text-[#f5f5f5] text-lg semi-bold">Total</h1>
//                 <p className="text-[#f5f5f5] text-lg font-semi-bold">
//                     Rs {order.bills.totalWithTax.toFixed(2)}
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default OrderCard;


// import React from "react";
// import { IoCheckmarkDone } from "react-icons/io5";
// import { FaCircle } from "react-icons/fa";
// import { getAvatarName, formatDateAndTme } from "../../utils/index";
// import { useSelector } from "react-redux";
// import { FaLongArrowAltRight } from "react-icons/fa";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { updateOrder, deleteOrder } from "../../https/index"; // Import deleteOrder function
// import { enqueueSnackbar } from "notistack";
// import { MdFileDownloadDone } from "react-icons/md";

// const OrderCard = ({ order }) => {
//     const customerData = useSelector((state) => state.customer);
//     const queryClient = useQueryClient();

//     // Mutation for updating order status
//     const orderStatusUpdateMutation = useMutation({
//         mutationFn: ({ orderId, orderStatus }) => {
//             return updateOrder({ orderId, orderStatus });
//         },
//         onSuccess: (data) => {
//             enqueueSnackbar("Order status updated successfully!", { variant: "success" });
//             queryClient.invalidateQueries(["orders"]); // Refresh the orders list
//         },
//         onError: (error) => {
//             console.error("Error updating order status:", error);
//             enqueueSnackbar("Failed to update order status!", { variant: "error" });
//         },
//     });

//     // Mutation for deleting an order
//     const deleteOrderMutation = useMutation({
//         mutationFn: (orderId) => {
//             return deleteOrder(orderId); // Call the deleteOrder API
//         },
//         onSuccess: (data) => {
//             enqueueSnackbar("Order deleted successfully!", { variant: "success" });
//             queryClient.invalidateQueries(["orders"]); // Refresh the orders list
//         },
//         onError: (error) => {
//             console.error("Error deleting order:", error);
//             enqueueSnackbar("Failed to delete order!", { variant: "error" });
//         },
//     });

//     // Handle order status change
//     const handleStatusChange = (newStatus) => {
//         if (newStatus === "delete") {
//             // Handle delete action
//             if (window.confirm("Are you sure you want to delete this order?")) {
//                 deleteOrderMutation.mutate(order._id);
//             }
//         } else {
//             // Handle status update
//             orderStatusUpdateMutation.mutate({ orderId: order._id, orderStatus: newStatus });
//         }
//     };

//     return (
//         <div className="w-[450px] bg-[#262626] p-4 rounded-lg mb-20">
//             <div className="flex items-center gap-5">
//                 <button className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg">
//                     {getAvatarName(order.customerDetails.name)}
//                 </button>
//                 <div className="flex items-center justify-between w-[100%]">
//                     <div className="flex flex-col items-start gap-1">
//                         <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
//                             {order.customerDetails.name}
//                         </h1>
//                         <p className="text-[#ababab] text-sm">
//                             #{order.orderId?.orderId} / {order.customerDetails.orderType}
//                         </p>
//                         {order.table && (
//                             <p className="text-[#ababab] text-sm">
//                                 Table <FaLongArrowAltRight className="text-[#ababab] ml-2 inline" />{" "}
//                                 {order.table.tableNo}
//                             </p>
//                         )}
//                     </div>
//                     <div className="flex flex-col items-end gap-2">
//                         {/* Dropdown for order status and delete option */}
//                         <select
//                             className={`bg-[#1a1a1a] text-[#f5f5f5] border border-gray-500 p-2 rounded-lg focus:outline-none ${
//                                 order.orderStatus === "Ready"
//                                     ? "text-green-500"
//                                     : order.orderStatus === "Completed"
//                                     ? "text-blue-500"
//                                     : "text-yellow-500"
//                             }`}
//                             value={order.orderStatus}
//                             onChange={(e) => handleStatusChange(e.target.value)}
//                         >
//                             <option className="text-yellow-500" value="In Progress">
//                                 In Progress
//                             </option>
//                             <option className="text-green-500" value="Ready">
//                                 Ready
//                             </option>
//                             <option className="text-blue-500" value="Completed">
//                                 Completed
//                             </option>
//                             <option className="text-red-500" value="delete">
//                                 Delete Order
//                             </option>
//                         </select>
//                         <p className="text-[#ababab] text-sm">
//                             {order.orderStatus === "Ready" ? (
//                                 <>
//                                     <FaCircle className="inline mr-2 text-green-600" />
//                                     Order Ready
//                                 </>
//                             ) : order.orderStatus === "Completed" ? (
//                                 <>
//                                     <MdFileDownloadDone className="inline mr-2 text-blue-600" />
//                                     Order Completed
//                                 </>
//                             ) : (
//                                 <>
//                                     <FaCircle className="inline mr-2 text-yellow-600" />
//                                     Now Cooking
//                                 </>
//                             )}
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex justify-between items-center mt-4 text-[#ababab]">
//                 <p>{formatDateAndTme(order.createdAt)}</p>
//                 <p>{order.items.length} Items</p>
//             </div>
//             <hr className="text-[#f5f5f5] mt-4 border-t-1 border-gray-500" />

//             <div className="flex items-center justify-between mt-4">
//                 <h1 className="text-[#f5f5f5] text-lg semi-bold">Total</h1>
//                 <p className="text-[#f5f5f5] text-lg font-semi-bold">
//                     Rs {order.bills.totalWithTax.toFixed(2)}
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default OrderCard;


import React from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { getAvatarName, formatDateAndTme } from "../../utils/index";
import { useSelector } from "react-redux";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrder, deleteOrder, updateTable } from "../../https/index"; // Import updateTable function
import { enqueueSnackbar } from "notistack";
import { MdFileDownloadDone } from "react-icons/md";

const OrderCard = ({ order }) => {
    const customerData = useSelector((state) => state.customer);
    const queryClient = useQueryClient();

    // Mutation for updating order status
    const orderStatusUpdateMutation = useMutation({
        mutationFn: ({ orderId, orderStatus }) => {
            return updateOrder({ orderId, orderStatus });
        },
        onSuccess: (data, variables) => {
            enqueueSnackbar("Order status updated successfully!", { variant: "success" });
            queryClient.invalidateQueries(["orders"]); // Refresh the orders list

            // If the order status is changed to "Completed", update the table status
            if (variables.orderStatus === "Completed" && order.table) {
                updateTableMutation.mutate({ tableId: order.table._id, status: "Available" });
            }
        },
        onError: (error) => {
            console.error("Error updating order status:", error);
            enqueueSnackbar("Failed to update order status!", { variant: "error" });
        },
    });

    // Mutation for updating table status
    const updateTableMutation = useMutation({
        mutationFn: ({ tableId, status }) => {
            return updateTable({ tableId, status });
        },
        onSuccess: () => {
            enqueueSnackbar("Table status updated successfully!", { variant: "success" });
            queryClient.invalidateQueries(["tables"]); // Refresh the tables list
        },
        onError: (error) => {
            console.error("Error updating table status:", error);
            enqueueSnackbar("Failed to update table status!", { variant: "error" });
        },
    });

    // Mutation for deleting an order
    const deleteOrderMutation = useMutation({
        mutationFn: (orderId) => {
            return deleteOrder(orderId); // Call the deleteOrder API
        },
        onSuccess: (data) => {
            enqueueSnackbar("Order deleted successfully!", { variant: "success" });
            queryClient.invalidateQueries(["orders"]); // Refresh the orders list
        },
        onError: (error) => {
            console.error("Error deleting order:", error);
            enqueueSnackbar("Failed to delete order!", { variant: "error" });
        },
    });

    // Handle order status change
    const handleStatusChange = (newStatus) => {
        if (newStatus === "delete") {
            // Handle delete action
            if (window.confirm("Are you sure you want to delete this order?")) {
                deleteOrderMutation.mutate(order._id);
            }
        } else {
            // Handle status update
            orderStatusUpdateMutation.mutate({ orderId: order._id, orderStatus: newStatus });
        }
    };

    return (
        <div className="w-[450px] bg-[#262626] p-4 rounded-lg mb-20">
            <div className="flex items-center gap-5">
                <button className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg">
                    {getAvatarName(order.customerDetails.name)}
                </button>
                <div className="flex items-center justify-between w-[100%]">
                    <div className="flex flex-col items-start gap-1">
                        <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
                            {order.customerDetails.name}
                        </h1>
                        <p className="text-[#ababab] text-sm">
                            #{order.orderId?.orderId} / {order.customerDetails.orderType}
                        </p>
                        {order.table && (
                            <p className="text-[#ababab] text-sm">
                                Table <FaLongArrowAltRight className="text-[#ababab] ml-2 inline" />{" "}
                                {order.table.tableNo}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        {/* Dropdown for order status and delete option */}
                        <select
                            className={`bg-[#1a1a1a] text-[#f5f5f5] border border-gray-500 p-2 rounded-lg focus:outline-none ${
                                order.orderStatus === "Ready"
                                    ? "text-green-500"
                                    : order.orderStatus === "Completed"
                                    ? "text-blue-500"
                                    : "text-yellow-500"
                            }`}
                            value={order.orderStatus}
                            onChange={(e) => handleStatusChange(e.target.value)}
                        >
                            <option className="text-yellow-500" value="In Progress">
                                In Progress
                            </option>
                            <option className="text-green-500" value="Ready">
                                Ready
                            </option>
                            <option className="text-blue-500" value="Completed">
                                Completed
                            </option>
                            <option className="text-red-500" value="delete">
                                Delete Order
                            </option>
                        </select>
                        <p className="text-[#ababab] text-sm">
                            {order.orderStatus === "Ready" ? (
                                <>
                                    <FaCircle className="inline mr-2 text-green-600" />
                                    Order Ready
                                </>
                            ) : order.orderStatus === "Completed" ? (
                                <>
                                    <MdFileDownloadDone className="inline mr-2 text-blue-600" />
                                    Order Completed
                                </>
                            ) : (
                                <>
                                    <FaCircle className="inline mr-2 text-yellow-600" />
                                    Now Cooking
                                </>
                            )}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-4 text-[#ababab]">
                <p>{formatDateAndTme(order.createdAt)}</p>
                <p>{order.items.length} Items</p>
            </div>
            <hr className="text-[#f5f5f5] mt-4 border-t-1 border-gray-500" />

            <div className="flex items-center justify-between mt-4">
                <h1 className="text-[#f5f5f5] text-lg semi-bold">Total</h1>
                <p className="text-[#f5f5f5] text-lg font-semi-bold">
                    Rs {order.bills.totalWithTax.toFixed(2)}
                </p>
            </div>
        </div>
    );
};

export default OrderCard;