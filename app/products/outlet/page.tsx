"use client";
import ProductCard from "@/app/components/Cards/ProductCard";
import PageTitleDivider from "@/app/components/PageTitleDivider";
import { IProducts } from "@/app/types/products";
import { calculatePrice } from "@/app/utils/productUtils";
import React, { useCallback, useEffect, useState } from "react";

const Outlet = () => {
  const [data, setData] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    try {
      const response = await fetch("/api/outlet");
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
      <PageTitleDivider title="Outlet" />
      {loading ? (
        <div>Loading...</div>
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

export default Outlet;
