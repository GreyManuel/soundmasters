import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";
const getEnquiries = async () => {
  const response = await axios.get(`${import.meta.env.REACT_APP_API_ENDPOINT}/api/enquiry/`);

  return response.data;
};
const deleteEnquiry = async (id) => {
  const response = await axios.delete(`${import.meta.env.REACT_APP_API_ENDPOINT}/api/enquiry/${id}`, config);
  return response.data;
};
const getEnquiry = async (id) => {
  const response = await axios.get(`${import.meta.env.REACT_APP_API_ENDPOINT}/api/enquiry/${id}`);
  return response.data;
};
const udpateEnquiry = async (enq) => {
  const response = await axios.put(
    `${import.meta.env.REACT_APP_API_ENDPOINT}/api/enquiry/${enq.id}`,
    { status: enq.enqData },
    config
  );
  return response.data;
};
const enquiryService = {
  getEnquiries,
  deleteEnquiry,
  getEnquiry,
  udpateEnquiry,
};

export default enquiryService;
