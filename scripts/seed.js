const { db } = require("@vercel/postgres");
const { products, campaign } = require("../app/lib/placeholder-data.js");

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

async function seedCampaigns(client) {
  try {
    // Create the "products" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS campaign (
          id SERIAL PRIMARY KEY,
          name VARCHAR(512) NOT NULL,
          discountPercent INT NOT NULL
        );
      `;

    console.log(`Created "campaign" table`);

    // Insert data into the "campaign" table
    const insertedCampaigns = await Promise.all(
      campaign.map((camp) =>
        client.query(
          `
          INSERT INTO campaign (name, discountPercent)
          VALUES ($1, $2)
          ON CONFLICT (id) DO NOTHING;
        `,
          [camp.name, camp.discountPercent]
        )
      )
    );

    console.log(`Seeded ${insertedCampaigns.length} campaign`);

    return {
      createTable,
      campaign: insertedCampaigns,
    };
  } catch (error) {
    console.error("Error seeding campaign:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  // await seedProducts(client);
  await seedCampaigns(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
