import * as React from "react";
import { StyleSheet, View, Image, ScrollView, Text } from "react-native";
import ImageTouchable from "../components/ImageTouchable";

export default function ListOfertasScreen({ navigation }) {
  navigation.setOptions({ headerShown: true });

  const empresas = React.useMemo(() => {
    const empresasParaMostrar = [];
    for (let i = 0; i < 10; i++) {
      empresasParaMostrar.push(
        <ImageTouchable
          source={{ uri: `https://picsum.photos/id/${10 + i}/360` }}
          imgStyle={styles.image}
          key={i}
        />
      );
    }
    return empresasParaMostrar;
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <Text style={{ marginLeft: "2.5%", marginTop: "2.5%" }}>Filtros</Text>
      <View
        style={{
          marginTop: "4%",
          paddingBottom: "4%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Text style={styles.filterTag}>10%</Text>

        <Text style={styles.filterTag}>20%</Text>

        <Text style={styles.filterTag}>30%</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.list}>{empresas}</View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 8,
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    margin: 4,
    borderRadius: 150,
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  filterTag: {
    height: 20,
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 50,
    width: "30%",
  },
});
