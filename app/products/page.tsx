"use client";
import React, { useEffect, useState } from "react";
import { IProducts } from "../types/products";
import { getProducts } from "../data/utils/getProducts";

const Products = () => {
  const [data, setData] = useState<IProducts[]>([]);

  useEffect(() => {
    async function getData() {
      const productsData = await getProducts();
      console.log(productsData);
      setData(productsData);
    }
    getData();
  }, []);
  return <div>Products</div>;
};

export default Products;
