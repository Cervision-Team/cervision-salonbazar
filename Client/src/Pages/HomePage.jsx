import React from "react";
import HomeHeader from "../Components/Home/HomeHeader/HomeHeader";
import Search from "../Components/Home/Search/Search";
import Product from "../Components/Home/Product/Product";
import FiveBox from "../Components/Home/FiveBox/FiveBox";
import Shop from "../Components/Home/Shop/Shop";
import Announcement from "../Components/Home/Announcement/Announcement";
import Activate from "../Components/Home/Activate/Activate";
import Career from "../Components/Home/Career/Career";
import Selling from "../Components/Home/Selling/Selling";
import Packet from "../Components/Home/Packet/Packet";

function HomePage() {
  return (
    <>
      <HomeHeader />
      <Search />
      <FiveBox />
      <Product />
      <Shop />
      <Activate />
      <Announcement />
      <Career />
      <Selling />
      <Packet />
    </>
  );
}

export default HomePage;
