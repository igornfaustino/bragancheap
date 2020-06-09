import * as React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { CommonActions } from '@react-navigation/native';

const castelo = require('../assets/images/castelo.jpeg');

export default function RegisterScreen({ navigation }) {
  navigation.setOptions({ headerShown: false });

  return (
    <ImageBackground source={castelo} style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>BRAGANCHEAP</Text>
        <TextInput style={styles.input} label="Digite o seu nome" />
        <TextInput style={styles.input} label="Digite o seu email" />
        <TextInput style={styles.input} label="Digite o seu NIF" />
        <TextInput
          style={styles.input}
          label="Digite a sua data de nascimento"
        />
        <TextInput style={styles.input} label="Digite o seu telemovel" />
        <TextInput style={styles.input} label="Digite a sua senha" />
        <TextInput style={styles.input} label="Confirme a sua senha" />
        <Button
          mode="contained"
          onPress={() =>
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{ name: 'Home' }],
              })
            )
          }
        >
          Registrar
        </Button>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Já possuo uma conta!</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 8,
  },
  contentContainer: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#ffffff80',
  },
  title: {
    fontSize: 32,
    alignSelf: 'center',
    marginBottom: 16,
    // fontWeight: 'bold',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    alignSelf: 'center',
    paddingTop: 16,
  },
});
