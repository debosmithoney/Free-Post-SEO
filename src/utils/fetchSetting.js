const apiurl = "https://api.freepostseo.com";

const fetchOptions = (method = "POST", body = null) => ({
  method,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  credentials: "include",
  body,
});

export { apiurl, fetchOptions };
