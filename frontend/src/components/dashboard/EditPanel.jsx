import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getDishes, updateDish, deleteDish, getCategories, updateCategory, deleteCategory, getTable, updateTable, deleteTable } from "../../https";
import { enqueueSnackbar } from "notistack";

const EditPanel = () => {
  const queryClient = useQueryClient();
  const [selectedOption, setSelectedOption] = useState(null);

  // Fetch dishes
  const { data: dishesData } = useQuery({
    queryKey: ["dishes"],
    queryFn: getDishes,
  });

  // Fetch categories
  const { data: categoriesData } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  // Fetch tables
  const { data: tablesData } = useQuery({
    queryKey: ["tables"],
    queryFn: getTable,
  });

  // Mutation for updating a dish
  const updateDishMutation = useMutation({
    mutationFn: updateDish,
    onSuccess: () => {
      enqueueSnackbar("Dish updated successfully!", { variant: "success" });
      queryClient.invalidateQueries(["dishes"]);
    },
    onError: () => {
      enqueueSnackbar("Failed to update dish!", { variant: "error" });
    },
  });

  // Mutation for deleting a dish
  const deleteDishMutation = useMutation({
    mutationFn: deleteDish,
    onSuccess: () => {
      enqueueSnackbar("Dish deleted successfully!", { variant: "success" });
      queryClient.invalidateQueries(["dishes"]);
    },
    onError: () => {
      enqueueSnackbar("Failed to delete dish!", { variant: "error" });
    },
  });

  // Mutation for updating a category
  const updateCategoryMutation = useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      enqueueSnackbar("Category updated successfully!", { variant: "success" });
      queryClient.invalidateQueries(["categories"]);
    },
    onError: () => {
      enqueueSnackbar("Failed to update category!", { variant: "error" });
    },
  });

  // Mutation for deleting a category
  const deleteCategoryMutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      enqueueSnackbar("Category deleted successfully!", { variant: "success" });
      queryClient.invalidateQueries(["categories"]);
    },
    onError: () => {
      enqueueSnackbar("Failed to delete category!", { variant: "error" });
    },
  });

  // Mutation for updating a table
  const updateTableMutation = useMutation({
    mutationFn: updateTable,
    onSuccess: () => {
      enqueueSnackbar("Table updated successfully!", { variant: "success" });
      queryClient.invalidateQueries(["tables"]);
    },
    onError: () => {
      enqueueSnackbar("Failed to update table!", { variant: "error" });
    },
  });

  // Mutation for deleting a table
  const deleteTableMutation = useMutation({
    mutationFn: deleteTable,
    onSuccess: () => {
      enqueueSnackbar("Table deleted successfully!", { variant: "success" });
      queryClient.invalidateQueries(["tables"]);
    },
    onError: () => {
      enqueueSnackbar("Failed to delete table!", { variant: "error" });
    },
  });

  // Handle editing a field
  const handleEditField = (entity, id, field, value) => {
    switch (entity) {
      case "dish":
        updateDishMutation.mutate({ id, [field]: value });
        break;
      case "category":
        updateCategoryMutation.mutate({ id, [field]: value });
        break;
      case "table":
        updateTableMutation.mutate({ id, [field]: value });
        break;
      default:
        break;
    }
  };

  // Handle deleting a record
  const handleDeleteRecord = (entity, id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      switch (entity) {
        case "dish":
          deleteDishMutation.mutate(id);
          break;
        case "category":
          deleteCategoryMutation.mutate(id);
          break;
        case "table":
          deleteTableMutation.mutate(id);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="container mx-auto bg-[#262626] p-4 rounded-lg">
      <h2 className="text-[#f5f5f5] text-xl font-semibold mb-4">Edit Panel</h2>
      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setSelectedOption("dishes")}
          className={`px-4 py-2 rounded-lg ${selectedOption === "dishes" ? "bg-[#333] text-[#f5f5f5]" : "bg-[#1a1a1a] hover:bg-[#333] text-[#f5f5f5]"}`}
        >
          Dishes
        </button>
        <button
          onClick={() => setSelectedOption("categories")}
          className={`px-4 py-2 rounded-lg ${selectedOption === "categories" ? "bg-[#333] text-[#f5f5f5]" : "bg-[#1a1a1a] hover:bg-[#333] text-[#f5f5f5]"}`}
        >
          Categories
        </button>
        <button
          onClick={() => setSelectedOption("tables")}
          className={`px-4 py-2 rounded-lg ${selectedOption === "tables" ? "bg-[#333] text-[#f5f5f5]" : "bg-[#1a1a1a] hover:bg-[#333] text-[#f5f5f5]"}`}
        >
          Tables
        </button>
      </div>

      {selectedOption === "dishes" && (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[#f5f5f5]">
            <thead className="bg-[#333] text-[#ababab]">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Price</th>
                <th className="p-3">Category</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {dishesData?.data.data.map((dish) => (
                
                <tr key={dish._id} className="border-b border-gray-600 hover:bg-[#333]">
                  <td className="p-4">
                    <input
                      type="text"
                      value={dish.dishName}
                      onChange={(e) => handleEditField("dish", dish._id, "name", e.target.value)}
                      className="bg-[#1a1a1a] text-[#f5f5f5] px-2 py-1 rounded-lg"
                    />
                  </td>
                  <td className="p-4">
                    <input
                      type="number"
                      value={dish.dishPrice}
                      onChange={(e) => handleEditField("dish", dish._id, "price", e.target.value)}
                      className="bg-[#1a1a1a] text-[#f5f5f5] px-2 py-1 rounded-lg"
                    />
                  </td>
                  <td className="p-4">
                    <input
                      type="text"
                      value={dish.category}
                      onChange={(e) => handleEditField("dish", dish._id, "category", e.target.value)}
                      className="bg-[#1a1a1a] text-[#f5f5f5] px-2 py-1 rounded-lg"
                    />
                  </td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => handleDeleteRecord("dish", dish._id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedOption === "categories" && (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[#f5f5f5]">
            <thead className="bg-[#333] text-[#ababab]">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {categoriesData?.data.data.map((category) => (
                <tr key={category._id} className="text-[#f5f5f5] border-b border-gray-600 hover:bg-[#333]">
                  <td className="p-4">
                    <input
                      type="text"
                      value={category.categoryName}
                      onChange={(e) => handleEditField("category", category._id, "name", e.target.value)}
                      className="bg-[#1a1a1a] text-[#f5f5f5] px-2 py-1 rounded-lg"
                    />
                  </td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => handleDeleteRecord("category", category._id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedOption === "tables" && (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[#f5f5f5]">
            <thead className="bg-[#333] text-[#ababab]">
              <tr>
                <th className="p-3">Table No</th>
                <th className="p-3">Seats</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {tablesData?.data.data.map((table) => (
                <tr key={table._id} className="border-b border-gray-600 hover:bg-[#333]">
                  <td className="p-4">
                    <input
                      type="text"
                      value={table.tableNo}
                      onChange={(e) => handleEditField("table", table._id, "tableNo", e.target.value)}
                      className="bg-[#1a1a1a] text-[#f5f5f5] px-2 py-1 rounded-lg"
                    />
                  </td>
                  <td className="p-4">
                    <input
                      type="number"
                      value={table.seats}
                      onChange={(e) => handleEditField("table", table._id, "seats", e.target.value)}
                      className="bg-[#1a1a1a] text-[#f5f5f5] px-2 py-1 rounded-lg"
                    />
                  </td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => handleDeleteRecord("table", table._id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EditPanel;