import { IProducts } from "../types/products";

const validateImgUrl = (products: IProducts[]) =>
  products.filter((product) => {
    return (
      product.productimage.includes("/images/products/") &&
      product.productimage.endsWith(".jpg")
    );
  });

export { validateImgUrl };
