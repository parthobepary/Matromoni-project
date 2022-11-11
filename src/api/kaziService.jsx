import axios from "axios";

const KaziService = {};

KaziService.show = async (id) => {
  let url = `kazi-show/${id}`;
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

// alll kazi
KaziService.allKaziLis = async () => {
  try {
    let url = 'kazi'
    const res = await axios.get(url)
    const response = await res
    return response

  } catch (err) {
    console.log(err)

  }
}

KaziService.hire = async (id) => {
  let url = `hire/kazi/${id}`;
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




KaziService.category = async () => {
  let url = `kazi/category`;
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

// kazii case list 
KaziService.ContractList = async () => {
  let url = `kazi-contract-list`;
  let res = await axios.get(url);
  let response = await res;
  return response;
};
KaziService.contactUpdate = async (data, id) => {
  const urlUpdate = "/kazi-contract-update/" + id + "?method=PUT";
  const res = await axios.post(urlUpdate, data);
  const response = await res;
  return response;
};

KaziService.KaziServiceList = async () => {
  let url = `kaziService`;
  let res = await axios.get(url);
  let response = await res;
  return response;

}


KaziService.AddService = async (data) => {
  let url = `kaziService`;
  let res = await axios.post(url, data);
  let response = await res;
  return response;
};

KaziService.UpdateService = async (id, data) => {
  let url = `kaziService/${id}`;
  let res = await axios.post(url, data);
  let response = await res;
  return response;
};


KaziService.deleteService = async (id, data) => {
  let url = `kaziService/${id}`;
  let res = await axios.post(url, data);
  let response = await res;
  return response;
};




KaziService.myKazi = async () => {
  const url = "my-kazi-contract/list";
  const res = await axios.get(url);
  const response = await res;
  return response;
};

KaziService.myKaziContactUpdate = async (data, id) => {

  const url = "/my-kazi-contract-update/" + id;
  const res = await axios.post(url, data);
  const response = await res;
  return response;
};

// Kazi-suggested

KaziService.KaziSuggested = async () => {
  let url = `kazi-suggested`;
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

// top Kazi
KaziService.TopKazi = async () => {
  let url = `kazi-top`;
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

// Kazi-rated
KaziService.RatedKazi = async () => {
  let url = `kazi-rated`;
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

export default KaziService;
