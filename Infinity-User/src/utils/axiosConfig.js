export const base_url = `${import.meta.env.REACT_APP_API_ENDPOINT}/api/`;
const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;
// hj
export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};
