const { db } = require("@vercel/postgres");
const { products } = require("../app/lib/placeholder-data.js");

async function seedProducts(client) {
  try {
    // Create the "products" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS products (
          id VARCHAR(124) NOT NULL PRIMARY KEY,
          campaign INT,
          name VARCHAR(512) NOT NULL,
          description VARCHAR(512) NOT NULL,
          productImage VARCHAR(124) NOT NULL,
          price DECIMAL(10, 2) NOT NULL,
          category VARCHAR(124) NOT NULL
        );
      `;

    console.log(`Created "products" table`);

    // Insert data into the "products" table
    const insertedProducts = await Promise.all(
      products.map((prod) =>
        client.query(
          `
          INSERT INTO products (id, campaign, name, description, productImage, price, category)
          VALUES ($1, $2, $3, $4, $5, $6, $7)
          ON CONFLICT (id) DO NOTHING;
        `,
          [
            prod.id,
            prod.campaign,
            prod.name,
            prod.description,
            prod.productImage,
            prod.price,
            prod.category,
          ]
        )
      )
    );

    console.log(`Seeded ${insertedProducts.length} products`);

    return {
      createTable,
      products: insertedProducts,
    };
  } catch (error) {
    console.error("Error seeding products:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedProducts(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
