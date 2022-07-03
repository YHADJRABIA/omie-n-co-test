import React, { Dispatch, FC, SetStateAction, useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMagnifyingGlass,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons"
import styles from "./Searchbar.module.scss"
import { useEventListener } from "@/hooks/useEventListener"

interface PropTypes<ItemType> {
  items: ItemType[]
  setItems: Dispatch<SetStateAction<ItemType[]>>
  searchLogic: (items: ItemType[], name: string) => ItemType[]
}

// Using generic type and passing search logic to make search state reusable
export default function Searchbar<ItemType>({
  items,
  setItems,
  searchLogic,
}: PropTypes<ItemType>) {
  const [searchInput, setSearchInput] = useState("")

  // Updates search state with user's input
  const handleSearch = (e: SetStateAction<string>) => setSearchInput(e)

  // Resets search state to empty string
  const resetSearch = () => setSearchInput("")

  // Clears search state if user presses escape key
  const keyboardHandler = (e: KeyboardEvent): void => {
    if (e.key === "Escape") setSearchInput("")
  }

  // For accessibility — calls keyboardHandler whenever user presses key
  useEventListener("keydown", keyboardHandler)

  // Voids search value upon rendering to prevent bug if there are different pages
  useEffect(() => {
    setItems(searchLogic(items, searchInput))
  }, [searchInput])

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBox}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={styles.searchIcon}
        />
        <input
          data-testid="search-value"
          autoComplete="off"
          value={searchInput}
          autoFocus
          onChange={e => handleSearch(e.target.value)}
          type="text"
          placeholder="Chercher un produit..."
          name="searchbox"
        />

        {!!searchInput && (
          // Display reset button if search input is not empty
          <FontAwesomeIcon
            icon={faCircleXmark}
            className={styles.resetIcon}
            onClick={resetSearch}
          />
        )}
      </div>
    </div>
  )
}
