import RestuarantCard from "./RestaurantCard";
import mockData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Local State Variable - Super powerful variable
  const [restuarantList, setRestuarantList] = useState(mockData);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
             // Filter logic
            const filterListOfResturants = restuarantList.filter(
              (res) => res.avgRating > 4
            );
            setRestuarantList(filterListOfResturants);
          }}
        >
          Top Rated Restuarants
        </button>
      </div>
      <div className="res-container">
        {restuarantList.map((restaurant) => ( 
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
