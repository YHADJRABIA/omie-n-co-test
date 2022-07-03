import ProductList from "@/components/Products/ProductList"
import SEO from "@/components/SEO/SEO"
import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <>
      <SEO
        title="Épreuve technique Omie & cie | Page principale"
        description="Site réalisé dans le cadre d'une évaluation technique."
        keywords="Yacine Hadj Rabia, Omie & Cie, NextJS, ReactJS, NodeJS, TypeScript, JavaScript, Sass."
      >
        <link rel="icon" href="/favicon.ico" />
      </SEO>

      <main>
        <ProductList />
      </main>
    </>
  )
}

export default Home
