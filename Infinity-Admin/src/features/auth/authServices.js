import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";
const login = async (user) => {
  const response = await axios.post(`http://localhost:5000/api/user/admin-login`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
const getOrders = async () => {
  const response = await axios.get(`http://localhost:5000/api/user/getallorders`, config);

  return response.data;
};
const getOrder = async (id) => {
  const response = await axios.get(
    `http://localhost:5000/api/user/getaOrder/${id}`,
    config
  );

  return response.data;
};
// what was the name of the file we working at ?
const updateOrder = async (data) => {
  const response = await axios.put(
    `http://localhost:5000/api/user/updateOrder/${data.id}`, {status:data?.status},
    config
  );

  return response.data;
};
const getMonthlyOrders = async () => {
  const response = await axios.get(
    `http://localhost:5000/api/user/getMonthWiseOrderIncome`,
    config
  );

  return response.data;
};

const getYearlyStats = async () => {
  const response = await axios.get(
    `http://localhost:5000/api/user/getyearlyorders`,
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
