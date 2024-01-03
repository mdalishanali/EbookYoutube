import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

const ChapterList = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const title = route.params?.title;
  const year = route.params?.year;
  const [data, setData] = useState([]);

  useEffect(() => {
    handleSetData();
  }, []);

  const handleSetData = () => {
    let data = [];
    switch (title) {
      case 'Science':
        data = [
          {
            id: '1',
            title: 'UP Board Class 10 Science 2023 824 (EJ)',
            code: '824',
            year: '2023',
            file: require('../assets/Science/UPBoardClass10Science2023824(EJ).pdf'),
          },
          {
            id: '2',
            title: 'UP Board Class 10 Science 2023 824 (EK)',
            code: '824',
            year: '2023',
            file: require('../assets/Science/UPBoardClass10Science2023824(EK).pdf'),
          },
          {
            id: '3',
            title: 'UP Board Class 10 Science 2023 824 (EJ)',
            code: '824',
            year: '2023',
            file: require('../assets/Science/UPBoardClass10Science2023824(EJ).pdf'),
          },
          {
            id: '4',
            title: 'UP Board Class 10 Science 2023 824 (EK)',
            code: '824',
            year: '2023',
            file: require('../assets/Science/UPBoardClass10Science2023824(EK).pdf'),
          },
          // Add other science items here
          {
            id: '5',
            title: 'UP Board Class 10 Science 2023 824 (EJ)',
            code: '824',
            year: '2023',
            file: require('../assets/Science/UPBoardClass10Science2023824(EJ).pdf'),
          },
          {
            id: '6',
            title: 'UP Board Class 10 Science 2023 824 (EK)',
            code: '824',
            year: '2023',
            file: require('../assets/Science/UPBoardClass10Science2023824(EK).pdf'),
          },
        ];
        break;

      case 'Maths':
        data = [
          {
            id: '1',
            title: 'UP Board Math Paper 2023 822 (DV)',
            code: '822',
            year: '2023',
            file: require('../assets/Maths/UpBoardMathPaper2023822(DV).pdf'),
          },
          {
            id: '2',
            title: 'UP Board Math Paper 2023 822 (DW)',
            code: '822',
            year: '2023',
            file: require('../assets/Maths/UpBoardMathPaper2023822(DW).pdf'),
          },
          // Add other maths items here
        ];
        break;

      case 'Social Science':
        data = [
          {
            id: '1',
            title: 'UP Board Class 10 Social Science 2023 825 (EX)',
            code: '825',
            year: '2023',
            file: require('../assets/SocialScience/UPBoardClass10SocialScience2023825(EX).pdf'),
          },
          {
            id: '2',
            title: 'UP Board Class 10 Social Science 2023 825 (EY)',
            code: '825',
            year: '2023',
            file: require('../assets/SocialScience/UPBoardClass10SocialScience2023825(EY).pdf'),
          },
          // Add other social science items here
        ];
        break;

      case 'English':
        data = [
          {
            id: '1',
            title: 'UP Board English Paper 2023 817 (DH)',
            code: '817',
            year: '2023',
            file: require('../assets/English/UpBoardEnglishPaper2023817(DH).pdf'),
          },
          {
            id: '2',
            title: 'UP Board English Paper 2023 817 (DI)',
            code: '817',
            year: '2023',
            file: require('../assets/English/UpBoardEnglishPaper2023817(DI).pdf'),
          },
          // Add other English items here
        ];
        break;

      case 'Hindi':
        data = [
          {
            id: '1',
            title: 'UP Board Hindi Paper 2023 801 (DA)',
            code: '801',
            year: '2023',
            file: require('../assets/Hindi/UpBoardHindiPaper2023801(DA).pdf'),
          },
          {
            id: '2',
            title: 'UP Board Hindi Paper 2023 801 (DB)',
            code: '801',
            year: '2023',
            file: require('../assets/Hindi/UpBoardHindiPaper2023801(DB).pdf'),
          },
          // Add other Hindi items here
        ];
        break;

      case 'Arts':
        data = [
          {
            id: '1',
            title: 'UP Board Class 10 Science 2023 824 (EJ)',
            code: '824',
            year: '2023',
            file: require('../assets/Science/UPBoardClass10Science2023824(EJ).pdf'),
          },
          {
            id: '2',
            title: 'UP Board Class 10 Science 2023 824 (EK)',
            code: '824',
            year: '2023',
            file: require('../assets/Science/UPBoardClass10Science2023824(EK).pdf'),
          },
          // Add other Arts items here
        ];
        break;

      default:
        break;
    }

    setData(data);
  };

  const handlePress = item => {
    if (!item?.file) {
      return;
    }
    navigation.navigate('ShowPDF', {file: item.file});
  };
  const renderItem = ({item, index}) => (
    <TouchableOpacity onPress={() => handlePress(item)} style={styles.card}>
      <View style={styles.indexCircle}>
        <Text style={styles.indexText}>{index + 1}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          {item.title} Previous Years {item.year}
        </Text>
        <TouchableOpacity
          onPress={() => handlePress(item)}
          style={styles.button}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{backgroundColor: 'red'}}>
      {!data.length ? (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>
            No content available yet. Coming soon!
          </Text>
          <Text style={styles.placeholderText}>Please check others! </Text>
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.container}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#1F2B60',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    elevation: 2,
  },
  indexCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#18B3FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  indexText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#18B3FA',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#555555',
  },
});

export default ChapterList;
