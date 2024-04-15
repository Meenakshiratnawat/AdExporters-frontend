import { API } from "../../backend";

export const getProducts = async () => {
  console.log(API);
  try {
    const response = await fetch(`${API}/products`, { method: "GET" });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};
export const getCategories = async () => {
  try {
    const response = await fetch(`${API}/categories`, { method: "GET" });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};
