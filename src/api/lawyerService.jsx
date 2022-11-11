import axios from "axios";

const LawyerService = {};

LawyerService.show = async (id) => {
  let url = `lawyer/${id}`;
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response ?? err;
    });

  return res;
};

LawyerService.hire = async (id) => {
  let url = `hire/lawyer/${id}`;
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response ?? err;
    });

  return res;
};
LawyerService.category = async () => {
  let url = `lawyer/category`;
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response ?? err;
    });

  return res;
};
LawyerService.LawyerRated = async () => {
  let url = `lawyer-rated`;
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response ?? err;
    });

  return res;
};

LawyerService.TopLawyer = async () => {
  let url = `lawyer-top`;
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response ?? err;
    });

  return res;
};

LawyerService.LawyerSuggested = async () => {
  let url = `lawyer-suggested`;
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response ?? err;
    });

  return res;
};

LawyerService.ServiceList = async () => {
  let url = `service`;
  let res = await axios.get(url);
  let response = await res;
  return response;
};

LawyerService.LawyerServiceList = async () => {
  let url = `lawyerService`;
  let res = await axios.get(url);
  let response = await res;
  return response;
};

LawyerService.AddService = async (data) => {
  let url = `lawyerService`;
  let res = await axios.post(url, data);
  let response = await res;
  return response;
};

LawyerService.updateService = async (id, data) => {
  let url = `lawyerService/${id}?method=PUT`;
  let res = await axios.post(url, data);
  let response = await res;
  return response;
};
// deleteService

LawyerService.deleteService = async (id, method) => {
  let url = `lawyerService/${id}`;
  let res = await axios.post(url, method);
  let response = await res;
  return response;
};

LawyerService.CaseList = async () => {
  let url = `lawyer-case-list`;
  let res = await axios.get(url);
  let response = await res;
  return response;
};

LawyerService.CaseUpdate = async (data, id) => {
  let url = `/lawyer-case/${id}`;
  let res = await axios.post(url, data);
  let response = await res;
  return response;
};

LawyerService.lawyerList = async () => {
  let url = `lawyer`;
  let res = await axios.get(url);
  let response = await res;
  return response;
};
LawyerService.myLawyer = async () => {
  let url = `my-case`;
  let res = await axios.get(url);
  let response = await res;
  return response;
};

LawyerService.myCaseUpdate = async (data, id) => {
  const urlDelete = "/user-case/" + id;
  const res = await axios.post(urlDelete, data);
  const response = await res;
  return response;
};

export default LawyerService;
