"use client";
import { getSingleProduct } from "@/app/data/utils/getProducts";
import { IProducts } from "@/app/types/products";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SingleProduct = () => {
  const [data, setData] = useState<IProducts>();
  const params = useParams<{ slug: "string" }>();

  useEffect(() => {
    async function getData() {
      const product = await getSingleProduct(params.slug);
      console.log(product);
      setData(product);
    }
    getData();
  }, [params]);
  return <div>{data?.name}</div>;
};

export default SingleProduct;
