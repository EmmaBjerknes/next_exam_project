"use client";
import { IProducts } from "@/app/types/products";
import React, { useCallback, useEffect, useState } from "react";

const SingleProduct = ({ params }: { params: { slug: string } }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IProducts>({
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
      setData(productsData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  if (loading) return <div>Loading...</div>;
  return <div>{data.name}</div>;
  // Todo: Skapa kort för 1 produkt
  // Todo: Skapa navigeringsknapp bakåt
};

export default SingleProduct;
