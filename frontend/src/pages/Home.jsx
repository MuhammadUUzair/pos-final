


import React from "react";
import BottomNav from "../components/shared/BottomNav";
import Greetings from "../components/Home/Greetings";
import Minicard from "../components/Home/Minicard";
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import RecentOrder from "../components/Home/RecentOrder";
import PopularDishes from "../components/Home/PopularDishes";
import { getOrders } from "../https/index";
import { keepPreviousData, useQuery } from "@tanstack/react-query";




const Home = () => {

        // Fetch orders using useQuery
        const { data: resData, isError, isLoading } = useQuery({
            queryKey: ["orders"],
            queryFn: async () => {
                const response = await getOrders();
                console.log("Orders API Response:", response); // Log the full API response
                return response;
            },
            placeholderData: keepPreviousData
        });
    
        // Calculate the number of orders in progress
        const ordersInProgress = resData?.data?.data?.filter(
            (order) => order.orderStatus === "In Progress"
        ).length || 0;

        // Calculate the total revenue from completed orders
        const totalRevenue = resData?.data.data
            ?.filter((order) => order.orderStatus === "Complete")
            .reduce((total, order) => total + order.bills.totalWithTax, 0) || 0;
    



        // Handle errors
        if (isError) {
            enqueueSnackbar("Failed to fetch orders!", { variant: "error" });
        }

    return (

        <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">

            {/* LEFT DIV */}
            <div className="flex-[3] ">

                <Greetings />

                <div className="flex items-center w-full gap-3 px-8 mt-8">
                     {/* Total Revenue Minicard */}
                     <Minicard
                        title="Total Earnings"
                        icon={<BsCashCoin />}
                        number={totalRevenue.toFixed(2)} // Display total revenue
                        footernum={1.6} // You can calculate this dynamically if needed
                    />

                    {/* Orders in Progress Minicard */}
                    <Minicard
                        title="In Progress"
                        icon={<GrInProgress />}
                        number={ordersInProgress} // Display number of orders in progress
                        footernum={3.6} // You can calculate this dynamically if needed
                    />
                </div>
                <RecentOrder/>
            </div>
            {/* RIGHT DIV */}
            <div className="flex-[2] ">
                <PopularDishes/>
            </div>

            {/* for BottomNav */}
            <BottomNav/>
        </section>
    )
}

export default Home