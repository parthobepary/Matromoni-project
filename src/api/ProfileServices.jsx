import axios from "axios";

const ProfileServices = {};

ProfileServices.city = async () => {
  let url = "city";
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });

  return res;
};

ProfileServices.country = async () => {
  let url = "country";
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });

  return res;
};

ProfileServices.findPartner = async (data) => {
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
ProfileServices.sendRequest = async (data) => {
  let url = "match-request";
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

ProfileServices.singleProfile = async (id) => {
  let url = `profile/${id}`;
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });

  return res;
};

ProfileServices.singleLawyerProfile = async (id) => {
  let url = `lawyer/${id}`;
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });

  return res;
};

ProfileServices.singleAgentProfile = async (id) => {
  let url = `agent/${id}`;
  let res = axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });

  return res;
};

ProfileServices.updateLawyerProfile = async (data) => {
  let url = `lawyer/update`;
  let res = axios
    .post(url, data)
    .then((response) => response)
    .catch((err) => err.response);
  return res;
};

ProfileServices.updateKaziProfile = async (data) => {
  let url = `kazi/update`;
  let res = axios
    .post(url, data)
    .then((response) => response)
    .catch((err) => err.response);
  return res;
};

ProfileServices.updateAgentProfile = async (data) => {
  let url = `agent/update`;
  let res = axios
    .post(url, data)
    .then((response) => response)
    .catch((err) => err.response);
  return res;
};

ProfileServices.updateProfile = async (data) => {
  let url = `profile`;
  let res = axios
    .post(url, data)
    .then((response) => response)
    .catch((err) => err.response);
  return res;
};

ProfileServices.lawyerProfile = async () => {
  let url = `lawyer-profile`;
  let res = axios
    .get(url)
    .then((response) => response)
    .catch((err) => err.response);
  return res;
};

ProfileServices.lawyerUpdateProfile = async (data) => {
  let url = `lawyer/update`;
  let res = axios
    .post(url, data)
    .then((response) => response)
    .catch((err) => err.response);
  return res;
};

ProfileServices.skinTone = async () => {
  let url = `skinTone`;

  let res = await axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
  return res;
};

ProfileServices.jobList = async () => {
  let url = `job`;

  let res = await axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
  return res;
};

ProfileServices.hobbyList = async () => {
  let url = `hobby`;

  let res = await axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
  return res;
};

ProfileServices.Education = async (data) => {
  let url = `education`;
  let res = await axios
    .post(url, data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
  return res;
};

ProfileServices.JObService = async (data) => {
  let url = `job`;
  console.log(data);

  let res = await axios
    .post(url, data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
  return res;
};

ProfileServices.CreateCertificateService = async (data) => {
  let url = `certificate`;
  let res = await axios
    .post(url, data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
  return res;
};
ProfileServices.youMayLike = async () => {
  let url = `suggested-list`;

  let res = await axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
  return res;
};

ProfileServices.certificateImages = async () => {
  let url = `certificate`;
  let res = axios
    .get(url)
    .then((response) => response)
    .catch((err) => err.response);
  return res;
};

ProfileServices.agentUpdateProfile = async (data) => {
  let url = `agent/update`;
  let res = axios
    .post(url, data)
    .then((response) => response)
    .catch((err) => err.response);
  return res;
};

ProfileServices.addFavourite = async (data) => {
  let url = `favourite`;
  const res = await axios.post(url, data);
  const response = await res;
  console.log(response);
  return response;
};

ProfileServices.removeFavourite = async (id) => {
  let url = `favourite/${id}`;
  const res = await axios.post(url, { _method: "delete" });
  const response = await res;
  console.log(response);
  return response;
};

ProfileServices.LawyerfavouriteService = async () => {
  let url = `favourite/lawyer`;
  const res = await axios.get(url);
  const response = await res;
  console.log(response, "lawyer response");

  return response;
};

ProfileServices.AgentfavouriteService = async () => {
  let url = `favourite/agent`;
  const res = await axios.get(url);
  const response = await res;
  return response;
};

export default ProfileServices;
