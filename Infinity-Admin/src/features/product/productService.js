import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const getProducts = async () => {
  const response = await axios.get(`${import.meta.env.REACT_APP_API_ENDPOINT}/api/product/`);

  return response.data;
};
const createProduct = async (product) => {
  const response = await axios.post(`${import.meta.env.REACT_APP_API_ENDPOINT}/api/product/`, product, config);

  return response.data;
};

const productService = {
  getProducts,
  createProduct,
};

export default productService;
