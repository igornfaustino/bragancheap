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

const produtoURL = 'https://dummyimage.com/360x360/777/aaa&text=produto';
const servicoURL = 'https://dummyimage.com/360x360/777/aaa&text=serviço';

export default function HomeScreen({ navigation }) {
  navigation.setOptions({ headerShown: false });

  const [isShowingMoreProducts, setIsShowingMoreProducts] = useState(false);
  const [isShowingMoreServices, setIsShowingMoreServices] = useState(false);

  const produtos = useMemo(() => {
    const produtosMostrados = [];
    if (!isShowingMoreProducts) {
      for (let i = 0; i < 3; i++) {
        produtosMostrados.push(
          <Image style={styles.image} source={{ uri: produtoURL }} key={i} />
        );
      }
    } else {
      for (let i = 0; i < 7; i++) {
        produtosMostrados.push(
          <Image style={styles.image} source={{ uri: produtoURL }} key={i} />
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
          <Image style={styles.image} source={{ uri: servicoURL }} key={i} />
        );
      }
    } else {
      for (let i = 0; i < 10; i++) {
        servicosMostrados.push(
          <Image style={styles.image} source={{ uri: servicoURL }} key={i} />
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
