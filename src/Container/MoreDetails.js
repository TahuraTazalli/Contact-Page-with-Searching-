import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MoreDetailPage from "./MoreDetailPage";
const MoreDetails = (props) => {
  const [data, setData] = useState("");
  const { userId } = useParams();
  const details = useSelector((state) => {
    return state.allDetails.detail.results;
  });

  const moreData =
    details?.length &&
    details.find((detail) => {
      return detail?.login?.uuid === userId;
    });
  useEffect(() => {
    setData(moreData);
  }, [moreData]);

  return (
    <div>
      <MoreDetailPage
        firstName={data?.name?.first}
        picture={data?.picture?.large}
        lastName={data?.name?.last}
        title={data?.name?.title}
        cell={data.cell}
        email={data?.email}
        gender={data.gender}
        city={data?.location?.city}
        country={data?.location?.country}
        postcode={data?.location?.postcode}
      />
    </div>
  );
};
export default MoreDetails;
