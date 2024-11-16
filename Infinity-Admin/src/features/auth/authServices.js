import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";
const login = async (user) => {
  const response = await axios.post(`${import.meta.env.REACT_APP_API_ENDPOINT}/api/user/admin-login`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
const getOrders = async () => {
  const response = await axios.get(`${import.meta.env.REACT_APP_API_ENDPOINT}/api/user/getallorders`, config);

  return response.data;
};
const getOrder = async (id) => {
  const response = await axios.get(
    `${import.meta.env.REACT_APP_API_ENDPOINT}/api/user/getaOrder/${id}`,
    config
  );

  return response.data;
};
// what was the name of the file we working at ?
const updateOrder = async (data) => {
  const response = await axios.put(
    `${import.meta.env.REACT_APP_API_ENDPOINT}/api/user/updateOrder/${data.id}`, {status:data?.status},
    config
  );

  return response.data;
};
const getMonthlyOrders = async () => {
  const response = await axios.get(
    `${import.meta.env.REACT_APP_API_ENDPOINT}/api/user/getMonthWiseOrderIncome`,
    config
  );

  return response.data;
};

const getYearlyStats = async () => {
  const response = await axios.get(
    `${import.meta.env.REACT_APP_API_ENDPOINT}/api/user/getyearlyorders`,
    config
  );

  return response.data;
};
const authService = {
  login,
  getOrders,
  getOrder,
  getMonthlyOrders,
  getYearlyStats,
  updateOrder
};

export default authService;
