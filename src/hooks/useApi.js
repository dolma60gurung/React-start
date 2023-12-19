import { useEffect, useState } from "react";
import axios from "axios";
export const useApi = (api) => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);

  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get("https://dummyjson.com/products");
      setLoad(false);
      setData(response.data);
    } catch (err) {
      setLoad(false);
      setErr(err.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return [load, err, data];
};
