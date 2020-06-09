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

export default function LoginScreen({ navigation }) {
  navigation.setOptions({ headerShown: true });

  return (
    <ImageBackground source={castelo} style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Bem vindo de volta!</Text>
        <TextInput style={styles.input} label="Digite o seu email" />
        <TextInput style={styles.input} label="Digite a sua senha" />
        <Button
          icon="login"
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
          Login
        </Button>
      </View>
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
    fontSize: 24,
    alignSelf: 'center',
    marginBottom: 16,
  },
});
