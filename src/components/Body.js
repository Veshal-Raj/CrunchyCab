import RestuarantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestuarantCard
            key={restaurant.id} // Ensure to provide a unique key for each component
            resObj={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
