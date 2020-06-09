import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import LinkingConfiguration from "./navigation/LinkingConfiguration";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import RankingScreen from "./screens/RankingScreen";

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PaperProvider>
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
          <NavigationContainer linking={LinkingConfiguration}>
            <Stack.Navigator>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Ranking" component={RankingScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="Home" component={BottomTabNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
