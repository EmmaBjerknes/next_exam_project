import { IProducts } from "@/app/types/products";
import { Badge } from "../../ui/badge";

const ValidBadge = (product: IProducts) => {
  return (
    <>
      {product.campaign_name === "Rea!" && (
        <Badge variant="campaign">
          {product.campaign_name} {product.campaign_discount_percent}%
        </Badge>
      )}
      {product.campaign_name === "Outlet" && (
        <Badge variant="outlet">
          {product.campaign_name} {product.campaign_discount_percent}%
        </Badge>
      )}
    </>
  );
};

export default ValidBadge;
