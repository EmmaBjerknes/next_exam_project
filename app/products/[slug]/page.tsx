"use client";
import { IProducts } from "@/app/types/products";
import React, { useCallback, useContext, useEffect, useState } from "react";
import Image from "next/image";
import PriceBox from "@/app/components/Cards/components/PriceBox";
import { Button } from "@/app/components/ui/button";
import ValidBadge from "@/app/components/Cards/components/ValidBadge";
import { useRouter } from "next/navigation";
import { IoCaretBack } from "react-icons/io5";
import { CartContext } from "@/app/utils/CartContext";
import { MdOutlineShoppingCart } from "react-icons/md";
import PageTitleDivider from "@/app/components/PageTitleDivider";
import Spinner from "@/app/components/Spinner";

const SingleProduct = ({ params }: { params: { slug: string } }) => {
  const { addToCart } = useContext(CartContext);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<IProducts>({
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
      setProduct(productsData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  const splitProductName = (productName: string) =>
    productName.split(",").map((part) => part.trim());
  const productNameArray = splitProductName(product.name);

  if (product.campaign_discount_percent !== null) {
    product.discountPrice = Math.round(
      product.price * (1 - product.campaign_discount_percent / 100)
    );
  }
  product.price = Math.round(product.price);

  return (
    <>
      <div className="w-full relative mb-2 sm:absolute sm:left-2 hidden sm:block">
        <Button variant={"navBack"} onClick={() => router.back()}>
          <IoCaretBack />
          Tillbaka
        </Button>
      </div>

      <PageTitleDivider title={`${product.name}`} />
      {loading ? (
        <Spinner />
      ) : (
        <div className="m-2 p-2 lg:w-2/3">
          <div className="flex flex-col md:flex-row items-center justify-around m-2">
            <div className="shadow-md p-2 bg-white">
              <div className="flex-shrink-0 h-56 md:h-80">
                {
                  <Image
                    src={`https://www.mcdn.net${product.productimage}`}
                    alt={`Produktbild av ${product.name}`}
                    className="object-contain w-full h-full"
                    width={0}
                    height={0}
                    priority={true}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                }
              </div>
            </div>

            <div className="flex flex-col m-2 justify-between items-center text-center md:gap-3">
              <h3>{productNameArray[0]}</h3>

              <ValidBadge {...product} />

              <div className="flex flex-col gap-2 my-4 text-center">
                <PriceBox {...product} />
              </div>

              <Button variant={"addToCart"} onClick={() => addToCart(product)}>
                <div className="flex gap-1 items-center">
                  <MdOutlineShoppingCart className="w-4 h-4 sm:w-6 sm-h-6" />
                  <h3>Köp</h3>
                </div>
              </Button>
            </div>
          </div>

          <div className="flex flex-col mt-4 justify-between p-4">
            <h3>{product.name}</h3>
            <div>{product.description}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
