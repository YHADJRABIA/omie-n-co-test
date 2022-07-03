import React, { useState } from "react"
import Product from "./Product"
import data from "@/data/data.json"
import styles from "./ProductList.module.scss"
import Searchbar from "../Searchbar/Searchbar"
import { normaliseString } from "@/utilities/string"
import { ProductType } from "@/types/Product"
import { sortByProperty } from "@/utilities/array"
import NotFoundImage from "@/svg/NotFoundImage"

const ProductList = () => {
  const { allProducts } = data

  const [filteredProducts, setFilteredProducts] = useState(allProducts)

  // Filtering logic to pass to searchbar — Case & accent insensitive match
  const filterByName = (products: ProductType[], name: string): ProductType[] =>
    products.filter(product => {
      return normaliseString(product.name).includes(
        normaliseString(name).trim()
      )
    })

  return (
    <>
      <Searchbar
        items={allProducts}
        setItems={setFilteredProducts}
        searchLogic={filterByName as () => ProductType[]}
      />
      <div className={styles.productList}>
        {!filteredProducts.length ? (
          <div className={styles.notFoundContainer}>
            <h2 className={styles.notFound}>
              Aucun produit ne correspond à votre recherche.
            </h2>
            <NotFoundImage />
          </div>
        ) : (
          filteredProducts
            .sort(sortByProperty("name"))
            .map((product, id) => (
              <Product
                key={id}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                quantityUnit={product.quantity_unit}
              />
            ))
        )}
      </div>
    </>
  )
}

export default ProductList
