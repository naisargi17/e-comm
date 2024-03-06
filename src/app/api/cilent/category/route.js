

// pages/api/categories.js
import categoryData from "@/context/categorydata";

export default function handler(req, res) {
  const { filter } = req.query;

  // Implement your filtering logic based on the query parameter
  let filteredCategories = categoryData;

  if (filter) {
    filteredCategories = filteredCategories.filter(category => {
      // Example: Filter by category name
      return category.category.toLowerCase().includes(filter.toLowerCase());
    });
  }

  res.status(200).json(filteredCategories);
}
