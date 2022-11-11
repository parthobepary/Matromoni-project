import axios from "axios";

const membershipService = {};

membershipService.membershipPackList = async () => {
  let url = "package-list";
  let res = await axios
    .get(url)
    .then((response) => response)
    .catch((err) => err);

  return res;
};

membershipService.membershipPacOrder = async (data) => {
  let url = "/package-order";
  let res = await axios
    .post(url,data)
    .then((response) => response)
    .catch((err) => err);

  return res;
};

export default membershipService;
