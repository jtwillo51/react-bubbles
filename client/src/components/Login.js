import React, { useState } from "react";

import {  axiosWithAuth } from "../utils/AxiosWithAuth";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  

  let login = (e) =>{
    e.preventDefault();
    axiosWithAuth()
    .post("/login", credentials)
    .then((res) => {
      console.log(credentials, res)
      localStorage.setItem("token", res.data.payload)
      props.history.push("/bubblepage")
    })
    .catch(err => console.log("post err: ", err))
  }



   let changeHandler = e => {
    e.preventDefault();

    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }


  return (
    <>
        <form onSubmit = {login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={changeHandler}
            placeholder="username"
          />
          <input
            name="password"
            type="text"
            value={credentials.password}
            onChange={changeHandler}
            placeholder="password"
          />
          <button type="submit">Log in</button>
        </form>
    </>
  );
};

export default Login;
