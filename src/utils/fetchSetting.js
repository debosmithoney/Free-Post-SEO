const apiurl = "https://fpseo.herokuapp.com";

const fetchOptions = (method, body) => ({
  method,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  credentials: "include",
  body,
});

export { apiurl, fetchOptions };
