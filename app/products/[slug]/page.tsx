"use client";
import { Badge } from "@/app/components/ui/badge";
import { IProducts } from "@/app/types/products";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import PriceBox from "@/app/components/Cards/components/PriceBox";
import { Button } from "@/app/components/ui/button";
import ValidBadge from "@/app/components/Cards/components/ValidBadge";

const SingleProduct = ({ params }: { params: { slug: string } }) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<IProducts>({
    id: "",
    name: "",
    description: "",
    productimage: "",
    price: 0,
    category: "",
    campaign_discount_percent: null,
    campaign_name: null,
  });

  const id = params.slug;
  const getProduct = useCallback(async () => {
    try {
      const response = await fetch(`/api/products/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }
      const productsData = await response.json();
      setProduct(productsData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  const splitProductName = (productName: string) =>
    productName.split(",").map((part) => part.trim());
  const productNameArray = splitProductName(product.name);

  if (product.campaign_discount_percent !== null) {
    product.discountPrice = Math.round(
      product.price * (1 - product.campaign_discount_percent / 100)
    );
  }
  product.price = Math.round(product.price);

  if (loading) return <div>Loading...</div>;
  return (
    <div className="m-2 p-2 lg:w-2/3">
      <div className="flex flex-col md:flex-row items-center justify-around m-2">
        <div className="shadow-md p-2">
          <div className="flex-shrink-0 h-56 md:h-80">
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
        </div>

        <div className="flex flex-col m-2 justify-between items-center text-center md:gap-3">
          <h3>{productNameArray[0]}</h3>

          <ValidBadge {...product} />

          <div className="flex flex-col gap-2 my-4 text-center">
            <PriceBox {...product} />
          </div>

          <Button
            variant={"addToCart"}
            onClick={() => console.log("add to cart", product.id)}
          >
            Lägg i varukorg
          </Button>
        </div>
      </div>

      <div className="flex flex-col mt-4 justify-between p-4">
        <h3>{product.name}</h3>
        <div>{product.description}</div>
      </div>
    </div>
  );
};

export default SingleProduct;
