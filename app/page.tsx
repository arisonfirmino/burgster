import { db } from "@/app/lib/prisma";

const Home = async () => {
  const burgers = await db.burger.findMany();

  console.log(burgers);

  return <main />;
};

export default Home;
