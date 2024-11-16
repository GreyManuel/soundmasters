import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";
const getBrands = async () => {
  const response = await axios.get(`${import.meta.env.REACT_APP_API_ENDPOINT}/api/brand/`);

  return response.data;
};

const createBrand = async (brand) => {
  const response = await axios.post(`${import.meta.env.REACT_APP_API_ENDPOINT}/api/brand/`, brand, config);

  return response.data;
};
const updateBrand = async (brand) => {
  const response = await axios.put(
    `${import.meta.env.REACT_APP_API_ENDPOINT}/api/brand/${brand.id}`,
    { title: brand.brandData.title },
    config
  );

  return response.data;
};
const getBrand = async (id) => {
  const response = await axios.get(`${import.meta.env.REACT_APP_API_ENDPOINT}/api/brand/${id}`, config);

  return response.data;
};

const deleteBrand = async (id) => {
  const response = await axios.delete(`${import.meta.env.REACT_APP_API_ENDPOINT}/api/brand/${id}`, config);

  return response.data;
};

const brandService = {
  getBrands,
  createBrand,
  getBrand,
  updateBrand,
  deleteBrand,
};

export default brandService;
