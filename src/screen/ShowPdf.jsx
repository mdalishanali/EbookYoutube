
import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, BackHandler, ActivityIndicator} from 'react-native';
import Pdf from 'react-native-pdf';

const ShowPDF = ({navigation}) => {
  const route = useRoute();
  const file = route.params?.file;
  const [isLoading, setIsLoading] = useState(true);
  if (!file) {
    return null;
  }

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator size={'large'} /> : null}
      <Pdf
        source={file}
        trustAllCerts={false}
        onLoadComplete={numberOfPages => {
          setIsLoading(false);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
          setIsLoading(false);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#1F2B60', // Same background color as PaperList component
  },
  pdf: {
    flex: 1,
  },
});

export default ShowPDF;
