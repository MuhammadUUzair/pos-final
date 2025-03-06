import React from "react";
import { formatDateAndTme } from '../../utils/index';
import { GrUpdate } from "react-icons/gr";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getOrders, updateOrder, updateTable, deleteOrder } from "../../https"; // Import deleteOrder
import { enqueueSnackbar } from 'notistack'; // Ensure this is imported

const RecentOrders = () => {
  const queryClient = useQueryClient();

  // Mutation for updating order status
  const orderStatusUpdateMutation = useMutation({
    mutationFn: ({ orderId, orderStatus }) => {
      console.log("Mutation Function Called - Order ID:", orderId, "Status:", orderStatus); // Debugging
      return updateOrder({ orderId, orderStatus });
    },
    onSuccess: (data, variables) => {
      console.log("Mutation Success - Response Data:", data); // Debugging
      enqueueSnackbar("Order status updated Successfully!", { variant: "success" });
      queryClient.invalidateQueries(['orders']).then(() => {
        console.log("Orders query invalidated and refetched"); // Debugging
      });

      // If the order status is changed to "Completed", update the table status
      if (variables.orderStatus === "Completed" && variables.tableId) {
        updateTableMutation.mutate({ tableId: variables.tableId, status: "Available" });
      }
    },
    onError: (error) => {
      console.error("Mutation Error:", error); // Debugging
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
    onSuccess: () => {
      enqueueSnackbar("Order deleted successfully!", { variant: "success" });
      queryClient.invalidateQueries(["orders"]); // Refresh the orders list
    },
    onError: (error) => {
      console.error("Error deleting order:", error);
      enqueueSnackbar("Failed to delete order!", { variant: "error" });
    },
  });

  const handleStatusChange = ({ orderId, orderStatus, tableId }) => {
    console.log("Updating order status - Order ID:", orderId, "New Status:", orderStatus); // Debugging

    if (orderStatus === "delete") {
      // Handle delete action
      if (window.confirm("Are you sure you want to delete this order?")) {
        deleteOrderMutation.mutate(orderId);
      }
    } else {
      // Handle status update
      orderStatusUpdateMutation.mutate({ orderId, orderStatus, tableId });
    }
  };

  const { data: resData, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      console.log("Fetching orders from the server..."); // Debugging
      const data = await getOrders();
      console.log("Fetched Orders:", data); // Debugging
      return data;
    },
    placeholderData: keepPreviousData,
    onSuccess: (data) => {
      console.log("Orders fetched successfully:", data); // Debugging
    },
    onError: (error) => {
      console.error("Error fetching orders:", error); // Debugging
    },
  });

  if (isError) {
    enqueueSnackbar("Something went wrong!", { variant: "error" });
  }

  return (
    <div className="container mx-auto bg-[#262626] p-4 rounded-lg">
      <h2 className="text-[#f5f5f5] text-xl font-semibold mb-4">
        Recent Orders
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-[#f5f5f5]">
          <thead className="bg-[#333] text-[#ababab]">
            <tr>
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date & Time</th>
              <th className="p-3">Items</th>
              <th className="p-3">Table No</th>
              <th className="p-3">Total</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {resData?.data.data.map((order, index) => (
              <tr
                key={index}
                className="border-b border-gray-600 hover:bg-[#333]"
              >
                <td className="p-4">#{order.orderId?.orderId}</td>
                <td className="p-4">{order.customerDetails.name}</td>
                <td className="p-4">
                  <select
                    className={`bg-[#1a1a1a] text-[#f5f5f5] border border-gray-500 p-2 rounded-lg focus:outline-none ${order.orderStatus === "Ready"
                        ? "text-green-500"
                        : order.orderStatus === "Completed"
                          ? "text-blue-500"
                          : "text-yellow-500"
                      }`}
                    value={order.orderStatus} // Ensure this is order.orderStatus, not order.status
                    onChange={(e) =>
                      handleStatusChange({
                        orderId: order._id,
                        orderStatus: e.target.value,
                        tableId: order.table?._id, // Pass tableId if available
                      })
                    }
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
                </td>
                <td className="p-4">{formatDateAndTme(order.createdAt)}</td>
                <td className="p-4">{order.items.length} Items</td>
                 {/* <td className="p-4">


                  Table - {order.table.tableNo}
                </td>  */}
                <td className="p-4">
  {order.orderType === "Dine-in" ? (
    order.table?.tableNo ? ( // Use optional chaining to safely access tableNo
      `Table - ${order.table.tableNo}`
    ) : (
      "N/A" // Or a different message if table is not assigned
    )
  ) : (
    "N/A" // Show N/A for Take Away or Delivery orders
  )}
</td>

                 {/* <td className="p-4">Table - {order.table.tableNo}</td>  */}
                <td className="p-4">Rs {order.bills.totalWithTax}</td>
                <td className="p-4 text-center">
                  <button className="text-blue-400 hover:text-blue-500 transition">
                    <GrUpdate size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
