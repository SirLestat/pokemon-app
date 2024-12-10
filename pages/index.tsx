import { GetStaticProps, NextPage } from "next";
import Layout from "../components/layouts";

const HomePage: NextPage = (props) => {
  return (
    <Layout title="Listado de Pokémon">
      <ul>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log("hola mundo");

  return {
    props: {},
  };
};

export default HomePage;
