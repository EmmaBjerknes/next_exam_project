import { IProducts } from "@/app/types/products";
import { validateImgUrl } from "@/app/utils/productUtils";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const limitedProductList = await sql`
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
      LIMIT 14
    `;
    const validProducts = validateImgUrl(
      limitedProductList.rows as IProducts[]
    );

    return NextResponse.json(validProducts, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw new Error("Failed to fetch products.");
  }
}

// ISSUE: För tillfället finns det trasiga URL:er i databasen
// TODO:  Säkerställ att bara valida URL:er läggs in av admin
//        Då kan man sänka limit till 7 här och ta bort valideringen
//
// Nice to have: Förhandsvisning av bilden på admin-sidan
//              - ger feedback visuellt till admin
