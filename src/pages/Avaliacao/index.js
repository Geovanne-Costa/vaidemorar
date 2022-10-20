import React, {useState} from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, Image,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import {styles} from '../../../styles.js';

import {unidades} from '../../../src/services/unidades.js'


 
export default function Avaliacao() {
  const navigation = useNavigation();
  const [nota, setNota] = useState('');
  const [comentario, setComentario] = useState('');

  function avaliarUnidade(){
    navigation.go
  }


 return (
    
  <View>
    <Text>OI</Text>
  </View>

  );
}
