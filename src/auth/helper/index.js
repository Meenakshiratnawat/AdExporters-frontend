import { API } from "../../backend";
//API MEANS REACT_APP_BACKEND =http://localhost:8000/api/




export const signup = async user => {
  console.log(user)
    try {
    const response = await fetch(`${API}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    return await response.json();
  } catch (err) {
    
    return console.log(err);
  }
  };

  export const signin = async user => {
    try {
      const response = await fetch(`${API}/signin`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });
      return await response.json();
    } catch (err) {
      return console.log(err);
    }
  };
  
  export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("jwt", JSON.stringify(data));
      next();
    }
  };
  export const signout = next => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
      next();
  
      return fetch(`${API}/signout`, {
        method: "GET"
      })
        .then(response => console.log("signout success"))
        .catch(err => console.log(err));
    }
  };
  export const isAutheticated = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"));
    } else {
      return false;
    }
  };