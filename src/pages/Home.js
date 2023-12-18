import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  useEffect(() => {}, []);

  const getProducts = async () => {
    return axios.get("https://dummyjson.com/products");
  };
  // const m = getProducts();
  // console.log(m);

  getProducts()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });

  // setInterval(() => {
  //   console.log("It is repeated in every time interval defined in setInterval");
  // }, 5000);

  // setTimeout(() => {
  //   console.log(
  //     "It doesnot block the successing task even if it takes time to run"
  //   );
  // }, 4000);
  // console.log("Native");

  return <div></div>;
};

export default Home;
