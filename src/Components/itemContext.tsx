import { createContext } from "react";

const ItemContext = createContext<{
  favoriteItems: number[];
  changeFavorite(id: number): void;
}>({
  favoriteItems: [],
  changeFavorite() {},
});

export default ItemContext;
