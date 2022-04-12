import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
import { FavouritesContext } from '../store/context/favourites-context';

const EmptyStateComponent = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no favourite meals yet.</Text>
    </View>
  );
};

const FavouritesScreen = () => {
  const favouriteMealsContext = useContext(FavouritesContext);

  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsContext.ids.includes(meal.id)
  );

  return favouriteMeals.length ? (
    <MealsList items={favouriteMeals} />
  ) : (
    <EmptyStateComponent />
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default FavouritesScreen;
