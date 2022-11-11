import axios from "axios";

const CourseServices = {};

CourseServices.topCourseList = async () => {
  let url = "course-top";
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
CourseServices.suggestCourseListApi = async () => {
  let url = "course-suggested";
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

CourseServices.topRatedCourseListApi = async () => {
  let url = "course-rated";
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

CourseServices.singlePublicCourseListApi = async (id) => {
  let url = `/course-show/${id}`;
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

export default CourseServices;
