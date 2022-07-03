import React, { useState } from "react"
import styles from "./Product.module.scss"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons"
import { useIsOnCompact } from "@/hooks/useIsOnCompact"

interface PropTypes {
  name: string
  price: number
  quantity: number
  quantityUnit: string
}

const Product = ({ name, price, quantity, quantityUnit }: PropTypes) => {
  const [amount, setAmount] = useState(0)

  const isCompact = useIsOnCompact()

  const handleIncrement = () => setAmount(prev => prev + 1)
  const handleDecrement = () => {
    if (amount === 0) return
    setAmount(prev => prev - 1)
  }

  return (
    <div className={styles.productCard}>
      <div className={styles.product}>
        <div className={styles.image}>
          {
            // Show 9+ if more than 9 units of the product were ordered
            !!amount && (
              <span className={styles.cartQuantity}>
                {amount > 9 ? "9+" : amount}
              </span>
            )
          }
          <Image
            src="/product.png"
            alt="Image d'un produit alimentaire"
            title="Image d'un produit alimentaire"
            placeholder="blur"
            blurDataURL="https://www.omie.fr/_next/static/images/omie_logo_bleu-c3ff610a93298b2cb4efdbe64469bec3.png"
            objectFit="cover"
            width={180}
            height={240}
            quality={60}
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>{name}</h3>
          <div className={styles.subInfo}>
            <p className={styles.price}>{price}€</p>
            <p className={styles.quantity}>
              ({quantity} {quantityUnit})
            </p>
          </div>
        </div>
      </div>
      <div className={styles.cta}>
        {
          // Don't show the - button if product hasn't been ordered
          !!amount && (
            <FontAwesomeIcon
              className={styles.minusIcon}
              icon={faMinusSquare}
              title="Soustraire du panier"
              onClick={handleDecrement}
            />
          )
        }
        <FontAwesomeIcon
          className={styles.plusIcon}
          icon={faPlusSquare}
          title="Ajouter au panier"
          onClick={handleIncrement}
        />
      </div>
    </div>
  )
}

export default Product
