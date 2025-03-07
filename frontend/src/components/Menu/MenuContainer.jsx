// import React, { useState, useEffect } from 'react';
// import { GrRadialSelected } from 'react-icons/gr';
// import { GiShoppingCart } from 'react-icons/gi';
// import { useDispatch } from 'react-redux';
// import { addItems } from '../../redux/slice/cartSlice';
// import { v4 as uuidv4 } from 'uuid';
// import { useQuery } from '@tanstack/react-query';
// import { getCategories, getDishesByCategory } from '../../https'; // Ensure this is imported
// import { enqueueSnackbar } from 'notistack';

// const MenuContainer = () => {
//   const dispatch = useDispatch();

//   // State for selected category and dishes
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [dishes, setDishes] = useState([]);
//   const [itemCounts, setItemCounts] = useState({}); // State to manage counts for each item

//   // Fetch categories
//   const { data: categories, isError: isCategoriesError, isLoading: isCategoriesLoading } = useQuery({
//     queryKey: ['categories'],
//     queryFn: async () => {
//       const response = await getCategories();
//       console.log('Categories Response:', response); // Log the full response
//       return response.data.data; // Access the nested data
//     },
//     onSuccess: (data) => {
//       // Set the first category as the default selected category
//       if (data && data.length > 0) {
//         setSelectedCategory(data[0]); // Set the default category
//       }
//     },
//   });

//   // Fetch dishes for the selected category
//   useEffect(() => {
//     if (selectedCategory && selectedCategory._id) {
//       const fetchDishes = async () => {
//         try {
//           const response = await getDishesByCategory(selectedCategory._id); // Pass categoryId
//           console.log('Dishes Response:', response); // Log the response
//           setDishes(response.data.data); // Access the nested data
//         } catch (error) {
//           console.error('Error fetching dishes:', error);
//           enqueueSnackbar('Failed to fetch dishes!', { variant: 'error' });
//         }
//       };
//       fetchDishes();
//     }
//   }, [selectedCategory]);

//   // Handle errors for categories fetch
//   if (isCategoriesError) {
//     enqueueSnackbar('Failed to fetch categories!', { variant: 'error' });
//   }

//   // Show loading state while fetching categories
//   if (isCategoriesLoading) {
//     return <div>Loading categories...</div>;
//   }

//   // Increment item count
//   const increment = (id) => {
//     setItemCounts((prevCounts) => ({
//       ...prevCounts,
//       [id]: (prevCounts[id] || 0) + 1,
//     }));
//   };

//   // Decrement item count
//   const decrement = (id) => {
//     setItemCounts((prevCounts) => ({
//       ...prevCounts,
//       [id]: Math.max((prevCounts[id] || 0) - 1, 0),
//     }));
//   };

//   // Add item to cart
//   const handleAddToCart = (item) => {
//     const count = itemCounts[item._id] || 0;
//     if (count === 0) return;
//     const { dishName, dishPrice } = item;
//     const newObj = {
//       id: uuidv4(),
//       name: dishName,
//       pricePerQuantity: dishPrice,
//       quantity: count,
//       price: dishPrice,
//     };
//     dispatch(addItems(newObj));
//     setItemCounts((prevCounts) => ({
//       ...prevCounts,
//       [item._id]: 0, // Reset the count for this item after adding to cart
//     }));
//   };

//   return (
//     <>
//       {/* Menu Categories */}
//       {/* <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%] "> */}
//       <div className="grid grid-cols-4 gap-4 px-10 py-4 overflow-y-scroll h-[240px] hidden-scrollbar ">
//         {categories?.map((category) => {
//           console.log('Rendering Category:', {
//             id: category._id,
//             name: category.categoryName,
//           }); // Log each category being rendered
//           return (
//             <div
//               key={category._id}
//               className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer transition-transform hover:scale-104"
//               style={{ background: '#b73e3e' }} // Add dynamic background colors if needed
//               onClick={() => {
//                 setSelectedCategory(category);
//                 console.log('Selected Category:', {
//                   id: category._id,
//                   name: category.categoryName,
//                 }); // Log the selected category
//               }}
//             >
//               <div className="flex items-center justify-between w-full">
//                 <h1 className="text-[#f5f5f5] text-lg font-semibold">
//                   {category.categoryName}
//                 </h1>
//                 {selectedCategory?._id === category._id && (
//                   <GrRadialSelected className="text-white size={20}" />
//                 )}
//               </div>
//               {/* Display the correct item count for each category */}
//               <p className="text-[#ababab] text-sm font-semibold">
//                 {selectedCategory?._id === category._id ? dishes.length : '0'} Items
//               </p>
//             </div>
//           );
//         })}
//       </div>
//       <hr className="border-[#2a2a2a] border-t-2 mt-4" />

