import { API } from "../../backend";

export const getProducts = () => {
  console.log(API);
  return fetch(`${API}/products`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getCategories = () => {
  return fetch(`${API}/categories`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
