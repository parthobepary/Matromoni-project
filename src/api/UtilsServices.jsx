import axios from "axios";

const UtilsServices = {};

UtilsServices.addFavourite = async (data) => {
  let url = `favourite`;
  const res = await axios.post(url, data);
  const response = await res;
  return response;
};

UtilsServices.removeFavourite = async () => {
  let url = `favourite?method=DELETE`;
  const res = await axios.post(url);
  const response = await res;
  return response;
};

UtilsServices.findPartner = async (data) => {
  let url = "matchmaking";
  let res = axios
    .post(url, data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });

  return res;
};

UtilsServices.reviewUser = async (data) => {
  let url = `review`;
  const res = await axios.post(url, data);
  const response = await res;
  return response;
};

export default UtilsServices;
