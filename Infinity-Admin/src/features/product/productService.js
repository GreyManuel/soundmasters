import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const getProducts = async () => {
  const response = await axios.get(`http://localhost:5000/api/product/`);

  return response.data;
};
const createProduct = async (product) => {
  const response = await axios.post(`http://localhost:5000/api/product/`, product, config);

  return response.data;
};

const productService = {
  getProducts,
  createProduct,
};

export default productService;
