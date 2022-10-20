import React, {useState} from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, Image} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import {styles} from '../../../styles.js';

import {users} from '../../../src/services/users.js'


 
export default function Conta() {
  const navigation = useNavigation();
  const [passwordSecured, setPasswordSecured] = useState(true);
  const [senha, setSenha] = useState('');
  const [cpf, setCPF] = useState('');
  const [erro, setErro] = useState('');

  function entrarApp(){

      {(users).map((user) => {
        if(cpf == ""){
          setErro('Digite o CPF')
        }else if(cpf.length < 11){
          setErro('Um CPF precisa ter 11 números')
        }else if(senha == ""){
          setErro('Digite a Senha')
        }else if(cpf != user.cpf){
          setErro('CPF não cadastrado')
        }else if(senha != user.senha){
          setErro('Senha Inválida')
        }else{
          navigation.navigate('Tabs', user);
        }
    })}
  }


 return (


   <View style={{
      alignItems: 'center', flex: 1, padding: 10
      }}>
        <Image
        source={require('../../img/logo.png')}
        style={{ width: 200, height: 200}}
      />

        <View style={styles.inputs}>
          <Text style={{fontWeight: '500'}}>CPF:</Text>
          <View style={styles.inputView}>
            <TextInputMask
            style={{flex: 1, fontSize: 18}}
            type={'cpf'}
            value={cpf}
            onChangeText={(valor) => setCPF(valor)}  />
          </View>
          

          <Text style={{fontWeight: '500'}}>Senha:</Text>
          <View style={styles.inputView}>
            <TextInput 
            onChangeText={(valor) => setSenha(valor)}
            style={{flex: 1, fontSize: 18}}
            secureTextEntry={passwordSecured}
            textContentType='password' />
            <TouchableOpacity 
            style={{padding: 4}}
            onPress={() => {
              setPasswordSecured(!passwordSecured);
            }}>
              <Ionicons name='eye' size={20} />
            </TouchableOpacity>
          </View>


          <Button 
            title="Entrar"
            onPress={entrarApp}
          />
          <Text style={{marginTop: 20, fontSize: 16, textAlign: 'center', color: 'red'}}>{erro}</Text>
          <TouchableOpacity 
            style={{padding: 4}}
            onPress={() => {
              navigation.navigate('RecuperacaoSenha')
            }}>
              <Text style={{marginTop: 20, marginBottom: 20, fontSize: 16, textAlign: 'center', textDecorationLine: 'underline'}}>Esqueceu a Senha?</Text>
            </TouchableOpacity>


            <Text style={{ fontSize: 16, textAlign: 'center'}}>Não tem cadastro? <TouchableOpacity 
            style={{marginTop: -2}}
            onPress={() => {
              navigation.navigate('Cadastro')
            }}>
              <Text style={{ fontSize: 16, textAlign: 'center', textDecorationLine: 'underline'}}>Cadastre-se</Text>
            </TouchableOpacity></Text>
          
        </View>

      </View>
  );
}
