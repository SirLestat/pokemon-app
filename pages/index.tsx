import { Layout } from "@/components/layouts";
import { Button } from "@nextui-org/react";
import { NextPage } from "next";


const HomePage: NextPage = () => {
  return (
    <Layout title="Listado de pokemons">

      <Button color="secondary" variant="shadow">
        Click Me
      </Button>
    </Layout>
  );
};

export default HomePage;
