import { getCDNUrl } from "../utils/constants";

const RestuarantCard = ({ restaurant }) => {
  const defaultImage =
    "https://beautifuldawndesigns.net/wp-content/uploads/2023/01/food-drawings-easy-15.jpg";
  const imageUrl = restaurant.info
    ? getCDNUrl(restaurant.info.cloudinaryImageId)
    : defaultImage;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0fff" , justifyContent: "space-around" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={imageUrl} // Update image URL as required
      />
      
      {/* Restaurant Name */}
  <span style={{ fontWeight: "bold", fontSize: "1.1em" }}>
    {restaurant.info ? restaurant.info.name : ""}<br />
  </span>
  
  {/* Rating and Delivery Time */}
  <span style={{ fontWeight: "bold"}}> 
    {restaurant.info ? restaurant.info.avgRating : ""} stars -{" "}
    {restaurant.info ? restaurant.info.sla.deliveryTime : ""} mins<br />
  </span>
  
  {/* Cuisines */}
  <small>
    {restaurant.info && restaurant.info.cuisines && restaurant.info.cuisines.length > 0
      ? restaurant.info.cuisines.join(", ")
      : "Cuisine information not available"}<br />
  </small>
  
  {/* Cost for Two */}
  <span style={{ fontWeight: "bold" }}>
    {restaurant.info ? restaurant.info.costForTwo : ""}
  </span>
    </div>
  );
};

export default RestuarantCard;
