import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.carrier.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "DHL",
    },
  });
  await prisma.carrier.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: "DPD",
    },
  });
  await prisma.carrier.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: "UPS",
    },
  });
  await prisma.carrier.upsert({
    where: { id: 4 },
    update: {},
    create: {
      name: "FedEx",
    },
  });
  await prisma.carrier.upsert({
    where: { id: 5 },
    update: {},
    create: {
      name: "GLS",
    },
  });

  await prisma.article.upsert({
    where: { sku: "LP123" },
    update: {},
    create: {
      sku: "LP123",
      name: "laptop",
      price: 800,
    },
  });
  await prisma.article.upsert({
    where: { sku: "MO456" },
    update: {},
    create: {
      sku: "MO456",
      name: "mouse",
      price: 25,
    },
  });
  await prisma.article.upsert({
    where: { sku: "KB012" },
    update: {},
    create: {
      sku: "KB012",
      name: "laptop",
      price: 50,
    },
  });
  await prisma.article.upsert({
    where: { sku: "MT789" },
    update: {},
    create: {
      sku: "MT789",
      name: "monitor",
      price: 200,
    },
  });

  await prisma.shipment.upsert({
    where: { trackingNumber: "TN12345678" },
    update: {},
    create: {
      trackingNumber: "TN12345678",
      senderZip: "10115",
      senderCountry: "Germany",
      senderCity: "Berlin",
      senderAddress: "Street 1",
      receiverZip: "75001",
      receiverCountry: "France",
      receiverCity: "Paris",
      receiverAddress: "Street 10",
      carrier: {
        connect: {
          id: 1,
        },
      },
      articlesOnShipment: {
        create: [
          { articleId: 1, quantity: 1 },
          { articleId: 2, quantity: 1 },
        ],
      },
    },
  });

  await prisma.shipment.upsert({
    where: { trackingNumber: "TN12345679" },
    update: {},
    create: {
      trackingNumber: "TN12345679",
      senderZip: "20144",
      senderCountry: "Germany",
      senderCity: "Hamburg",
      senderAddress: "Street 2",
      receiverZip: "1000",
      receiverCountry: "Belgium",
      receiverCity: "Brussels",
      receiverAddress: "Street 20",
      carrier: {
        connect: {
          id: 3,
        },
      },
      articlesOnShipment: {
        create: [{ articleId: 4, quantity: 2 }],
      },
    },
  });

  await prisma.shipment.upsert({
    where: { trackingNumber: "TN12345680" },
    update: {},
    create: {
      trackingNumber: "TN12345680",
      senderZip: "80331",
      senderCountry: "Germany",
      senderCity: "Munich",
      senderAddress: "Street 3",
      receiverZip: "28013",
      receiverCountry: "Spain",
      receiverCity: "Madrid",
      receiverAddress: "Street 5",
      carrier: {
        connect: {
          id: 2,
        },
      },
      articlesOnShipment: {
        create: [
          { articleId: 3, quantity: 1 },
          { articleId: 2, quantity: 1 },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
