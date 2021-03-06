import { useContext, useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import IconButton from '../components/IconButton';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
import { FavouritesContext } from '../store/context/favourites-context';

const MealDetailScreen = ({
  route: {
    params: { mealId },
  },
  navigation,
}) => {
  const favouriteMealsContext = useContext(FavouritesContext);

  const isFavouriteMeal = favouriteMealsContext.ids.includes(mealId);

  const {
    affordability,
    complexity,
    duration,
    imageUrl,
    ingredients,
    steps,
    title,
  } = MEALS.find((meal) => meal.id === mealId);

  const changeFavouriteStateHandler = () => {
    const changeStateAction = isFavouriteMeal
      ? favouriteMealsContext.removeFavouriteId
      : favouriteMealsContext.addFavouriteId;

    changeStateAction(mealId);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={isFavouriteMeal ? 'star' : 'star-outline'}
          onTap={changeFavouriteStateHandler}
          color='white'
        />
      ),
    });
  }, [navigation, changeFavouriteStateHandler]);
  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.title}>{title}</Text>
      <MealDetails
        affordability={affordability}
        complexity={complexity}
        duration={duration}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle text='Ingredients' />
          <List data={ingredients} />
          <Subtitle text='Steps' />
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});

export default MealDetailScreen;
