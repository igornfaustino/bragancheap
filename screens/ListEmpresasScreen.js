import * as React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import ImageTouchable from '../components/ImageTouchable';

const empresaURL = 'https://dummyimage.com/360x360/777/aaa&text=Empresa';

export default function ListEmpresasScreen({ navigation }) {
  navigation.setOptions({ headerShown: true });

  const empresas = React.useMemo(() => {
    const empresasParaMostrar = [];
    for (let i = 0; i < 10; i++) {
      empresasParaMostrar.push(
        <ImageTouchable
          source={{ uri: empresaURL }}
          imgStyle={styles.image}
          key={i}
          onPress={() => navigation.navigate('Empresa')}
        />
      );
    }
    return empresasParaMostrar;
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.list}>{empresas}</View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    margin: 4,
    borderRadius: 150,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
});
