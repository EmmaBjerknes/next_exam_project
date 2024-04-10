import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { IProducts } from "@/app/types/products";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const productId = params.id;
    const product = await sql`
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
          p.id = ${productId};
      `;

    if (product.rows.length === 0) {
      throw new Error("Product not found.");
    }
    const oneProduct = product.rows[0] as IProducts;
    return NextResponse.json(oneProduct, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw new Error("Failed to fetch products.");
  }
}
