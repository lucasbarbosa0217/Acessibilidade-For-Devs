const defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  
  const axiosConfig = axios.create({
    baseURL: `https://acessibilidade-4-devs-api.herokuapp.com/api/v1`,
    timeout: 30000,
    headers: defaultHeaders,
  });
  
  axiosConfig.defaults.headers.common.Authorization = getTokenStorage();
  
  class HttpClient {
    static api = axiosConfig;
  }
  