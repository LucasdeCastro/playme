import { StyleSheet } from "react-native";

export default StyleSheet.create({
  main: {
    flex: 1,
    
    backgroundColor: "#FFF",
  },

  list: {
    marginTop: 10,
    padding: 10,
  },

  card: {
    flex: 1,
    padding: 15,
    height: 85,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EEE"
  },

  image: {
    height: 70,
    width: 70,
  },

  title: {
    flex: 1,
    marginLeft: 5,
    fontSize: 18,
    color: "#404040"
  },

  subTitle: {
    color: '#C0C0C0',
  }
});