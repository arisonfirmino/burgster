import { Header } from "@/app/components/ui/header";
import { HeaderBar } from "@/app/components/header/header-bar";
import { Separator } from "@/app/components/ui/separator";
import { HeroSection } from "@/app/components/header/hero/hero-section";

const Home = () => {
  return (
    <>
      <Header>
        <HeaderBar />
        <Separator className="max-w-5xl" />
        <HeroSection />
      </Header>
    </>
  );
};

export default Home;
