"use client";
import { getCampaignProducts } from "@/app/data/utils/getProducts";
import { IProducts } from "@/app/types/products";
import React, { useEffect, useState } from "react";

const Campaign = () => {
  const [data, setData] = useState<IProducts[]>();

  useEffect(() => {
    async function getData() {
      const product = await getCampaignProducts();
      console.log(product);
      setData(product);
    }
    getData();
  }, []);
  return <div>campaign</div>;
};

export default Campaign;
