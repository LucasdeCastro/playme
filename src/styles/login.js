import { StyleSheet } from "react-native";

export default StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
  },

  logo: {
    width: 150,
    height: 150,
    alignSelf: "center"
  },

  mainLoginForm: {
    marginTop: 40,
  },

  formCenter: {
    padding: 20
  },

  singUp: {
    marginTop: 30
  },

  button: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 20
  },

  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 2,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5
  },

  checkboxMain: { flexDirection: "row", marginTop: 15 },
});