import { IProducts } from "@/app/types/products";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductsCard = (product: IProducts) => {
  const router = useRouter();

  const splitProductName = (productName: string) =>
    productName.split(",").map((part) => part.trim());
  const productNameArray = splitProductName(product.name);

  return (
    <div
      onClick={() => router.push("/products/" + product.id)}
      className="flex flex-col m-2 justify-between items-center bg-white shadow-md p-2 text-center cursor-pointer w-52 lg:w-72 lg:h-96"
    >
      <div className="flex self-start">
        {product.campaign_name === "Rea!" && (
          <Badge variant="campaign">{product.campaign_name}</Badge>
        )}
        {product.campaign_name === "Outlet" && (
          <Badge variant="outlet">{product.campaign_name}</Badge>
        )}
      </div>
      <div className="flex-shrink-0 h-48 lg:h-56">
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

      <h3>{productNameArray[0]}</h3>
      {productNameArray[1] && <p>{productNameArray[1]}</p>}
      {product.discountPrice ? (
        <>
          <p>ord. {product.price} kr</p>
          <h4 className="text-red-600">{product.discountPrice} kr</h4>
        </>
      ) : (
        <h3>{product.price} kr</h3>
      )}
    </div>
  );
};

export default ProductsCard;
