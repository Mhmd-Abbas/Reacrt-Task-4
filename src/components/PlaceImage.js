import React, { useContext } from "react";
import { getImageUrl } from "./Utils";
import size from "./MyContext";

const PlaceImage = ({ place }) => {
  const imgsize = useContext(size);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imgsize}
      height={imgsize}
    />
  );
};

export default PlaceImage;