//       {/* Dishes for Selected Category */}
//       <div>
//         {/* <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]"> */}
//         <div className="grid grid-cols-4 gap-4 px-10 py-4 overflow-y-scroll h-auto hidden-scrollbar">
//           {dishes.map((item) => {
//             console.log('Rendering Dish:', {
//               id: item._id,
//               name: item.dishName,
//               price: item.dishPrice,
//             }); // Log each dish being rendered
//             return (
//               <div
//                 key={item._id}
//                 className="flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer transition-transform hover:scale-104 hover:bg-[#2a2a2a] bg-[#1a1a1a]"
//               >
//                 <div className="flex items-start justify-between w-full">
//                   <h1 className="text-[#f5f5f5] text-lg font-semibold">
//                     {item.dishName}
//                   </h1>
//                   <button
//                     onClick={() => handleAddToCart(item)}
//                     className="text-[#02ca3a] cursor-pointer"
//                   >
//                     <GiShoppingCart size={30} />
//                   </button>
//                 </div>

//                 <div className="flex items-center justify-between w-full">
//                   <p className="text-[#f5f5f5] text-xl font-bold">
//                     Rs{item.dishPrice}
//                   </p>
//                   <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg gap-6 z-1">
//                     <button
//                       onClick={() => decrement(item._id)}
//                       className="text-yellow-500 text-2xl cursor-pointer"
//                     >
//                       &minus;
//                     </button>
//                     <span className="text-white">
//                       {itemCounts[item._id] || 0}
//                     </span>
//                     <button
//                       onClick={() => increment(item._id)}
//                       className="text-yellow-500 text-2xl cursor-pointer"
//                     >
//                       &#43;
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default MenuContainer;

// import React, { useState, useEffect } from 'react';
// import { GrRadialSelected } from 'react-icons/gr';
// import { GiShoppingCart } from 'react-icons/gi';
// import { useDispatch } from 'react-redux';
// import { addItems } from '../../redux/slice/cartSlice';
// import { v4 as uuidv4 } from 'uuid';
// import { useQuery } from '@tanstack/react-query';
// import { getCategories, getDishes } from '../../https'; // Import getDishes instead of getDishesByCategory
// import { enqueueSnackbar } from 'notistack';

// const MenuContainer = () => {
//   const dispatch = useDispatch();

//   // State for selected category, all dishes, and filtered dishes
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [allDishes, setAllDishes] = useState([]); // State to store all dishes
//   const [filteredDishes, setFilteredDishes] = useState([]); // State to store filtered dishes
//   const [itemCounts, setItemCounts] = useState({}); // State to manage counts for each item

//   // Fetch categories
//   const { data: categories, isError: isCategoriesError, isLoading: isCategoriesLoading } = useQuery({
//     queryKey: ['categories'],
//     queryFn: async () => {
//       const response = await getCategories();
//       console.log('Categories Response:', response); // Log the full response
//       return response.data.data; // Access the nested data
//     },
//     onSuccess: (data) => {
//       // Set the first category as the default selected category
//       if (data && data.length > 0) {
//         setSelectedCategory(data[0]); // Set the default category
//       }
//     },
//   });

//   // Fetch all dishes once when the component mounts
//   const { data: dishes, isError: isDishesError, isLoading: isDishesLoading } = useQuery({
//     queryKey: ['dishes'],
//     queryFn: async () => {
//       const response = await getDishes(); // Fetch all dishes
//       console.log('Dishes API Response:', response); // Log the response
//       setAllDishes(response.data.data); // Store all dishes in state
//       return response.data.data; // Return the data for useQuery
//     },
//   });

//   // Filter dishes based on the selected category
//   useEffect(() => {
//     if (selectedCategory && allDishes.length > 0) {
//       const filtered = allDishes.filter((dish) => dish.category === selectedCategory._id);
//       console.log('Filtered Dishes:', filtered); // Log the filtered dishes
//       setFilteredDishes(filtered);
//     }
//   }, [selectedCategory, allDishes]);

//   // Handle errors for categories and dishes fetch
//   if (isCategoriesError || isDishesError) {
//     enqueueSnackbar('Failed to fetch data!', { variant: 'error' });
//   }

//   // Show loading state while fetching categories or dishes
//   if (isCategoriesLoading || isDishesLoading) {
//     return <div>Loading...</div>;
//   }

//   // Increment item count
//   const increment = (id) => {
//     setItemCounts((prevCounts) => ({
//       ...prevCounts,
//       [id]: (prevCounts[id] || 0) + 1,
//     }));
//   };

//   // Decrement item count
//   const decrement = (id) => {
//     setItemCounts((prevCounts) => ({
//       ...prevCounts,
//       [id]: Math.max((prevCounts[id] || 0) - 1, 0),
//     }));
//   };

