import React from "react";
import ProductsCarousel from "./components/Cards/ProductsCarousel";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <>
      <SearchBar />
      <HeroBanner />
      <ProductsCarousel />
    </>
  );
}
