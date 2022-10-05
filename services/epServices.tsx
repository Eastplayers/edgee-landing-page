import axios, { AxiosRequestConfig } from "axios";

const EpServices = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
});

EpServices.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem("access_token");

  if (token) {
    return {
      ...config,
      params: {
        ...config.params,
        app_id: process.env.REACT_APP_CROSS_PLATFORM_APP_ID,
        access_token: process.env.REACT_APP_CROSS_PLATFORM_APP_ACCESS_TOKEN,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  return {
    ...config,
    params: {
      ...config.params,
      app_id: process.env.REACT_APP_CROSS_PLATFORM_APP_ID,
      access_token: process.env.REACT_APP_CROSS_PLATFORM_APP_ACCESS_TOKEN,
    },
  };
});

EpServices.interceptors.response.use(
  (res) => {
    return res;
  },
  function (err) {
    const status = err?.response?.status;
    if (status === 401 || status === 403) {
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "/sign-in";
    }
    return Promise.reject(err);
  }
);

export default EpServices;
