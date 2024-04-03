"use client";
import React, { useEffect, useState } from "react";
import { IProducts } from "../types/products";

const Products = () => {
  const [data, setData] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("/api/getProducts");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const productsData = await response.json();
        setData(productsData);
        console.log(productsData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Products</h1>
          <ul>
            {data.map((product, i) => (
              <li key={i}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <p>{product.price}</p>
                {product.campaign_discount_percent === null ? (
                  <p>herp</p>
                ) : (
                  <p>derp</p>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Products;
