import Head from "next/head"
import { FC, ReactNode } from "react"
import { Navbar } from "./ui";


interface LayoutProps {
    children: ReactNode;
    title?: string;
}
export const Layout: FC<LayoutProps> = ({children, title}) => {
  return (
    <>
    
        <Head>
            <title>{title || "PokemonApp"}</title>
            <meta name="author" content="Alejandro Santiago"/>
            <meta name="description" content={`Información sobre el pokémon ${title}`}/>
            <meta name="keywords" content={`${title} pokemon, pokedex`}/>
        </Head>

    <Navbar/>

    <main style={{padding:"0px 20px"}}>
        {children}
    </main>
    </>
  )
}

