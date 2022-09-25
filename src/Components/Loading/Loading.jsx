import React, { useState, useEffect } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import "./Loading.css";
const Loading = () => {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return <></>;
};

export default Loading;
