"use client";
import { useCallback, useEffect, useState } from "react";
import { IProducts } from "../types/products";
import ProductCard from "../components/Cards/ProductCard";
import { calculatePrice } from "../utils/productUtils";
import PageTitleDivider from "../components/PageTitleDivider";
import Spinner from "../components/Spinner";

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

  return (
    <>
      <PageTitleDivider title="Produkter" />
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

export default Products;
