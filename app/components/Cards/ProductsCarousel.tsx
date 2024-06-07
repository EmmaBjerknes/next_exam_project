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
import { Button } from "../ui/button";
import Link from "next/link";
import { IoCaretForward } from "react-icons/io5";

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
    <div className="flex flex-col w-5/6">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mt-4"
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

      <div className="flex justify-end">
        <Button variant="outline">
          <Link
            href={"/products"}
            className="flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors"
          >
            <h4>Se alla produkter</h4>
            <IoCaretForward />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductsCarousel;
