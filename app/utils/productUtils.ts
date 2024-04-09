import { IProducts } from "../types/products";

const validateImgUrl = (products: IProducts[]) =>
  products.filter((product) => {
    return (
      product.productimage.includes("/images/products/") &&
      product.productimage.endsWith(".jpg")
    );
  });

const calculatePrice = (products: IProducts[]) =>
  products
    .map((product) => {
      if (product.campaign_discount_percent !== null) {
        product.discountPrice = Math.round(
          product.price * (1 - product.campaign_discount_percent / 100)
        );
      }
      product.price = Math.round(product.price);
      return product;
    })
    .filter(
      (product) =>
        product.price >= 0 ||
        (product.discountPrice !== undefined && product.discountPrice >= 0)
    );

export { validateImgUrl, calculatePrice };
