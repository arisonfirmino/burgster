import { db } from "@/app/lib/prisma";

async function main() {
  try {
    const users = [
      {
        id: "user0",
        name: "Mariana Duarte",
        email: "marianaduarte@burgster.com",
        avatar:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756719579/klvqdp5anxmlmay5tans.jpg",
      },
      {
        id: "user1",
        name: "Lucas Ferreira",
        email: "lucasferreira@burgster.com",
        avatar:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756719579/nogjat1dbculuuho1xlp.jpg",
      },
      {
        id: "user2",
        name: "Camila Andrade",
        email: "camilaandrade@burgster.com",
        avatar:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756719579/ny4tbpoqcqscbtbhtzoc.jpg",
      },
      {
        id: "user3",
        name: "João Batista",
        email: "joãobatista@burgster.com",
        avatar:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756719579/hly2lbpncux5yets0afj.jpg",
      },
      {
        id: "user4",
        name: "Fernanda Oliveira",
        email: "fernandaoliveira@burgster.com",
        avatar:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756719579/syccyfnbamkkzgjwplb6.jpg",
      },
      {
        id: "user5",
        name: "Rafael Souza",
        email: "rafaelsouza@burgster.com",
        avatar:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756719579/d3kthhgebndrbeetsulk.jpg",
      },
    ];

    await db.user.createMany({
      data: users,
    });

    const burgerCategory = await db.category.create({
      data: {
        name: "Hambúrgueres",
        slug: "burgers",
      },
    });

    const burgers = [
      {
        categoryId: burgerCategory.id,
        name: "Smashster Clássico",
        description:
          "Pão brioche, smash burger 100g, queijo cheddar derretido, cebola picada e molho especial da casa.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756441049/zdees4pw29gtj8uxxq82.jpg",
        basePrice: 27.4,
        discountPercentage: 10,
      },
      {
        categoryId: burgerCategory.id,
        name: "Double Smash Attack",
        description:
          "Dois smash burgers 100g, cheddar duplo, picles e molho Burgster.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756441049/wkuscdp5blyjd5itkeq0.jpg",
        basePrice: 34.9,
        discountPercentage: 15,
      },
      {
        categoryId: burgerCategory.id,
        name: "Smash’n Bacon",
        description:
          "Smash burger 120g, cheddar, bacon crocante e maionese defumada.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756441048/ds1c4xcyfwdpug9giere.jpg",
        basePrice: 31.3,
        discountPercentage: 5,
      },
      {
        categoryId: burgerCategory.id,
        name: "Cheesy Smash",
        description:
          "Smash burger 100g, queijo cheddar cremoso em abundância e cebola caramelizada.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756441048/zyo7ljmslblawyhmz8wm.jpg",
        basePrice: 29.8,
      },
      {
        categoryId: burgerCategory.id,
        name: "Fire Smash",
        description:
          "Smash burger 120g, queijo pepper jack, jalapeños frescos e molho picante da casa.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756441048/mgpgkefrcl7mjyhpsifi.jpg",
        basePrice: 30.5,
        discountPercentage: 10,
      },
      {
        categoryId: burgerCategory.id,
        name: "Smash Veggie",
        description:
          "Hambúrguer vegano smash, alface, tomate, queijo vegano e molho especial da casa.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756441048/pksqaojltha8sdvuwhwe.jpg",
        basePrice: 29.4,
        discountPercentage: 5,
      },
      {
        categoryId: burgerCategory.id,
        name: "Triple Smashster",
        description:
          "Três smash burgers 100g, cheddar derretido, cebola roxa e molho Burgster.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756441048/tzkreihnpzgfs4mkymvq.jpg",
        basePrice: 38.4,
      },
      {
        categoryId: burgerCategory.id,
        name: "Mushroom Smash",
        description:
          "Smash burger 120g, cogumelos salteados, queijo suíço e maionese de ervas.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756441048/p2ee9snaqjs5ftzfksug.jpg",
        basePrice: 33.7,
        discountPercentage: 15,
      },
    ];

    await db.product.createMany({
      data: burgers,
    });

    const drinksCategory = await db.category.create({
      data: {
        name: "Bebidas",
        slug: "drinks",
      },
    });

    const drinks = [
      {
        categoryId: drinksCategory.id,
        name: "Burgster Lemonade",
        description:
          "Limonada refrescante feita com limão-siciliano, toque de hortelã e leve doçura natural.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756530829/xjw4yl2opr4mn0ilhqte.jpg",
        basePrice: "12.47",
      },
      {
        categoryId: drinksCategory.id,
        name: "Smash Cola Float",
        description:
          "Refrigerante de cola servido com uma bola de sorvete de creme, cremoso e gelado.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756530829/d8dnyppmsj5ju98g1xjq.jpg",
        basePrice: 15.9,
        discountPercentage: 10,
      },
      {
        categoryId: drinksCategory.id,
        name: "Berry Blast",
        description:
          "Mix frutado de morango, framboesa e mirtilo, batido com gelo e finalizado com espuma suave.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756530828/xbhp5be6uxv6yfae4jpm.jpg",
        basePrice: 17.3,
      },
      {
        categoryId: drinksCategory.id,
        name: "Tropical Smash",
        description:
          "Drink refrescante com abacaxi, manga e maracujá, adoçado na medida certa.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756530828/bkafriocub0htnl8xdzs.jpg",
        basePrice: 16.8,
        discountPercentage: 15,
      },
      {
        categoryId: drinksCategory.id,
        name: "Burgster Iced Coffee",
        description:
          "Café espresso gelado com leite cremoso e toque de baunilha, servido no estilo gourmet.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756530679/ztdpjvv11raidgpvext8.jpg",
        basePrice: 14.2,
      },
    ];

    await db.product.createMany({
      data: drinks,
    });

    const dessertsCategory = await db.category.create({
      data: {
        name: "Sobremesas",
        slug: "desserts",
      },
    });

    const desserts = [
      {
        categoryId: dessertsCategory.id,
        name: "Brownie Smash",
        description:
          "Brownie de chocolate meio amargo, servido quente com calda de chocolate cremosa.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756530680/ogdls0zjp1gzqxvv0lky.jpg",
        basePrice: 14.6,
        discountPercentage: 10,
      },
      {
        categoryId: dessertsCategory.id,
        name: "Cheesecake da Casa",
        description:
          "Cheesecake cremoso com cobertura de calda de morango artesanal.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756530680/b92b1guyexrdzlv23kdd.jpg",
        basePrice: 16.4,
      },
      {
        categoryId: dessertsCategory.id,
        name: "Burgster Sundae",
        description:
          "Sorvete de creme com calda de caramelo, chantilly e farofa crocante.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756530680/amy4rurw9kngsrxykesf.jpg",
        basePrice: 12.8,
      },
      {
        categoryId: dessertsCategory.id,
        name: "Choco Smash Milkshake",
        description:
          "Milkshake de chocolate intenso, batido com sorvete artesanal e chantilly.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756530679/fr9ivks7qgybfre6asdd.jpg",
        basePrice: 18.9,
        discountPercentage: 15,
      },
      {
        categoryId: dessertsCategory.id,
        name: "Cookie Melt",
        description:
          "Cookie recheado de chocolate ao leite, servido levemente aquecido para derreter no primeiro pedaço.",
        imageURL:
          "https://res.cloudinary.com/drnufopzw/image/upload/v1756530679/zm74z4x6cvlwvqsuvldy.jpg",
        basePrice: 13.5,
      },
    ];

    await db.product.createMany({
      data: desserts,
    });

    const reviews = [
      {
        userId: "user0",
        text: "Experiência incrível! O Smashster Clássico estava no ponto certo e super suculento. As batatas crocantes e o atendimento rápido fizeram toda a diferença.",
      },
      {
        userId: "user1",
        text: "Já provei vários smash burgers, mas o Double Smash Attack da Burgster é insuperável. O sabor é marcante e o desconto deixou ainda melhor!",
      },
      {
        userId: "user2",
        text: "Ambiente aconchegante, comida de primeira e preço justo. Pedi também o Berry Blast e foi a combinação perfeita com o meu lanche.",
      },
      {
        userId: "user3",
        text: "O Mushroom Smash é simplesmente sensacional! A mistura de cogumelos com o queijo suíço ficou maravilhosa. Só achei que podia vir com mais molho.",
      },
      {
        userId: "user4",
        text: "Fiz o pedido pelo site e fiquei impressionada com a praticidade. Chegou rápido, quentinho e com tudo muito bem embalado. Já virei cliente fiel!",
      },
      {
        userId: "user5",
        text: "Além dos burgers deliciosos, as sobremesas surpreenderam. O Brownie Smash é viciante, com aquela calda de chocolate que dá vontade de repetir.",
      },
    ];

    await db.review.createMany({
      data: reviews,
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
