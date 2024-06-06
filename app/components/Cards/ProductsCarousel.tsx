"use client";
import { IProducts } from "@/app/types/products";
import React, { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { calculatePrice } from "@/app/utils/productUtils";
import ProductCard from "./ProductCard";
import Spinner from "../Spinner";

const ProductsCarousel = () => {
  const [data, setData] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    try {
      const response = await fetch("/api/getLimitedProducts");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const productsData = await response.json();
      setData(productsData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  if (loading) return <Spinner />;
  const firstSevenProducts = data.slice(0, 7);
  const previewProductsData = calculatePrice(firstSevenProducts);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-4/5 mt-4"
    >
      <CarouselContent>
        {previewProductsData.map((product) => (
          <CarouselItem key={product.id}>
            <ProductCard key={product.id} {...product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProductsCarousel;
