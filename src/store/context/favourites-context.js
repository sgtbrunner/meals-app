import { createContext, useState } from 'react';

export const FavouritesContext = createContext({
  ids: [],
  addFavouriteId: (id) => {},
  removeFavouriteId: (id) => {},
});

const FavouritesContextProvider = ({ children }) => {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  const addFavouriteId = (id) => {
    setFavouriteMealIds((currentFavouriteIds) => [...currentFavouriteIds, id]);
  };

  const removeFavouriteId = (id) => {
    setFavouriteMealIds((currentFavouriteIds) =>
      currentFavouriteIds.filter((mealId) => mealId !== id)
    );
  };
  return (
    <FavouritesContext.Provider
      value={{ ids: favouriteMealIds, addFavouriteId, removeFavouriteId }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
