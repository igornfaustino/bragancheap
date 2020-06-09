import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function RankingScreen({ navigation }) {
  navigation.setOptions({ headerShown: false });

  const [isShowingMoreProducts, setIsShowingMoreProducts] = useState(false);
  const [isShowingMoreServices, setIsShowingMoreServices] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={{ alignSelf: "center", fontSize: 23, fontWeight: "bold" }}>
        Cupão 1
      </Text>
      <View style={[styles.image]}>
        <Image
          style={styles.image}
          source={require("../assets/images/qrcode.jpg")}
        />
      </View>

      <Text
        style={{
          textAlign: "center",
          //   width: "100%",
          marginTop: "10%",
          fontWeight: "100",
        }}
      >
        Apresente este cupão no momento de pagamento para obter o desconto!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
    padding: 16,
    position: "relative",
    marginTop: "15%",
  },
  image: {
    marginTop: "6%",
    alignSelf: "center",
    height: 150,
    width: 150,
  },
});
