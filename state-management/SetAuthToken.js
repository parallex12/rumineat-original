import axios from "axios";
import jwtDecode from "jwt-decode";
const setAuthToken = (token) => {
  if (token) {
    console.log("setAuth", token);
    const decode = jwtDecode(token);

    // expirate logic here
    // if (new Date () > new Date(decode.exp)){

    //  token is not expired
    // } else {
    //  token is expired remove token
    // }
    axios.defaults.headers.common["Content-Type"] = `application/json`;
    axios.defaults.headers.common["Accept"] = `application/json`;
    axios.defaults.headers.common["authorization"] = `Bearer: ${token}`;
  } else {
    delete axios.defaults.headers.common["authorization"];
  }
};

export default setAuthToken;
