import { IProducts } from "@/app/types/products";
import { cache } from "react";

export const getProducts = cache(async () => {
  const apiURL = "http://localhost:3001/products";
  const res = await fetch(apiURL);
  const data: IProducts[] = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return data;
});

export const getSingleProduct = async (id: string) => {
  const apiURL = "http://localhost:3001/products/" + id;
  const res = await fetch(apiURL);
  const data: IProducts = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return data;
};

export const getCampaignProducts = cache(async () => {
  const apiURL = "http://localhost:3001/products/";
  const res = await fetch(apiURL);
  const data: IProducts[] = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const campaign = data.filter((item) => item.category === "kampanj");

  return campaign;
});