//   // Add item to cart
//   const handleAddToCart = (item) => {
//     const count = itemCounts[item._id] || 0;
//     if (count === 0) return;
//     const { dishName, dishPrice } = item;
//     const newObj = {
//       id: uuidv4(),
//       name: dishName,
//       pricePerQuantity: dishPrice,
//       quantity: count,
//       price: dishPrice,
//     };
//     dispatch(addItems(newObj));
//     setItemCounts((prevCounts) => ({
//       ...prevCounts,
//       [item._id]: 0, // Reset the count for this item after adding to cart
//     }));
//   };

//   return (
//     <>
//       {/* Menu Categories */}
//       <div className="grid grid-cols-4 gap-4 px-10 py-4 overflow-y-scroll h-[240px] hidden-scrollbar">
//         {categories?.map((category) => {
//           console.log('Rendering Category:', {
//             id: category._id,
//             name: category.categoryName,
//           }); // Log each category being rendered
//           return (
//             <div
//               key={category._id}
//               className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer transition-transform hover:scale-104"
//               style={{ background: '#b73e3e' }} // Add dynamic background colors if needed
//               onClick={() => {
//                 setSelectedCategory(category);
//                 console.log('Selected Category:', {
//                   id: category._id,
//                   name: category.categoryName,
//                 }); // Log the selected category
//               }}
//             >
//               <div className="flex items-center justify-between w-full">
//                 <h1 className="text-[#f5f5f5] text-lg font-semibold">
//                   {category.categoryName}
//                 </h1>
//                 {selectedCategory?._id === category._id && (
//                   <GrRadialSelected className="text-white size={20}" />
//                 )}
//               </div>
//               {/* Display the correct item count for each category */}
//               <p className="text-[#ababab] text-sm font-semibold">
//                 {selectedCategory?._id === category._id
//                   ? filteredDishes.length
//                   : '0'}{' '}
//                 Items
//               </p>
//             </div>
//           );
//         })}
//       </div>
//       <hr className="border-[#2a2a2a] border-t-2 mt-4" />

//       {/* Dishes for Selected Category */}
//       <div>
//         <div className="grid grid-cols-4 gap-4 px-10 py-4 overflow-y-scroll h-auto hidden-scrollbar">
//           {filteredDishes.map((item) => {
//             console.log('Rendering Dish:', {
//               id: item._id,
//               name: item.dishName,
//               price: item.dishPrice,
//             }); // Log each dish being rendered
//             return (
//               <div
//                 key={item._id}
//                 className="flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer transition-transform hover:scale-104 hover:bg-[#2a2a2a] bg-[#1a1a1a]"
//               >
//                 <div className="flex items-start justify-between w-full">
//                   <h1 className="text-[#f5f5f5] text-lg font-semibold">
//                     {item.dishName}
//                   </h1>
//                   <button
//                     onClick={() => handleAddToCart(item)}
//                     className="text-[#02ca3a] cursor-pointer"
//                   >
//                     <GiShoppingCart size={30} />
//                   </button>
//                 </div>

//                 <div className="flex items-center justify-between w-full">
//                   <p className="text-[#f5f5f5] text-xl font-bold">
//                     Rs{item.dishPrice}
//                   </p>
//                   <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg gap-6 z-1">
//                     <button
//                       onClick={() => decrement(item._id)}
//                       className="text-yellow-500 text-2xl cursor-pointer"
//                     >
//                       &minus;
//                     </button>
//                     <span className="text-white">
//                       {itemCounts[item._id] || 0}
//                     </span>
//                     <button
//                       onClick={() => increment(item._id)}
//                       className="text-yellow-500 text-2xl cursor-pointer"
//                     >
//                       &#43;
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default MenuContainer;


import React, { useState, useEffect } from 'react';
import { GrRadialSelected } from 'react-icons/gr';
import { GiShoppingCart } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { addItems } from '../../redux/slice/cartSlice';
import { v4 as uuidv4 } from 'uuid';
import { useQuery } from '@tanstack/react-query';
import { getCategories, getDishes } from '../../https'; // Import getDishes instead of getDishesByCategory
import { enqueueSnackbar } from 'notistack';
import { getBgColor } from '../../utils'; // Import the getBgColor function

