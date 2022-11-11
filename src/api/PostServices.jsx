import axios from "axios";

const PostServices = {};

PostServices.savePost = async (data) => {
  let url = `post`;
  let res = axios
    .post(url, data)
    .then((response) => response)
    .catch((err) => err.response);
  return res;
};

PostServices.getUserPost = async () => {
  let url = `post`;
  let res = axios
    .get(url)
    .then((response) => response)
    .catch((err) => err.response);
  return res;
};

export default PostServices;
