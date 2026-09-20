import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  function addFavorite(id) {
    setFavoriteIds((current) => [...current, id]);
  }

  function removeFavorite(id) {
    setFavoriteIds((current) => current.filter((favId) => favId !== id));
  }

  function isFavorite(id) {
    if (!Array.isArray(favoriteIds)) return false;
    return favoriteIds.includes(id);
  }

  function toggleFavorite(id) {
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  }

  return (
    <FavoritesContext.Provider
      value={{
        favoriteIds,
        addFavorite,
        removeFavorite,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) {
    throw new Error("useFavorites must be used inside a FavoritesProvider");
  }
  return ctx;
}
