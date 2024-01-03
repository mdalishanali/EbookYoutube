import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: '1',
    title: 'Maths',
    description: 'Previous year paper',
    image: require('../assets/maths.png'),
    slug: 'MATHS',
  },
  {
    id: '2',
    title: 'Science',
    description: 'Previous year paper',
    image: require('../assets/science.png'),
    slug: 'SCIENCE',
  },
  {
    id: '3',
    title: 'Social Science',
    description: 'Previous year paper',
    image: require('../assets/socialScience.png'),
    slug: 'SOCIAL-SCIENCE',
  },
  {
    id: '4',
    title: 'English',
    description: 'Previous year paper',
    image: require('../assets/english.png'),
    slug: 'ENGLISH',
  },
  {
    id: '5',
    title: 'Hindi',
    description: 'Previous year paper',
    image: require('../assets/hindi.png'),
    slug: 'HINDI',
  },
  {
    id: '6',
    title: 'Arts',
    description: 'Previous year paper',
    image: require('../assets/arts.png'),
    slug: 'ARTS',
  },
  {
    id: '7',
    title: 'Arts',
    description: 'Previous year paper',
    image: require('../assets/arts.png'),
    slug: 'ARTS',
  },
];

const Home = () => {
  const navigation = useNavigation();

  const handlePress = item => {
    console.log('item: ', item);
    if (item.title) {
      navigation.navigate('ChapterList', {title: item.title});
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              handlePress(item);
            }}>
            <View style={styles.card}>
              <View style={styles.leftContent}>
                <Text style={styles.title}>{item.title} 10</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
              <Image source={item.image} style={styles.image} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#1F2B60',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderBottomWidth: 10,
    borderBottomColor: '#18B3FA',
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'white',
    elevation: 2,
  },
  leftContent: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
    color: 'black',
  },
  description: {
    fontSize: 18,
    color: '#555555',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
