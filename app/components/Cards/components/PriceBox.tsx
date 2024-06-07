import { IProducts } from "@/app/types/products";

const PriceBox = (data: IProducts) => {
  return (
    <>
      {data.campaign_discount_percent ? (
        <>
          <p>Ord. {data.price} kr</p>
          <h2 className="text-red-600">{data.discountPrice} kr</h2>
        </>
      ) : (
        <h3>{data.price} kr</h3>
      )}
    </>
  );
};

export default PriceBox;
