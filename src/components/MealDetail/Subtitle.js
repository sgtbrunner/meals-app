import { StyleSheet, Text, View } from 'react-native';

const Subtitle = ({ text }) => (
  <View style={styles.subtitleContainer}>
    <Text style={styles.subtitle}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    padding: 6,
    margin: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  },
});

export default Subtitle;
