import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import ListaUnidades from './src/pages/ListaUnidades';
import MapaUnidades from './src/pages/MapaUnidades';
import Conta from './src/pages/Conta/index.js';
import AlterarSenha from './src/pages/AlterarSenha';
import Detail from './src/pages/Detail';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import Avaliacao from './src/pages/Avaliacao';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const icons = {
  ListaUnidades: {
    name: 'list-outline',
  },
  MapaUnidades: {
    name: 'map-outline',
  },
  Conta: {
    name: 'person-outline',
  },
};

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#121212',
        },
        activeTintColor: '#39a331',
      }}>
      <Tab.Screen
        name="ListaUnidades"
        component={ListaUnidades}
        options={{ title: '', headerShown: false }}
      />
      <Tab.Screen
        name="MapaUnidades"
        component={MapaUnidades}
        options={{ title: '', headerShown: false }}
      />
      <Tab.Screen
        name="Conta"
        component={Conta}
        options={{ title: '', headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AlterarSenha"
          component={AlterarSenha}
          options={{ title: 'Alteração de Senha' }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ title: '' }}
        />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen
          name="Avaliacao"
          component={Avaliacao}
          options={{ title: 'Avaliação de Unidade' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
