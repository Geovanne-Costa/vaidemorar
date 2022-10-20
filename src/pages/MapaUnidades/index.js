import React, { useState } from 'react';
import { Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';


// import * as Location from 'expo-location';

import {unidades} from '../../../src/services/unidades.js';
import {categories} from '../../../src/services/categories.js';

import MapView, {Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';

import {styles} from '../../../styles.js'

export default function App() {
  // const [location, setLocation] = useState(null);
  // const [errorMsg, setErrorMsg] = useState(null);

  const [markers, setMarkers] = useState(unidades);
  const [filter, setFilter] = useState('');
  const navigation = useNavigation();
  const filteredData = markers.filter(() => markers[0] === filter)

  // useEffect(() => {
  //   (async () => {
      
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //   })();
  // }, []);

  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }

  return (
    <SafeAreaView>
      <MapView style={styles.map}
        initialRegion={{
          latitude: markers[0].latitude,
          longitude: markers[0].longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        > 

          {(filter ? filteredData : markers).map((item) => {
            return(
              <Marker 
              key={item.id}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              onPress={() => {
                navigation.navigate('Detail', item);  
              }}
              />
            );
          })}

          
        </MapView>

        <View style={styles.categoryContainer}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false} 
          ItemSeparatorComponent={() => <View style={{width: 10}} />} 
          contentContainerStyle={{alignItems: 'center',}}
          renderItem={({item}) => (
            <TouchableOpacity 
            onPress={() => {
              setFilter(filter === item.key ? "" : item.key)
            }}
            style={[
              styles.categoryItem,
              filter === item.key ? styles.selectedCategory : null
            ]}
              key={item.key}> 
              <Text  style={styles.categoryText}>{item.label}</Text>
            </TouchableOpacity>
          )}  />
      </View>
      </SafeAreaView>
  );
}