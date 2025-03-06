import React from 'react'
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getOrders } from "../../https/index";

const Minicard = ({title, icon , number , footernum}) => {


  return (
    <div className='bg-[#1a1a1a] py-5 px-5 rounded-lg w-[50%]'>
     <div className='flex items-start justify-between'>
        <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>{title}</h1>
        <button className={`${title === "Total Earnings" ? "bg-[#02ca3a] " : "bg-[#f6b100]"} p-3 rounded`}>{icon}</button>
     </div>
     <div>
        <h1 className='text-[#f5f5f5] text-4xl font-bold mt-5'>{
        title ==="Total Earnings" ? `Rs ${number}` :number}</h1>
        <h1 className='text-[#f5f5f5] text-lg mt-2'><span className='text-[#02ca3a]'>{footernum}%</span> than yesterday</h1>
     </div>
    </div>
  )
}

export default Minicard


// import React from 'react';
// import { keepPreviousData, useQuery } from '@tanstack/react-query';
// import { getOrders } from '../../https/index';
// import { enqueueSnackbar } from 'notistack'; // Ensure this is imported

// const Minicard = ({ title, icon, number, footernum }) => {
//     // Fetch orders using useQuery
//     const { data: resData, isError } = useQuery({
//         queryKey: ['orders'],
//         queryFn: async () => {
//             const response = await getOrders();
//             console.log('Orders API Response for minicard:', response); // Log the full API response
//             return response;
//         },
//         placeholderData: keepPreviousData,
//     });

//     // Log the fetched orders data
//     React.useEffect(() => {
//         if (resData) {
//             console.log('Fetched Orders Data:', resData.data); // Log the fetched orders data
//         }
//     }, [resData]);

//     // Handle errors
//     if (isError) {
//         enqueueSnackbar('Something went wrong!', { variant: 'error' });
//     }

//     return (
//         <div className="bg-[#1a1a1a] py-5 px-5 rounded-lg w-[50%]">
//             <div className="flex items-start justify-between">
//                 <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
//                     {title}
//                 </h1>
//                 <button
//                     className={`${
//                         title === 'Total Earnings'
//                             ? 'bg-[#02ca3a]'
//                             : 'bg-[#f6b100]'
//                     } p-3 rounded`}
//                 >
//                     {icon}
//                 </button>
//             </div>
//             <div>
//                 <h1 className="text-[#f5f5f5] text-4xl font-bold mt-5">
//                     {title === 'Total Earnings' ? `Rs ${number}` : number}
//                 </h1>
//                 <h1 className="text-[#f5f5f5] text-lg mt-2">
//                     <span className="text-[#02ca3a]">{footernum}%</span> than
//                     yesterday
//                 </h1>
//             </div>
//         </div>
//     );
// };

// export default Minicard;


