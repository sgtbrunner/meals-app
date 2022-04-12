import { useLayoutEffect } from 'react';

import MealsList from '../components/MealsList/MealsList';
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

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
