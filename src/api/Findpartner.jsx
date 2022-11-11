import axios from "axios";

const FindPartnerService = {};

FindPartnerService.topPartner = async () => {
  let url = "profile-top";
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

FindPartnerService.suggestedPartner = async () => {
    let url = "suggested";
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

FindPartnerService.newestPartner = async () => {
    let url = "profile-newest";
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

export default FindPartnerService;
