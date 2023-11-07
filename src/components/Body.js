import RestuarantCard from "./RestaurantCard";
import mockData from "../utils/mockData";
import { useState } from 'react';

const Body = () => {

    //Local State Variable - Super powerful variable
     const  [restuarantList, setRestuarantList]  = useState(mockData)


    return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
              console.log('button clicked');
              // Filter logic
              const filterListOfResturants = restuarantList.filter(
                  res => res.avgRating > 4
                  );
                  console.log(filterListOfResturants)
                  setRestuarantList(filterListOfResturants);
          }}
        >
          Top Rated Button
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
