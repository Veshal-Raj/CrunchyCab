import RestuarantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import "./Body.css";



const Body = () => {
  //Local State Variable - Super powerful variable
  const [restuarantList, setRestuarantList] = useState([]); // avoiding mockData

  const [filteredResturant, setFilterResturant] = useState("");

  const [searchText, setSearchText] = useState("")

  useEffect(()=> {
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
    const json = await data.json()
    
    // Optional Chaining
    setRestuarantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterResturant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
    fetchData()
  }, []);


  // Conditional Rendering

  return !restuarantList || restuarantList.length === 0 ? <Shimmer /> : (
   
    <div className="body">
     
      <div className="filter">

      <div className="search">
        <input 
            type="text"
            className="search-box" 
            value={searchText}  
            onChange={(e) => {
              setSearchText(e.target.value)
            }}  
            placeholder="Search Restaurants"/>
        <button 
          className="search-button"
          onClick={()=> {
            console.log(searchText);
           const filteredResturant = restuarantList.filter((res) => 
           res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
           );
           setFilterResturant(filteredResturant)
          }
        }>Search</button>
      </div>


        <button
          className="filter-btn"
          
          onClick={() => {
           
            const filterListOfResturants = restuarantList.filter(
              (res) => res.info.avgRating > 4
            );
            setFilterResturant(filterListOfResturants);
          }}
        >
          <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
          Top Rated Restuarants
        </button>
      </div>
      <div className="res-container">
  {filteredResturant.map((restaurant, index) => {
    return (
      <RestuarantCard
        key={index} // Ensure to provide a unique key for each component
        restaurant={restaurant}
      />
    );
  })}
</div>

      {console.log('body rendered')}
      
    </div>
  );
}
export default Body;
