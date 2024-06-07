"use client";
import { IProducts } from "@/app/types/products";
import { useCallback, useContext, useEffect, useState } from "react";
import Image from "next/image";
import PriceBox from "@/app/components/Cards/components/PriceBox";
import { Button } from "@/app/components/ui/button";
import ValidBadge from "@/app/components/Cards/components/ValidBadge";
import { CartContext } from "@/app/utils/CartContext";
import { MdOutlineShoppingCart } from "react-icons/md";
import PageTitleDivider from "@/app/components/PageTitleDivider";
import Spinner from "@/app/components/Spinner";
import NavBackButton from "@/app/components/NavBackButton";
import { Card } from "@/app/components/ui/card";
import { Separator } from "@/app/components/ui/seperator";

const SingleProduct = ({ params }: { params: { slug: string } }) => {
  const { addToCart } = useContext(CartContext);
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
      <NavBackButton />

      {loading ? (
        <Spinner />
      ) : (
        <div className="m-2 p-2 ">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 m-4">
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

            <div className="flex flex-col m-2 justify-between items-center text-center gap-2 sm:gap-3">
              <h2>{productNameArray[0]}</h2>

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

          <Card className="flex flex-col w-full sm:w-4/5 lg:w-1/2 mx-auto shadow-lg mt-4 p-4">
            <h3>Beskrivning</h3>
            <div>{product.description}</div>
          </Card>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
