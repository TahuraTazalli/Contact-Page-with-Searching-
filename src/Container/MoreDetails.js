import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MoreDetails = (props) => {
  const [data, setData] = useState("");
  const { userId } = useParams();
  console.log("uuid", userId);
  const fetchData = async () => {
    const response = await axios.get(
      "https://randomuser.me/api/?results=20&amp;inc=name,picture,id,cell&amp;nat=in"
    );
    const data = response?.data?.results;
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log("MoreDEtailsss", data);
  console.log("useridd", userId);

  const abc =
    data?.length &&
    data.find((detail) => {
      console.log("detaildetail", detail?.login?.uuid);
    });
  console.log("deaaaaaaaa", abc);

  return <>{}</>;
};
export default MoreDetails;
