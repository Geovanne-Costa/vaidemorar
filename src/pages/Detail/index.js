import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from '../../../styles.js';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Detail({ route }) {
  const navigation = useNavigation();

  navigation.setOptions({
    title: route.params?.nome,
  });

  return (
      <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
        <View style={styles.unidade}>
          <Image
            source={{ uri: route.params?.img }}
            resizeMode="contain"
            style={{ width: 200, height: 150, marginVertical: 10 }}
          />
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.titleunidade}>{route.params?.nome} </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Avaliacao');
              }}>
              <Ionicons name="star-outline" color="black" size={20} />
            </TouchableOpacity>
          </View>
          <Text style={styles.descunidade}>{route.params?.address}</Text>
          <Text style={styles.tempounidade}>
            Tempo de Espera Geral: {route.params?.tempoEspera}mins
          </Text>
          <MaterialIcons
            style={{ marginBottom: 15 }}
            name="stop-circle"
            color={route.params?.status}
            size={35}
          />
          <Text
            style={{
              textAlign: 'justify',
              marginBottom: 20,
            }}>
            {route.params?.desc}
          </Text>
          <Text style={{ textAlign: 'left', marginBottom: 10 }}>
            Para mais informações sobre Convênios, Exames, entre outros, entre
            em contato pelo Telefone ou visite o Site:
          </Text>
          <Text style={{ textAlign: 'left', marginBottom: 10 }}>
            Telefone: 
          </Text>
          <Text style={{ textAlign: 'left', marginBottom: 10 }}>
            {route.params?.telefone}
          </Text>
          <Text style={{ textAlign: 'left', marginBottom: 10 }}>
            Site:
          </Text>
          <Text  style={{ textAlign: 'left', marginBottom: 10, textDecoration: 'underline' }} onPress={() => {
          Linking.openURL(`${route.params?.site}`)}
          }>
            {route.params?.site}
          </Text>

          <View
            style={{
              width: '100%',
              height: 10,
              borderBottomWidth: 1,
              borderStyle: 'solid',
              borderColor: '#000',
              marginBottom: 20,
            }}></View>

          <Text style={{ fontSize: 17, marginBottom: 20, fontWeight: '600' }}>
            Avaliações
          </Text>

          {route.params?.avaliacoes.map((avaliacao) => {
            if (avaliacao.nota == 1) {
              return (
                <View style={styles.avaliacao}>
                  <View style={{ flexDirection: 'row' }}>
                    <Ionicons name="star" color="black" size={20} />
                  </View>
                  <Text style={{marginTop: 5}}>{avaliacao.comentario}</Text>
                </View>
              );
            } else if (avaliacao.nota == 2) {
              return (
                <View style={styles.avaliacao}>
                  <View style={{ flexDirection: 'row' }}>
                    <Ionicons name="star" color="black" size={20} />
                    <Ionicons name="star" color="black" size={20} />
                  </View>
                  <Text style={{marginTop: 5}}>{avaliacao.comentario}</Text>
                </View>
              );
            } else if (avaliacao.nota == 3) {
              return (
                <View style={styles.avaliacao}>
                  <View style={{ flexDirection: 'row' }}>
                    <Ionicons name="star" color="black" size={20} />
                    <Ionicons name="star" color="black" size={20} />
                    <Ionicons name="star" color="black" size={20} />
                  </View>
                  <Text style={{marginTop: 5}}>{avaliacao.comentario}</Text>
                </View>
              );
            } else if (avaliacao.nota == 4) {
              return (
                <View style={styles.avaliacao}>
                  <View style={{ flexDirection: 'row' }}>
                    <Ionicons name="star" color="black" size={20} />
                    <Ionicons name="star" color="black" size={20} />
                    <Ionicons name="star" color="black" size={20} />
                    <Ionicons name="star" color="black" size={20} />
                  </View>
                  <Text style={{marginTop: 5}}>{avaliacao.comentario}</Text>
                </View>
              );
            } else if (avaliacao.nota == 5) {
              return (
                <View style={styles.avaliacao}>
                  <View style={{ flexDirection: 'row' }}>
                    <Ionicons name="star" color="black" size={20} />
                    <Ionicons name="star" color="black" size={20} />
                    <Ionicons name="star" color="black" size={20} />
                    <Ionicons name="star" color="black" size={20} />
                    <Ionicons name="star" color="black" size={20} />
                  </View>
                  <Text style={{marginTop: 5}}>{avaliacao.comentario}</Text>
                </View>
              );
            }
          })}
        </View>
    </View>
      </ScrollView>
  );
}
