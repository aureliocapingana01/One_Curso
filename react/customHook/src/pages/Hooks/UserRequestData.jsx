import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


export const UserRequestData = url => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setIsLoading(true)
    axios
      .get(url)
      .then((res) => {
        setIsLoading(false)
        setData(res.data);
      })
      .catch((err) => {
        setIsLoading(false)
        setErro(err);
      });
  };
  return [data, isLoading, erro];
};
