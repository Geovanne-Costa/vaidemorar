import React, {useState} from 'react';
import { View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import RNModal from 'react-native-modal';

import {styles} from '../../../styles.js';

import {users} from '../../../src/services/users.js'


 
export default function Conta() {
  const navigation = useNavigation();
  const [passwordSecured, setPasswordSecured] = useState(true);
  const [passwordSecured2, setPasswordSecured2] = useState(true);
  const [passwordSecured3, setPasswordSecured3] = useState(true);
  const [rnmodalVisible, setRNModalVisible] = useState(false);
  const [antiga, setAntiga] = useState('');
  const [nova, setNova] = useState('');
  const [nova2, setNova2] = useState('');
  const [erro, setErro] = useState('');

  function modalAlteracao(){
    if(antiga == ''){
      setErro("Falta colocar a Senha Antiga")
    }else if(nova == ''){
      setErro("Falta colocar a Nova Senha")
    }else if(nova2 == ''){
      setErro("Falta confirmar a Nova Senha")
    }else if(antiga != users[0].senha){
      setErro("Senha antiga não confere!")
    }else if(nova != nova2){
      setErro("Nova Senha e Confirmação não conferem!")
    }else{
      setRNModalVisible(true);
    }
  }

  function mudarSenha(){
      navigation.navigate('Login')
  }


 return (

   <View style={{
      alignItems: 'center', flex: 1, padding: 10
      }}>
        <Text style={{color: '#000', fontSize: 23, marginTop: 20, marginBottom: 20}}>
          {users[0].nome}
        </Text>

        <View style={styles.inputs}>
          <Text style={{fontWeight: '500'}}>Senha Atual:</Text>
          <View style={styles.inputView}>
            <TextInput 
            onChangeText={(valor) => setAntiga(valor)}
            style={{flex: 1, fontSize: 18}}
            secureTextEntry={passwordSecured}
            textContentType='password' 
            />
            <TouchableOpacity 
            style={{padding: 4}}
            onPress={() => {
              setPasswordSecured(!passwordSecured);
            }}>
              <Ionicons name='eye' size={20} />
            </TouchableOpacity>
          </View>
          

          <Text style={{fontWeight: '500'}}>Nova Senha:</Text>
          <View style={styles.inputView}>
            <TextInput 
            onChangeText={(valor) => setNova(valor)}
            style={{flex: 1, fontSize: 18}}
            secureTextEntry={passwordSecured2}
            textContentType='password' />
            <TouchableOpacity 
            style={{padding: 4}}
            onPress={() => {
              setPasswordSecured2(!passwordSecured2);
            }}>
              <Ionicons name='eye' size={20} />
            </TouchableOpacity>
          </View>

          <Text style={{fontWeight: '500'}}>Confirmar Nova Senha:</Text>
          <View style={styles.inputView}>
            <TextInput 
            onChangeText={(valor) => setNova2(valor)}
            style={{flex: 1, fontSize: 18}}
            secureTextEntry={passwordSecured3}
            textContentType='password' />
            <TouchableOpacity 
            style={{padding: 4}}
            onPress={() => {
              setPasswordSecured3(!passwordSecured3);
            }}>
              <Ionicons name='eye' size={20} />
            </TouchableOpacity>
          </View>

          <Button 
            title="Confirmar"
            onPress={modalAlteracao}
          />
          <Text
          style={{marginTop: 20, fontSize: 16, textAlign: 'center', color: 'red'}}>{erro}</Text>
        </View>

        

        <RNModal
        isVisible={rnmodalVisible}
        animationIn='zoomIn'
        animationOut='zoomOut'>
          <View style={styles.rnmodalView}>
            <Text style={{textAlign: 'center', fontWeight: 500, fontSize: 16, marginBottom: 5}}>Confirmação</Text>
            <Text style={{textAlign: 'center', marginBottom: 15}}>Deseja mesmo alterar sua senha?</Text>
            <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
              <TouchableOpacity
              style={styles.rnmodalButton}
              onPress={() => setRNModalVisible(false)}
              >
              <Text style={{color: '#fff', fontSize: 16}}>Não</Text>
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.rnmodalButton}
              onPress={mudarSenha}
              >
              <Text style={{color: '#fff', fontSize: 16}}>Sim</Text>
              </TouchableOpacity>
            </View>
          </View>
        </RNModal>


      </View>
  );
}
