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
import { calculatePrice } from "@/app/utils/productUtils";
import { Badge } from "@/app/components/ui/badge";

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
  const previewProductsData = calculatePrice(firstSevenProducts);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[90%]"
    >
      <CarouselContent>
        {previewProductsData.map((product) => (
          <CarouselItem key={product.id}>
            <div className="flex flex-col m-2 justify-between items-center bg-white shadow-md p-2 text-center cursor-pointer w-52 lg:w-72 lg:h-96">
              <div className="flex self-start">
                {product.campaign_name === "Rea!" && (
                  <Badge variant="campaign">{product.campaign_name}</Badge>
                )}
                {product.campaign_name === "Outlet" && (
                  <Badge variant="outlet">{product.campaign_name}</Badge>
                )}
              </div>
              <div className="flex-shrink-0  h-48 lg:h-56">
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

              <h3>{product.name}</h3>
              {product.discountPrice ? (
                <>
                  <p>ord. {product.price} kr</p>
                  <h4 className="text-red-600">{product.discountPrice} kr</h4>
                </>
              ) : (
                <h3>{product.price} kr</h3>
              )}
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
