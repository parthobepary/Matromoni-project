import axios from "axios";

const SliderServices = {};

// get all data

SliderServices.sliderList = async () => {
  const url = "slider";

  const res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => err.response);

  return res;
};

SliderServices.latestMemberList = async () => {
  const url = "latest-members";

  const res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => err.response);

  return res;
};

SliderServices.successStoriesList = async () => {
  const url = "success-stories";

  const res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => err.response);

  return res;
};

//

// top profile slider

SliderServices.topBride = async () => {
  const url = "top-bride";

  const res = axios
    .get(url)
    .then((response) => response)
    .catch((err) => err.response ?? err);

  return res;
};

SliderServices.profileSuggested = async () => {
  const url = "suggested";

  const res = axios
    .get(url)
    .then((response) => response)
    .catch((err) => err.response ?? err);

  return res;
};

SliderServices.topGroom = async () => {
  const url = "top-groom";
  const res = axios
    .get(url)
    .then((response) => response)
    .catch((err) => err.response ?? err);

  return res;
};

// top Hiring

SliderServices.topKazi = async () => {
  const url = "kazi-top";

  const res = axios
    .get(url)
    .then((response) => response)
    .catch((err) => err.response ?? err);

  return res;
};

SliderServices.topAgent = async () => {
  const url = "agent-top";

  const res = axios
    .get(url)
    .then((response) => response)
    .catch((err) => err.response ?? err);

  return res;
};

SliderServices.topLawyer = async () => {
  const url = "lawyer-top";
  const res = axios
    .get(url)
    .then((response) => response)
    .catch((err) => err.response ?? err);

  return res;
};

SliderServices.allProduct = async () => {
  const url = "product";
  const res = axios
    .get(url)
    .then((response) => response)
    .catch((err) => err.response ?? err);

  return res;
};

// export blogService module product

export default SliderServices;
