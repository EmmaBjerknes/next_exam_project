import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const completeProductList = await sql`
      SELECT 
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
    `;

    const validProducts = completeProductList.rows.filter((product) => {
      return (
        product.productimage.includes("/images/products/") &&
        product.productimage.endsWith(".jpg")
      );
    });

    return NextResponse.json(validProducts, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw new Error("Failed to fetch products.");
  }
}
