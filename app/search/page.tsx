"use client";
import { useCallback, useEffect, useState } from "react";
import { IProducts } from "../types/products";
import { useSearchParams } from "next/navigation";
import { calculatePrice } from "../utils/productUtils";
import ProductCard from "../components/Cards/ProductCard";
import PageTitleDivider from "../components/PageTitleDivider";
import Spinner from "../components/Spinner";
import NavBackButton from "../components/NavBackButton";

const SearchResult = () => {
  const [data, setData] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const searchQuery = searchParams && searchParams.get("q");

  const getData = useCallback(async () => {
    try {
      const response = await fetch(`/api/search/${searchQuery}`);
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
  }, [searchQuery]);

  useEffect(() => {
    getData();
  }, [getData]);

  const products = calculatePrice(data);

  return (
    <>
      <NavBackButton />

      <PageTitleDivider title={`Resultat för "${searchQuery}"`} />
      {loading ? (
        <Spinner />
      ) : (
        <>
          {products.length <= 0 ? (
            <h4>Tyvärr gav din sökning inga träffar</h4>
          ) : (
            <div className="flex flex-wrap justify-center">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SearchResult;
