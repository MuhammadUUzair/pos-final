import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalPrice } from '../../redux/slice/cartSlice';
import { enqueueSnackbar } from 'notistack';
import { useMutation } from '@tanstack/react-query';
import { addOrder, updateTable } from '../../https';
import { removeAllItems } from '../../redux/slice/cartSlice';
import { removeCustomer } from '../../redux/slice/customerSlice';
import Invoice from "../invoice/Invoice";

const BillInfo = () => {
    const dispatch = useDispatch();
    const customerData = useSelector((state) => state.customer);
    const cartData = useSelector((state) => state.cart);
    const total = useSelector(getTotalPrice);

    const [paymentMethod, setPaymentMethod] = useState('Cash');
    const [tax, setTax] = useState(0);
    const [totalPriceWithTax, setTotalPriceWithTax] = useState(0);
    const [showInvoice, setShowInvoice] = useState(false);
    const [orderInfo, setOrderInfo] = useState(null);
    const [placedOrderData, setPlacedOrderData] = useState(null);
    const [discountPercentage, setDiscountPercentage] = useState(0); 

    useEffect(() => {
        let taxRate;
        if (paymentMethod === 'Cash') {
            taxRate = 15;
        } else if (paymentMethod === 'Online') {
            taxRate = 8;
        } else {
            taxRate = 0;
        }

        // Calculate discount amount first
        const discountAmount = (total * discountPercentage) / 100;
        const discountedTotal = total - discountAmount;

        // Calculate tax on the discounted total
        const calculatedTax = (discountedTotal * taxRate) / 100;

        // Calculate total price with tax after applying discount
        const totalWithTax = discountedTotal + calculatedTax;

        setTax(calculatedTax);
        setTotalPriceWithTax(totalWithTax);
    }, [total, paymentMethod, discountPercentage]);// Add discountPercentage to dependency array

    const handlePlaceOrder = async () => {
        if (!paymentMethod) {
            enqueueSnackbar('Please select payment method!', { variant: 'warning' });
            return;
        }
    
        // Check for table only if it's a Dine-in order
        if (customerData.orderType === 'Dine-in' && !customerData.table) {
            enqueueSnackbar('Please select a table!', { variant: 'warning' });
            return;
        }
    
        if (cartData.length === 0) {
            enqueueSnackbar('Please add items to the cart!', { variant: 'warning' });
            return;
        }
    
        const orderData = {
            orderId: { orderId: customerData.orderId },
            customerDetails: {
                name: customerData.customerName,
                phone: customerData.customerPhone,
                guests: customerData.guests,
                orderType: customerData.orderType,
            },
            orderStatus: 'In Progress',
            bills: {
                total: total,
                tax: tax,
                totalWithTax: totalPriceWithTax,
                discountPercentage: discountPercentage, // Include discount percentage in order data
            },
            items: cartData,
            paymentMethod: paymentMethod,
            table: customerData.table.tableId
        };
    
        // Conditionally include table property
        if (customerData.orderType === 'Dine-in') {
            orderData.table = customerData.table.tableId;
        }
    
        orderMutation.mutate(orderData);
    };

    const orderMutation = useMutation({
        mutationFn: (reqData) => addOrder(reqData),
        onSuccess: (resData) => {
            dispatch(removeAllItems());
            
            const { data } = resData.data;
            console.log('Order data from API:', data);

            setPlacedOrderData(data);
            const tableData = {
                tableId: data.table,
                status: 'Booked',
                orderId: data._id,
            };
            console.log('Table Data:', tableData);

            setTimeout(() => {
                tableUpdateMutation.mutate(tableData);
            }, 1500);

            enqueueSnackbar('Order Placed!', {
                variant: 'success',
            });
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const tableUpdateMutation = useMutation({
        mutationFn: (reqData) => updateTable(reqData),
        onSuccess: (resData) => {
            dispatch(removeCustomer());
            dispatch(removeAllItems());
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handlePrintButton = () => {
        if (placedOrderData) {
            setOrderInfo(placedOrderData);
            setShowInvoice(true);
        } else {
            enqueueSnackbar('Please place an order first!', { variant: 'warning' });
        }
    };
    const handleDiscountChange = (e) => {
        const value = parseFloat(e.target.value) || 0;
        if (value >= 0 && value <= 100) {
            setDiscountPercentage(value);
        }
    };


    return (
        <>
            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Items({cartData.length})</p>
                <h1 className="text-[#f5f5f5] text-md font-bold">Rs {total.toFixed(2)}</h1>
            </div>
            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Tax({paymentMethod === 'Cash' ? '15%' : '8%'})</p>
                <h1 className="text-[#f5f5f5] text-md font-bold">Rs {tax.toFixed(2)}</h1>
            </div>
            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Discount</p>
                <div className="flex items-center gap-2">
                    <input
                        type="number"
                        value={discountPercentage}
                        // onChange={(e) => setDiscountPercentage(parseFloat(e.target.value) || 0)}
                        onChange={handleDiscountChange}
                        className="text-[#f5f5f5] text-md font-bold bg-transparent border border-[#555] rounded-lg px-2 py-1 w-20"
                        
                    />
                </div>
            </div>
            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Total With Tax</p>
                <h1 className="text-[#f5f5f5] text-md font-bold">Rs {totalPriceWithTax.toFixed(2)}</h1>
            </div>
           
            <div className="flex items-center gap-3 px-5 mt-4">
                <button
                    onClick={() => setPaymentMethod('Cash')}
                    className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold ${
                        paymentMethod === 'Cash' ? 'bg-[#383737]' : ''
                    }`}
                >
                    Cash
                </button>
                <button
                    onClick={() => setPaymentMethod('Online')}
                    className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold ${
                        paymentMethod === 'Online' ? 'bg-[#383737]' : ''
                    }`}
                >
                    Online
                </button>
            </div>
            <div className="flex items-center gap-3 px-5 mt-4">
                <button
                    onClick={handlePrintButton}
                    className="bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#f5f5f5] font-semibold text-lg"
                >
                    Print Receipt
                </button>
                <button
                    onClick={handlePlaceOrder}
                    className="bg-[#f6b100] px-4 py-3 w-full rounded-lg text-[#1f1f1f] font-semibold text-lg"
                >
                    Place Order
                </button>
            </div>
            {showInvoice && <Invoice orderInfo={orderInfo} setShowInvoice={setShowInvoice} />}
        </>
    );
};

export default BillInfo;