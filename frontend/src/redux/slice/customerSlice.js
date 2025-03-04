import {createSlice} from "@reduxjs/toolkit";


const initialState = {

    orderId: "",
    customerName: "",
    customerPhone: "",
    guests: 0,
    table: null,
    orderPlacedAt:"",
    orderType:""


}

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers : {
        setCustomer : (state, action) => {
            const { name, phone ,guests, orderType} = action.payload;
            state.orderId = `${Date.now()}`;
            state.customerName = name;
            state.customerPhone = phone;
            state.guests = guests;
            state.orderPlacedAt = new Date();
            state.orderType = orderType;

            
        },

        removeCustomer : (state) => {
            state.customerName = "";
            state.customerPhone = "";
            state.guests = 0;
            state.table = null;
        },
        updateTable : (state,action) => {
            state.table = action.payload.table;
        }
    }
});

export const { setCustomer, removeCustomer, updateTable} = customerSlice.actions;
export default customerSlice.reducer    