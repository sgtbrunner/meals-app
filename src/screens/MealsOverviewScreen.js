import { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';

const MealsOverviewScreen = ({
  route: {
    params: { categoryId },
  },
  navigation,
}) => {
  const displayedMeals = MEALS.filter((mealItem) =>
    [...mealItem.categoryIds].includes(categoryId)
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  const renderMealItem = ({ item }) => {
    return <MealItem {...item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
