import { getCategories } from "@/app/helpers/getCategories";
import { getProducts } from "@/app/helpers/getProducts";

import { Header } from "@/app/components/ui/header";
import { HeaderBar } from "@/app/components/header/header-bar";
import { Separator } from "@/app/components/ui/separator";
import { HeroSection } from "@/app/components/header/hero/hero-section";
import { ServiceHighlight } from "@/app/components/header/service-highlight";
import { MenuSection } from "@/app/components/menu/menu-section";

const Home = async () => {
  const categories = await getCategories();
  const products = await getProducts();

  return (
    <>
      <Header>
        <HeaderBar />
        <Separator className="max-w-5xl" />
        <HeroSection />
        <ServiceHighlight />
      </Header>

      <main>
        <MenuSection categories={categories} products={products} />
      </main>
    </>
  );
};

export default Home;
