import React, {useState} from 'react';
import { View, Text, Button, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';

import {styles} from '../../../styles.js';
import {unidades} from '../../../src/services/unidades';
 
 
export default function ListaUnidades() {
  const [searchWord, setSearchWord] = useState('');
  const navigation = useNavigation();

  const [tipoUnidade, setTipoUnidade] = useState('');

 return (

   <View style={styles.container2}>

      <View style={styles.filters}>
        <View style={styles.searchdiv}>
          <Ionicons name='search' color="#000" size={20} />
          <TextInput style={styles.search} placeholder='Digite' onChangeText={setSearchWord} />
        </View>
        <View style={styles.filterdiv}>
          <Picker
            style={styles.picker}
            selectedValue={tipoUnidade}
            onValueChange={(itemValue, itemIndex) => setTipoUnidade(itemValue)}
          >
            <Picker.Item key={0} value={0} label="Filtrar por: " />
            <Picker.Item key={1} value={"Hospital"} label="Hospital" />
            <Picker.Item key={2} value={"UPA"} label="UPA" />
          </Picker>
        </View>
      </View>

      {console.log(tipoUnidade)}


      <ScrollView showsVerticalScrollIndicator={false}>
        
          {unidades.filter((val) => {
            if(searchWord === "" && tipoUnidade == 0){
              return val
            }else if(searchWord === "" && val.category.includes(tipoUnidade.toLocaleLowerCase())){
              return val
              }else if(tipoUnidade == 0 && val.nome.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())){
                return val
              }else if(val.category.includes(tipoUnidade.toLocaleLowerCase()) && val.nome.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())){
                return val
              }
            }).map((item) => {
            return(
            <TouchableOpacity key={item.id} onPress={() => {
                navigation.navigate('Detail', item);  
              }}>
              <View style={styles.listItem}>
              <View style={styles.infos}>
                <Text style={styles.titleunidade}>{item.nome}</Text>
                <Text style={styles.descunidade}>{item.address}</Text>
                <Text style={styles.tempounidade}>Tempo de Espera Geral: {item.tempoEspera}mins</Text>
              </View>
              <View style={styles.statustempo}>
                <MaterialIcons name="stop-circle" color={item.status} size={35} />
              </View>
            </View>
              
            </TouchableOpacity>
            );
          })}
        

        

      </ScrollView>
   </View>
  );
}
