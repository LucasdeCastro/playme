import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window")
export default StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FBFCFB",
  },

  card: {
    width: 160,
    margin: 10,
    elevation: 2,
    height: 200,
    backgroundColor: "#FFF"
  },

  imageCard: {
    width: 160,
    height: 150,
    alignSelf: "center",
  },

  cardBottom: { padding: 5 },

  cardTitle: { fontSize: 15, fontWeight: "bold", color: "#333333" },
  cardSubTitle: { fontSize: 13,  color: "#404040" },
});