"use client";
import ProductCard from "@/app/components/Cards/ProductCard";
import PageTitleDivider from "@/app/components/PageTitleDivider";
import Spinner from "@/app/components/Spinner";
import { IProducts } from "@/app/types/products";
import { calculatePrice } from "@/app/utils/productUtils";
import React, { useCallback, useEffect, useState } from "react";

const Campaign = () => {
  const [data, setData] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    try {
      const response = await fetch("/api/campaign");
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

  const products = calculatePrice(data);

  return (
    <>
      <PageTitleDivider title="Kampanj" />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex flex-wrap justify-center">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Campaign;
