import { getCDNUrl } from "../utils/constants";

const RestuarantCard = ({ resObj }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    timeTaken,
  } = resObj;

  const imageUrl = getCDNUrl(cloudinaryImageId); // Correctly calling the function with the ID

  return (
    <div className="res-card" style={{ backgroundColor: "#f0fff" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={imageUrl} // Update image URL as required
      />
      <h3>{name} </h3>
      <h4>{avgRating} stars </h4>
      <h4>{timeTaken}</h4>
      <small>{cuisines.join(", ")}</small>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestuarantCard;
