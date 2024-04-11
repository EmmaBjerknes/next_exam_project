import React from "react";
import ProductsCarousel from "./components/Cards/ProductsCarousel";
import HeroBanner from "./components/HeroBanner/HeroBanner";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <ProductsCarousel />
    </>
  );
}
