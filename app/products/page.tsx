"use client";
import React, { useCallback, useEffect, useState } from "react";
import { IProducts } from "../types/products";
import ProductCard from "../components/Cards/ProductCard";
import { calculatePrice } from "../utils/productUtils";

const Products = () => {
  const [data, setData] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    try {
      const response = await fetch("/api/getProducts");
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

  if (loading) return <div>Loading...</div>;
  return (
    <>
      <h1>Alla produkter</h1>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};

export default Products;
