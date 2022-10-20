import React, {useState} from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, Image,} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import DatePicker from 'react-native-datepicker';

import {styles} from '../../../styles.js';

import {users} from '../../../src/services/users.js'


 
export default function Conta() {
  const navigation = useNavigation();
  const [passwordSecured, setPasswordSecured] = useState(true);
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');
  const [cpf, setCPF] = useState('');
  const [telefone, setTelefone] = useState('');
  const [erro, setErro] = useState('');
  const [date, setDate] = useState('');


 return (


   <View style={{
      alignItems: 'center', flex: 1, padding: 10
      }}>
        <Image
        source={require('../../img/logo2.png')}
        style={{ width: 200, height: 120,}}
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

          <Text style={{fontWeight: '500'}}>Data de Nascimento:</Text>
            <View style={styles.inputView}>
              <DatePicker 
              style={{width: '100%'}}
              date={date}
              placeholder='Selecione a Data'
              format='DD-MM-YYYY'
              confirmBtnText='Confirmar'
              cancelBtnText='Cancelar'
              onDateChange={(d) => setDate(d)} />
            </View>

          <Text style={{fontWeight: '500'}}>Telefone:</Text>
          <View style={styles.inputView}>
            <TextInputMask
            style={{flex: 1, fontSize: 18}}
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) '
            }}
            value={telefone}
            onChangeText={(valor) => setTelefone(valor)}  />
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

          <Text style={{fontWeight: '500'}}>Confirmação de Senha:</Text>
          <View style={styles.inputView}>
            <TextInput 
            onChangeText={(valor) => setConfSenha(valor)}
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
            style={{marginTop: 10}}
            title="Entrar"
            
          />
          
        </View>

      </View>
  );
}
