import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { IProducts } from "@/app/types/products";
import { validateImgUrl } from "@/app/utils/productUtils";

export async function GET(
  req: NextRequest,
  { params }: { params: { param: string } }
) {
  try {
    const productName = params.param;
    const foundProducts = await sql`
        SELECT
          p.id,
          p.name,
          p.description,
          p.productimage,
          p.price,
          p.category,
          c.name AS campaign_name,
          c.discountPercent AS campaign_discount_percent
        FROM
          products p
        LEFT JOIN
          campaign c ON p.campaign = c.id
        WHERE
          p.name ILIKE ${"%" + productName + "%"};
      `;

    const validProducts = validateImgUrl(foundProducts.rows as IProducts[]);

    return NextResponse.json(validProducts, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw new Error("Failed to fetch products.");
  }
}
