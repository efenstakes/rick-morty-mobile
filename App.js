import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from 'react-native';
import { useQuery, useLazyQuery } from "@apollo/client"

import queries from './src/queries/characters.queries'

import CharacterCardComponent from './src/components/character_card/character_card.component'
import HSpacerComponent from './src/components/h_spacer/h_spacer.component'


const HEIGHT = Dimensions.get('window').height;
const App = () => {
  const { loading, error, data } = useQuery(queries.GET_CHARACTERS)

  // if( data ) {
  //   console.log('data ', data)
  // }
  const characters = data && data.characters.results ? data.characters.results : null 
  if( characters ) {
    console.log('characters ', characters)
  }
  return (
    <SafeAreaView>
      <StatusBar barStyle='light-content' />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.body}>
        <Text style={styles.title}>
          Hi, Jane
        </Text>
        <Text style={styles.subTitle}>
          We have 6 new episodes you have not watched
        </Text>

        {/* list */}
        {
          error &&
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>
                An Error Occured
              </Text>
            </View>
        }
        {
          loading &&
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="brown" />
              <Text style={styles.loadingText}>
                Loading Characters
              </Text>
            </View>
        }
        {
          characters &&
            <FlatList
              data={characters}
              renderItem={
                ({item }) => {
                  return (
                    <CharacterCardComponent 
                      key={item.name} character={item} 
                    />
                  )
                }
              }
              keyExtractor={(item, _index) => item.id}
              numColumns={2}
              contentContainerStyle={{
                paddingBottom: 40,
              }}
            />
        }

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 32,
  },
  subTitle: {
    marginTop: 6,
    marginBottom: 40,
    fontSize: 18,
    fontWeight: '500',
  },
  loadingContainer: {
    height: HEIGHT-240,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    fontSize: 20,
    fontWeight: '600',
  },
  errorContainer: {
    height: HEIGHT-240,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    fontSize: 20,
    fontWeight: '600',
  }
});

export default App;
