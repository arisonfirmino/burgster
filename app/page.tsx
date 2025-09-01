import { Header } from "@/app/components/ui/header";
import { HeaderBar } from "@/app/components/header/header-bar";
import { Separator } from "@/app/components/ui/separator";

const Home = () => {
  return (
    <>
      <Header>
        <HeaderBar />
        <Separator className="max-w-5xl" />
      </Header>
    </>
  );
};

export default Home;
