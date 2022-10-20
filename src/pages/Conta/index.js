import React from 'react';
import { View, Text, Button, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from '../../../styles.js';
import { users } from '../../../src/services/users.js';

export default function Conta({ route }) {
  const navigation = useNavigation();

  function irAlterarSenha() {
    navigation.navigate('AlterarSenha');
  }

  function sairApp() {
    navigation.navigate('Login');
  }

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Image
        source={require('../../img/foto-curriculo.png')}
        style={{ width: 150, height: 150, borderRadius: '50%' }}
      />
      <Text
        style={{
          color: '#000',
          fontWeight: 600,
          fontSize: 23,
          marginTop: 50,
          marginBottom: 20,
        }}>
        {users[0].nome}
      </Text>
      <View style={{ marginBottom: 20, width: '80%' }}>
        <Text style={{ fontWeight: 500, fontSize: 17, marginBottom: 5 }}>
          E-mail:
        </Text>
        <Text style={{ fontWeight: 400, fontSize: 16, marginBottom: 10 }}>
          {users[0].email}
        </Text>

        <Text style={{ fontWeight: 500, fontSize: 17, marginBottom: 5 }}>
          Telefone:
        </Text>
        <Text style={{ fontWeight: 400, fontSize: 16, marginBottom: 10 }}>
          {users[0].telefone}
        </Text>

        <Text style={{ fontWeight: 500, fontSize: 17, marginBottom: 5 }}>
          Data de Nascimento:
        </Text>
        <Text style={{ fontWeight: 400, fontSize: 16, marginBottom: 10 }}>
          {users[0].dtNascimento}
        </Text>
      </View>
      <Pressable style={styles.button} onPress={irAlterarSenha}>
        <Text
          style={{
            fontWeight: '600',
            color: '#fff',
            textAlign: 'center'
          }}>
          Alterar Senha
        </Text>
      </Pressable>
      <Pressable style={styles.button} onPress={sairApp}>
        <Text
          style={{
            fontWeight: '600',
            color: '#fff',
            textAlign: 'center'
          }}>
          Sair da Conta
        </Text>
      </Pressable>
    </View>
  );
}
