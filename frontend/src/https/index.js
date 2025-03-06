// import axios from "axios";


// const api = axios.create({
//     baseURL: import.meta.env.VITE_BACKEND_URL,
//     withCredentials: true,
//     headers:{
//         "Content-Type": "application/json",
//         Accept: "application/json"
//     }
// });

// //API End point

// console.log(import.meta.env.VITE_BACKEND_URL);


// export const login = (data) => api.post("/api/user/login", data);
// export const register = (data) => api.post("/api/user/register", data);
// export const getUserData = (data) => api.get("/api/user");
// export const logout = (data) => api.post("/api/user/logout");

// // Table Endpoint 
// export const addTable = (data) => api.post("/api/table/", data);
// export const getTable = (data) => api.get("/api/table");

// export const updateTable = (tableData) => {
//     const { tableId, ...rest } = tableData; // Destructure tableId and other data
//     return api.put(`/api/table/${tableId}`, rest); // Use tableId in URL and rest as body
//   };


// // Order endpoint 
// export const addOrder = (data) => api.post ("/api/order", data);
// export const getOrders = () => api.get("/api/order");
// export const updateOrder = ({orderId, orderStatus}) => api.put(`/api/order/${orderId}`,{orderStatus});
// // Delete an order
// export const deleteOrder = (orderId) => api.delete(`/api/order/${orderId}`);





// // Category endpoint
// export const addCategory = (data) => api.post("/api/category", data);
// export const getCategories = () => api.get("/api/category")

// //Dish endpoint
// export const addDish = (data) => api.post("/api/dish", data);

// export const getDishes = (categoryId) => api.get(`api/dish/category/${categoryId}`);


// import axios from "axios";

// const api = axios.create({
//     baseURL: import.meta.env.VITE_BACKEND_URL,
//     withCredentials: true,
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//     }
// });

// //API End point

// console.log(import.meta.env.VITE_BACKEND_URL);

// export const login = (data) => api.post("/api/user/login", data);
// export const register = (data) => api.post("/api/user/register", data);
// export const getUserData = (data) => api.get("/api/user");
// export const logout = (data) => api.post("/api/user/logout");

// // Table Endpoint
// export const addTable = (data) => api.post("/api/table/", data);
// export const getTable = () => api.get("/api/table");

// export const updateTable = (tableData) => {
//     const { _id, ...rest } = tableData; // Destructure _id and other data
//     return api.put(`/api/table/${_id}`, rest); // Use _id in URL and rest as body
// };

// export const deleteTable = (tableId) => api.delete(`/api/table/${tableId}`);

// // Order endpoint
// export const addOrder = (data) => api.post("/api/order", data);
// export const getOrders = () => api.get("/api/order");
// export const updateOrder = ({ orderId, orderStatus }) => api.put(`/api/order/${orderId}`, { orderStatus });
// // Delete an order
// export const deleteOrder = (orderId) => api.delete(`/api/order/${orderId}`);

// // Category endpoint
// export const addCategory = (data) => api.post("/api/category", data);
// export const getCategories = () => api.get("/api/category");
// export const updateCategory = (categoryData) => {
//     const { _id, ...rest } = categoryData;
//     return api.put(`/api/category/${_id}`, rest);
// };
// export const deleteCategory = (categoryId) => api.delete(`/api/category/${categoryId}`);

// //Dish endpoint
// export const addDish = (data) => api.post("/api/dish", data);
// // export const getDishes = (categoryId) => api.get(`api/dish/category/${categoryId}`);

// export const getDishes = () => api.get("/api/dish");
// export const updateDish = (dishData) => {
//     const { _id, ...rest } = dishData;
//     return api.put(`/api/dish/${_id}`, rest);
// };
// export const deleteDish = (dishId) => api.delete(`/api/dish/${dishId}`);

import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// API Endpoints

// User Endpoints
export const login = (data) => api.post("/api/user/login", data);
export const register = (data) => api.post("/api/user/register", data);
export const getUserData = () => api.get("/api/user");
export const logout = () => api.post("/api/user/logout");

// Table Endpoints
export const addTable = (data) => api.post("/api/table", data);
export const getTable = () => api.get("/api/table");
// export const updateTable = (tableData) => {
//     const { _id, ...rest } = tableData;
//     return api.put(`/api/table/${_id}`, rest);
// };
export const updateTable = ({tableId, ...tableData}) => api.put(`/api/table/${tableId}`, tableData)

export const deleteTable = (tableId) => api.delete(`/api/table/${tableId}`);

// Order Endpoints
export const addOrder = (data) => api.post("/api/order", data);
export const getOrders = () => api.get("/api/order");
export const updateOrder = ({ orderId, orderStatus }) =>
    api.put(`/api/order/${orderId}`, { orderStatus });
export const deleteOrder = (orderId) => api.delete(`/api/order/${orderId}`);

// Category Endpoints
export const addCategory = (data) => api.post("/api/category", data);
export const getCategories = () => api.get("/api/category");
export const updateCategory = (categoryData) => {
    const { _id, ...rest } = categoryData;
    return api.put(`/api/category/${_id}`, rest);
};
export const deleteCategory = (categoryId) => api.delete(`/api/category/${categoryId}`);

// Dish Endpoints
export const addDish = (data) => api.post("/api/dish", data);
export const getDishes = () => api.get("/api/dish");
export const getDishesByCategory = (categoryId) => api.get(`/api/dish/category/${categoryId}`);
export const updateDish = (dishData) => {
    const { _id, ...rest } = dishData;
    return api.put(`/api/dish/${_id}`, rest);
};
export const deleteDish = (dishId) => api.delete(`/api/dish/${dishId}`);