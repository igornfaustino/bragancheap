import React, { useState, useMemo, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Searchbar } from "react-native-paper";

const imageDimension = 100;

export default function RankingScreen({ navigation }) {
  navigation.setOptions({ headerShown: false });

  const [isShowingMoreProducts, setIsShowingMoreProducts] = useState(false);
  const [isShowingMoreServices, setIsShowingMoreServices] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={{ alignSelf: "center", fontSize: 22 }}>Ranking</Text>
      <View style={[styles.upperImage, styles.image]}>
        <Text style={styles.ptsTittle}>1st</Text>
        <Image
          style={styles.image}
          source={require("../assets/images/luffy.jpg")}
        />
        <Text style={styles.ptsSubtittle}>1670 pts</Text>
      </View>
      <View
        style={{
          display: "flex",
          alignSelf: "center",
          width: "90%",
          height: "auto",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View style={[styles.image, styles.bottomImgContainer]}>
          <Text style={styles.ptsTittle}>2nd</Text>
          <Image
            style={styles.image}
            source={require("../assets/images/zoro.jpg")}
          />
          <Text style={styles.ptsSubtittle}>1470 pts</Text>
        </View>
        <View style={[styles.image, styles.bottomImgContainer]}>
          <Text style={styles.ptsTittle}>3rd</Text>
          <Image
            style={styles.image}
            source={require("../assets/images/nami.jpg")}
          />
          <Text style={styles.ptsSubtittle}>1320 pts</Text>
        </View>
      </View>

      <Text style={{ alignSelf: "center", marginTop: "5%", fontWeight: "100" }}>
        Essas são as pessoas que mais pontuaram este mês!
      </Text>

      <View
        style={{
          alignSelf: "center",
          height: "20%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          marginTop: "10%",
          width: "50%",
          borderWidth: 1,
        }}
      >
        <Text style={{ alignSelf: "center" }}>Sua Pontuação</Text>
        <Text style={{ alignSelf: "center", fontSize: 25 }}>300 pts</Text>
      </View>

      <Text
        style={{
          alignSelf: "center",
          width: "50%",
          fontSize: 10,
          fontWeight: "100",
          marginTop: "5%",
        }}
      >
        Sua posição atual no rank: 1423
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
  },
  content: {
    marginTop: 16,
  },
  image: {
    width: imageDimension,
    height: imageDimension,
    borderRadius: imageDimension,
  },
  flex: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  marginTop: {
    marginTop: 16,
  },
  upperImage: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
  },
  ptsTittle: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "400",
  },
  ptsSubtittle: {
    alignSelf: "center",
    fontSize: 10,
  },
  bottomImgContainer: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
  },
});
