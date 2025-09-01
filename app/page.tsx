import { Header } from "@/app/components/ui/header";
import { HeaderBar } from "@/app/components/header/header-bar";
import { Separator } from "@/app/components/ui/separator";
import { HeroSection } from "@/app/components/header/hero/hero-section";
import { ServiceHighlight } from "@/app/components/header/service-highlight";

const Home = () => {
  return (
    <>
      <Header>
        <HeaderBar />
        <Separator className="max-w-5xl" />
        <HeroSection />
        <ServiceHighlight />
      </Header>
    </>
  );
};

export default Home;