const MenuContainer = () => {
  const dispatch = useDispatch();

  // State for selected category, all dishes, and filtered dishes
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [allDishes, setAllDishes] = useState([]); // State to store all dishes
  const [filteredDishes, setFilteredDishes] = useState([]); // State to store filtered dishes
  const [itemCounts, setItemCounts] = useState({}); // State to manage counts for each item

  // Fetch categories
  const { data: categories, isError: isCategoriesError, isLoading: isCategoriesLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await getCategories();
      console.log('Categories Response:', response); // Log the full response
      return response.data.data; // Access the nested data
    },
    onSuccess: (data) => {
      // Set the first category as the default selected category
      if (data && data.length > 0) {
        setSelectedCategory(data[0]); // Set the default category
      }
    },
  });

  // Fetch all dishes once when the component mounts
  const { data: dishes, isError: isDishesError, isLoading: isDishesLoading } = useQuery({
    queryKey: ['dishes'],
    queryFn: async () => {
      const response = await getDishes(); // Fetch all dishes
      console.log('Dishes API Response:', response); // Log the response
      setAllDishes(response.data.data); // Store all dishes in state
      return response.data.data; // Return the data for useQuery
    },
  });

  // Filter dishes based on the selected category
  useEffect(() => {
    if (selectedCategory && allDishes.length > 0) {
      const filtered = allDishes.filter((dish) => dish.category === selectedCategory._id);
      console.log('Filtered Dishes:', filtered); // Log the filtered dishes
      setFilteredDishes(filtered);
    }
  }, [selectedCategory, allDishes]);

  // Handle errors for categories and dishes fetch
  if (isCategoriesError || isDishesError) {
    enqueueSnackbar('Failed to fetch data!', { variant: 'error' });
  }

  // Show loading state while fetching categories or dishes
  if (isCategoriesLoading || isDishesLoading) {
    return <div>Loading...</div>;
  }

  // Increment item count
  const increment = (id) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  // Decrement item count
  const decrement = (id) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max((prevCounts[id] || 0) - 1, 0),
    }));
  };

  // Add item to cart
  const handleAddToCart = (item) => {
    const count = itemCounts[item._id] || 0;
    if (count === 0) return;
    const { dishName, dishPrice } = item;
    const newObj = {
      id: uuidv4(),
      name: dishName,
      pricePerQuantity: dishPrice,
      quantity: count,
      price: dishPrice,
    };
    dispatch(addItems(newObj));
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [item._id]: 0, // Reset the count for this item after adding to cart
    }));
  };

  return (
    <>
      {/* Menu Categories */}
      <div className="grid grid-cols-4 gap-4 px-10 py-4 overflow-y-scroll h-[240px] hidden-scrollbar">
        {categories?.map((category) => {
          console.log('Rendering Category:', {
            id: category._id,
            name: category.categoryName,
          }); // Log each category being rendered
          return (
            <div
              key={category._id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer transition-transform hover:scale-104"
              style={{ backgroundColor: getBgColor() }} // Apply dynamic background color
              onClick={() => {
                setSelectedCategory(category);
                console.log('Selected Category:', {
                  id: category._id,
                  name: category.categoryName,
                }); // Log the selected category
              }}
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[#f5f5f5] text-lg font-semibold">
                  {category.categoryName}
                </h1>
                {selectedCategory?._id === category._id && (
                  <GrRadialSelected className="text-white size={20}" />
                )}
              </div>
              {/* Display the correct item count for each category */}
              <p className="text-[#ababab] text-sm font-semibold">
                {selectedCategory?._id === category._id
                  ? filteredDishes.length
                  : '0'}{' '}
                Items
              </p>
            </div>
          );
        })}
      </div>
      <hr className="border-[#2a2a2a] border-t-2 mt-4" />

      {/* Dishes for Selected Category */}
      <div>
        <div className="grid grid-cols-4 gap-4 px-10 py-4 overflow-y-scroll h-auto hidden-scrollbar">
          {filteredDishes.map((item) => {
            console.log('Rendering Dish:', {
              id: item._id,
              name: item.dishName,
              price: item.dishPrice,
            }); // Log each dish being rendered
            return (
              <div
                key={item._id}
                className="flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer transition-transform hover:scale-104 hover:bg-[#2a2a2a] bg-[#1a1a1a]"
              >
                <div className="flex items-start justify-between w-full">
                  <h1 className="text-[#f5f5f5] text-lg font-semibold">
                    {item.dishName}
                  </h1>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="text-[#02ca3a] cursor-pointer"
                  >
                    <GiShoppingCart size={30} />
                  </button>
                </div>

                <div className="flex items-center justify-between w-full">
                  <p className="text-[#f5f5f5] text-xl font-bold">
                    Rs{item.dishPrice}
                  </p>
                  <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg gap-6 z-1">
                    <button
                      onClick={() => decrement(item._id)}
                      className="text-yellow-500 text-2xl cursor-pointer"
                    >
                      &minus;
                    </button>
                    <span className="text-white">
                      {itemCounts[item._id] || 0}
                    </span>
                    <button
                      onClick={() => increment(item._id)}
                      className="text-yellow-500 text-2xl cursor-pointer"
                    >
                      &#43;
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MenuContainer;