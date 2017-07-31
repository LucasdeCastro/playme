import { StyleSheet } from "react-native";

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFF'
  },

  image: { height: 200 },

  textContent: { padding: 10 },
  title: { paddingVertical: 10, fontSize: 25, fontWeight: "bold", color: "#404040" },
  subtitle: { fontSize: 15, color: "#404040" },
  albumsContent: { flexDirection: 'row' },
  album: { width: 100, height: 100, margin: 5, }
});