import Head from "next/head";
import { FC, ReactNode } from "react";
import NavBar from "../ui/NavBar";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Alejandro Santiago" />
        <meta
          name="description"
          content={`información sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <NavBar />

      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};

export default Layout;
