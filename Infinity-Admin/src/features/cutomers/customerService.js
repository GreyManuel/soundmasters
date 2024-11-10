import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getUsers = async () => {
  const response = await axios.get(`http://localhost:5000/api/user/all-users`);

  return response.data;
};

const customerService = {
  getUsers,
};

export default customerService;
