import axios from "axios";

const BlogServices = {};

// get all data

BlogServices.blogDataList = async () => {
  const url = "blog-list";

  const res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => err.response ?? err);

  return res;
};


// 



// export blogService module

export default BlogServices