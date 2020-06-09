import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Button } from 'react-native-paper';

const empresaURL = 'https://picsum.photos/360';

export default function EmpresaScreen({ navigation, route }) {
  navigation.setOptions({ headerShown: true });

  return (
    <View style={styles.container}>
      <Image source={{ uri: route.params.url }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.infoField}>Nome: </Text>
        <Text style={styles.infoText}>Empresa 1</Text>
        <Text style={styles.infoField}>Site: </Text>
        <Text style={styles.infoText}>www.empresa1.com.pt</Text>
        <Text style={styles.infoField}>Endereço: </Text>
        <Text style={styles.infoText}>Sá Carneiro, 1234</Text>
        <Text style={styles.infoField}>Horario de funcionamento: </Text>
        <Text style={styles.infoText}>
          <Text>Seg - sex: 8:00 - 18:00 {'\n'}</Text>
          <Text>Sab: 8:00 - 14:00 {'\n'}</Text>
          <Text>Dom: 9:00 - 13:00</Text>
        </Text>
      </View>
      <View style={styles.buttons}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Ofertas')}
          style={styles.button}
        >
          Ofertas
        </Button>
        <Button mode="contained" onPress={() => navigation.navigate('Cupoes')}>
          Cupões
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 18,
    paddingTop: 24,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  infoField: {
    width: '40%',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoText: {
    width: '50%',
  },
  contentContainer: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#ffffff80',
  },
  title: {
    fontSize: 24,
    alignSelf: 'center',
    marginBottom: 16,
  },
  image: {
    width: 150,
    height: 150,
    margin: 4,
    borderRadius: 150,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    marginRight: 24,
  },
});
