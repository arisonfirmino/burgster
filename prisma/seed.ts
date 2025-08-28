import { db } from "@/app/lib/prisma";

async function main() {
  try {
    const burgers = [
      {
        name: "Burgster Clássico",
        description:
          "Pão brioche, hambúrguer 150g, queijo cheddar, alface, tomate e molho especial.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756373275/p7x3e5yhqgndkzguaitd.jpg",
        price: 28.0,
        discount: 10,
      },
      {
        name: "Bacon Supreme",
        description:
          "Hambúrguer 180g, queijo prato, bacon crocante, cebola caramelizada e maionese Burgster.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756373275/zcyierwzb4vmakxvbwvx.jpg",
        price: 32.0,
        discount: 15,
      },
      {
        name: "Cheddar Melt",
        description:
          "Hambúrguer 150g, duplo cheddar, picles e molho especial da casa.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756373275/h5fe9qpwmhq8bxnfhkpi.jpg",
        price: 30.0,
        discount: 5,
      },
      {
        name: "Frango Crispy",
        description:
          "Peito de frango empanado, alface, tomate, queijo e molho honey mustard.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756373275/hf9sqmlalkfvy1jx4bwx.jpg",
        price: 27.0,
        discount: 27.0,
      },
      {
        name: "Veggie Delight",
        description:
          "Hambúrguer de grão-de-bico, alface, tomate, cenoura ralada e molho vegano.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756373275/r8tb0iitotntwv1n44dx.jpg",
        price: 26.0,
        discount: 5,
      },
      {
        name: "Duplo Burgster",
        description:
          "Dois hambúrgueres 150g, queijo cheddar, bacon, alface e molho especial.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756373275/llbrrlpu109trnbwvcfd.jpg",
        price: 38.0,
      },
      {
        name: "Mushroom Lover",
        description:
          "Hambúrguer 180g, cogumelos salteados, queijo suíço e maionese de ervas.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756373275/jpmth3toehan1xvnqdm1.jpg",
        price: 34.0,
      },
      {
        name: "Spicy Jalapeño",
        description:
          "Hambúrguer 150g, queijo pepper jack, jalapeños, alface e molho picante.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756373275/ib1yazt613zcgc874t7a.jpg",
        price: 31.0,
      },
    ];

    await db.burger.createMany({
      data: burgers,
    });
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await db.$disconnect();
  }
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await db.$disconnect();
    process.exit(1);
  });
