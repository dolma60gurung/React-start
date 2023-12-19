import React from "react";
import { useApi } from "../hooks/useApi";

const Home = () => {
  const [load, err, data] = useApi("");

  if (load) {
    return <h1>Loading....</h1>;
  }

  if (err) {
    return <h1>{`${err}`}</h1>;
  }

  console.log(data);

  return <div></div>;
};

export default Home;
