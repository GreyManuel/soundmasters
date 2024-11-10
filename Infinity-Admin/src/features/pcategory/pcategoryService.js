import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getProductCategories = async () => {
  const response = await axios.get(`http://localhost:5000/api/category/`);

  return response.data;
};
const createCategory = async (category) => {
  const response = await axios.post(`http://localhost:5000/api/category/`, category, config);

  return response.data;
};

const getProductCategory = async (id) => {
  const response = await axios.get(`http://localhost:5000/api/category/${id}`, config);

  return response.data;
};

const deleteProductCategory = async (id) => {
  const response = await axios.delete(`http://localhost:5000/api/category/${id}`, config);

  return response.data;
};
const updateProductCategory = async (category) => {
  console.log(category);
  const response = await axios.put(
    `http://localhost:5000/api/category/${category.id}`,
    { title: category.pCatData.title },
    config
  );

  return response.data;
};
const pCategoryService = {
  getProductCategories,
  createCategory,
  getProductCategory,
  deleteProductCategory,
  updateProductCategory,
};

export default pCategoryService;
