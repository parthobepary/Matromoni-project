import axios from "axios";

const FollowServices = {};

FollowServices.sendRequest = async (data) => {
  let url = "follow";
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

FollowServices.requestHandle = async (data, id) => {
  let url = `follow/accept-cancel/${id}`;
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
FollowServices.findurpartnerRequestAcceptCancle = async (data, id) => {
  let url = `match/accept-cancel/${id}`;
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

FollowServices.requestList = async () => {
  let url = "follow/request-list";
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
FollowServices.findurpartnerRequest = async () => {
  let url = "received";
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

FollowServices.followerList = async () => {
  let url = "follower";
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
FollowServices.swipeMatchList = async () => {
  let url = "swipe";
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

FollowServices.connectList = async () => {
  let url = "/my-matchings";
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

FollowServices.followingList = async () => {
  let url = "following/accepted";
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

FollowServices.timeline = async (page) => {
  let url = `timeline?page=${page}`;
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

FollowServices.swipeMatch = async () => {
  let url = `swipe-list`;
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

FollowServices.addFavourite = async (data) => {
  let url = "/swipe";
  // axios.get('/sanctum/csrf-cookie').then(response => {
  const res = axios
    .post(url, data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      // //console.log("err.response.data :>> ", err.response ? err.response : err);
      return err.response;
    });
  return res;
};
export default FollowServices;
