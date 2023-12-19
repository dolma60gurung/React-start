import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);

  const getProducts = async () => {
    try {
      setLoad(true);
      console.log("before response");
      const response = await axios.get("https://dummyson.com/products");
      setLoad(false);
      console.log("after response");
      console.log(response.data);
    } catch (err) {
      setLoad(false);
      setErr(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  if (load) {
    return <h1>Loading...</h1>;
  }

  if (err) {
    return <h1>{`${err}`}</h1>;
  }
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
