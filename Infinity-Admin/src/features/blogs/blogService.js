import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getBlogs = async () => {
  const response = await axios.get(`http://localhost:5000/api/blog/`);

  return response.data;
};
const createBlog = async (blog) => {
  const response = await axios.post(`http://localhost:5000/api/blog/`, blog, config);

  return response.data;
};
const updateBlog = async (blog) => {
  const response = await axios.put(
    `http://localhost:5000/api/blog/${blog.id}`,
    {
      title: blog.blogData.title,
      description: blog.blogData.description,
      category: blog.blogData.category,
      images: blog.blogData.images,
    },
    config
  );

  return response.data;
};
const getBlog = async (id) => {
  const response = await axios.get(`http://localhost:5000/api/blog/${id}`, config);

  return response.data;
};

const deleteBlog = async (id) => {
  const response = await axios.delete(`http://localhost:5000/api/blog/${id}`, config);

  return response.data;
};
const blogService = {
  getBlogs,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
};

export default blogService;
