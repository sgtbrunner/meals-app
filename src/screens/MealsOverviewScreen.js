import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

const MealsOverviewScreen = () => {
  const { categoryId } = useRoute().params;
  const displayedMeals = MEALS.filter((mealItem) =>
    [...mealItem.categoryIds].includes(categoryId)
  );

  const renderMealItem = (itemData) => {
    return <MealItem title={itemData.item.title} />;
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
