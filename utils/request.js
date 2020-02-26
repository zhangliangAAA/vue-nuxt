import axios from "axios";
const myaxios = axios.create({
  // ...
});
myaxios.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    // ...
    console.log("err----", error);
  }
);

export default myaxios;
