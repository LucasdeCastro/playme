import { StyleSheet } from "react-native";

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  image: { flex: 6 },
  controllers: {
    flex: 4,
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center"
  },
  musicSlider: { flexDirection: 'row' },
  slider: { flex: 1 },
  track: {
    height: 8,
    borderRadius: 0,
  },
  thumb: {
    width: 5,
    height: 20,
    borderRadius: 0,
    backgroundColor: '#FF4064',
  },
  title: { fontSize: 22, marginTop: 5, color: "#404040" },
  subtitle: { fontSize: 15, marginTop: 5 },
  controllerInline: { flexDirection: "row" },
  controllerButton: { padding: 10, margin: 10}
});