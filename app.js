import React from "react";
import ReactDOM from "react-dom/client";

/**
 *
 *    Components
 *    ----------
 *      Header
 *        - Logo
 *        - Nav items
 *      Body
 *        - Search bar
 *        - Restuarant Container
 *        - Restuarant Card
 *          - Img
 *          - Name of the Restuarant, rating, cuisine, devilery time etc.
 *      Footer
 *        - Copyright
 *        - Links
 *        - Address
 *        - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/originals/72/c1/b2/72c1b24f3e90d7766b0e5ad03b5d8145.jpg"
        />
        <h1 className="company-name">CrunchyCab</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <img alt="cart" src="Images/shopping_cart.png" />
          </li>
        </ul>
      </div>
    </div>
  );
};

const RestuarantCard = ({ resObj }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, timeTaken } = resObj;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0fff" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} // Update image URL as required
      />
      <h3>{name} </h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{timeTaken}</h4>
    </div>
  );
};

const resList = [

  {
    id: "1",
    name: "Tasty Chile",
    cloudinaryImageId: "b5303a94c367062c158ce278bf6307a3",
    locality: "Mavoor Road",
    areaName: "Kuttichira",
    costForTwo: "₹400 for two",
    cuisines: [
      "South Indian",
      "Kerala",
      "Biryani",
      "Chinese",
      "Salads",
      "Seafood",
      "North Indian",
    ],
    avgRating: 4.3,
    timeTaken: '45 min',

  },
  {
    id: "2",
    name: "Hotel Sagar (Old Sagar)",
    cloudinaryImageId: "rapy3ovwlb9rp5udsvcr",
    locality: "Mavoor Road",
    areaName: "Kuttichira",
    costForTwo: "₹400 for two",
    cuisines: [
      "Chinese",
      "North Indian",
      "South Indian",
      "Ice Cream",
      "Biryani",
    ],
    avgRating: 4.3,
    timeTaken: '55 min',

  },
  {
    id: "3",
    name: "Hotel Sarovar",
    cloudinaryImageId: "ff12prdz1rmyzmxx3z3y",
    locality: "GH Road",
    areaName: "Palayam",
    costForTwo: "₹200 for two",
    cuisines: [
      "Chinese",
      "North Indian",
      "South Indian",
      "Ice Cream",
      "Biryani",
    ],
    avgRating: 4.3,
    timeTaken: '15 min',

  },
  {
    id: "4",
    name: "Domino's Pizza",
    cloudinaryImageId: "po2uphlrcawsfglehobb",
    locality: "Green Nagar",
    areaName: "Karaparamba",
    costForTwo: "₹400 for two",
    cuisines: [
    "Pizzas",
    "Italian",
    "Pastas",
    "Desserts"
    ],
    avgRating: 4.4,
    timeTaken: '20 min',

  },
  {
    id: "5",
    name: "Chicking",
    cloudinaryImageId: "86f52324ecee5fc94cbf63c4a568b672",
    locality: "Bypass Road",
    areaName: "Ummalathoor",
    costForTwo: "₹300 for two",
    cuisines: [
    "Snacks",
    "Grill",
    "Fast Food",
    "American",
    "Pizzas",
    "Mexican",
    "Beverages"
    ],
    avgRating: 3.7,
    timeTaken: '20 min',

  },
  {
    id: "6",
    name: "Top Form_Mavoor Road",
    cloudinaryImageId: "b5303a94c367062c158ce278bf6307a3",
    locality: "Mavoor Road",
    areaName: "Kuttichira",
    costForTwo: "₹400 for two",
    cuisines: [
    "South Indian",
    "Kerala",
    "Biryani",
    "Chinese",
    "Salads",
    "Seafood",
    "North Indian"
    ],
    avgRating: 4.3,
    timeTaken: '20 min',

  },
  {
    id: "7",
    name: "Cita Pani",
    cloudinaryImageId: "cyvlgeod0xflvebl9kat",
    locality: "Moonalungal",
    areaName: "Kuttichira",
    costForTwo: "₹200 for two",
    cuisines: [
    "Arabian",
    "Snacks",
    "Beverages"
    ],
    "avgRating": 3.2,
    timeTaken: '20 min',

  },
  {
    id: "8",
    name: "Hotel Sagar (Old Sagar)",
    cloudinaryImageId: "rapy3ovwlb9rp5udsvcr",
    locality: "Mavoor Road",
    areaName: "Kuttichira",
    costForTwo: "₹400 for two",
    cuisines: [
    "Chinese",
    "North Indian",
    "South Indian",
    "Ice Cream",
    "Biryani"
    ],
    avgRating: 4.3,
    timeTaken: '20 min',

                      
  },
  {
    id: "9",
    name: "Dessert Storm India(JAFFAH RETAIL)",
    cloudinaryImageId: "kqahy3yfduzz30mgpq2p",
    "locality": "Mavoor Road",
    areaName: "Palayam",
    costForTwo: "₹300 for two",
    cuisines: [
    "Desserts",
    "Fast Food",
    "Ice Cream Cakes",
    "Waffle",
    "Juices"
    ],
    avgRating: 4.2,
    timeTaken: '20 min',

  },
  {
    id: "10",
    name: "Cafe Dicaprio",
    cloudinaryImageId: "pu9who2f6x2wzad15uui",
    locality: "PT Usha Road",
    areaName: "Vellayil",
    costForTwo: "₹250 for two",
    cuisines: [
    "Pastas",
    "Chinese",
    "Burgers",
    "Ice Cream",
    "Pizzas"
    ],
    avgRating: 3.5,
    timeTaken: '20 min',

  },
  {
    id: "11",
    name: "Bucket Bites",
    cloudinaryImageId: "ogbutaqxnn8kxyl47hum",
    locality: "Beach Road",
    areaName: "Vellayil",
    costForTwo: "₹250 for two",
    cuisines: [
      "Cafe",
      "Fast Food",
      "Snacks",
      "Arabian",
      "North Indian",
      "Tandoor",
      "Burgers"
    ],
    avgRating: 3.6,
    timeTaken: '22 min',

  },
  {
    id: "12",
    name: "Doner Club",
    cloudinaryImageId: "ryvtmvfbnw7kxcsao7t3",
    locality: "Indira Gandhi Road",
    areaName: "Palayam",
    costForTwo: "₹300 for two",
    cuisines: [
    "Arabian",
    "Kebabs",
    "Burgers",
    "Juices"
    ],
    avgRating: 3.8,
    timeTaken: '20 min',

  }
];

// not using keys (not acceptable) <<<<<<<< index as key <<<<<<<<<<<< unique id (best practice)

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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
