"use client";
import { IProducts } from "@/app/types/products";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";

const PreviewProductsCards = () => {
  const [data, setData] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
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
    }
    getData();
  }, []);

  if (loading) return <div>Loading...</div>;
  const firstSevenProducts = data.slice(0, 7);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[90%]"
    >
      <CarouselContent>
        {firstSevenProducts.map((product, index) => (
          <CarouselItem key={index}>
            <div className="flex flex-col m-2 md:w-60 md:h-100 justify-center items-center bg-white shadow-md p-2 text-center cursor-pointer">
              {product.campaign_discount_percent === null ? (
                <p>herp</p>
              ) : (
                <p>derp</p>
              )}
              <div className="md:w-24 md:h-48 w-40 h-60 lg:w-60 lg:h-80 relative">
                {
                  <Image
                    src={`https://www.mcdn.net${product.productimage}`}
                    alt={`Produktbild av ${product.name}`}
                    className="object-contain w-full h-full"
                    width={0}
                    height={0}
                    priority={true}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                }
              </div>

              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default PreviewProductsCards;
