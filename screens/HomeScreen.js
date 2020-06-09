import React, { useState, useMemo, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import ImageTouchable from '../components/ImageTouchable';

const produtoURL = 'https://picsum.photos/360';
const servicoURL = 'https://picsum.photos/360';

export default function HomeScreen({ navigation }) {
  navigation.setOptions({ headerShown: false });

  const [isShowingMoreProducts, setIsShowingMoreProducts] = useState(false);
  const [isShowingMoreServices, setIsShowingMoreServices] = useState(false);

  const produtos = useMemo(() => {
    const produtosMostrados = [];
    if (!isShowingMoreProducts) {
      for (let i = 0; i < 3; i++) {
        produtosMostrados.push(
          <ImageTouchable
            source={{ uri: `https://picsum.photos/id/${i + 80}/360` }}
            key={i}
            imgStyle={styles.image}
            onPress={() => navigation.navigate('Empresas')}
          />
        );
      }
    } else {
      for (let i = 0; i < 7; i++) {
        produtosMostrados.push(
          <ImageTouchable
            source={{ uri: `https://picsum.photos/id/${i + 80}/360` }}
            key={i}
            imgStyle={styles.image}
            onPress={() => navigation.navigate('Empresas')}
          />
        );
      }
    }
    return produtosMostrados;
  }, [isShowingMoreProducts]);

  const servicos = useMemo(() => {
    const servicosMostrados = [];
    if (!isShowingMoreServices) {
      for (let i = 0; i < 3; i++) {
        servicosMostrados.push(
          <ImageTouchable
            source={{ uri: `https://picsum.photos/id/${i + 50}/360` }}
            key={i}
            imgStyle={styles.image}
            onPress={() => navigation.navigate('Empresas')}
          />
        );
      }
    } else {
      for (let i = 0; i < 10; i++) {
        servicosMostrados.push(
          <ImageTouchable
            source={{ uri: `https://picsum.photos/id/${i + 50}/360` }}
            key={i}
            imgStyle={styles.image}
            onPress={() => navigation.navigate('Empresas')}
          />
        );
      }
    }
    return servicosMostrados;
  }, [isShowingMoreServices]);

  const produtosMessage = useMemo(
    () => (isShowingMoreProducts ? 'Mostrar menos' : 'Mostrar Mais'),
    [isShowingMoreProducts]
  );

  const servicesMessage = useMemo(
    () => (isShowingMoreServices ? 'Mostrar menos' : 'Mostrar Mais'),
    [isShowingMoreServices]
  );

  return (
    <View style={styles.container}>
      <Searchbar placeholder="Pesquisar" />
      <ScrollView style={styles.content}>
        <View>
          <Text>Produto</Text>
          <View style={styles.flex}>{produtos}</View>
          <TouchableOpacity
            onPress={() => setIsShowingMoreProducts((prev) => !prev)}
          >
            <Text style={styles.mostrarMais}>{produtosMessage}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.marginTop}>
          <Text>Serviços</Text>
          <View style={styles.flex}>{servicos}</View>
          <TouchableOpacity
            onPress={() => setIsShowingMoreServices((prev) => !prev)}
          >
            <Text style={styles.mostrarMais}>{servicesMessage}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    padding: 16,
  },
  content: {
    marginTop: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 4,
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  marginTop: {
    marginTop: 16,
  },
  mostrarMais: {
    textAlign: 'right',
  },
});
