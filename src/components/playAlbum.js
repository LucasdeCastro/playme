import React from "react";
import Utils from "../utils";
import { View, Text, Image, Slider, TouchableOpacity } from "react-native";
import playalbum from "../styles/playAlbum";

export const MusicSlider = ({ time, prev, next, onChange }) => (
  <View style={playalbum.musicSlider}>
    {prev}
    <Slider
      step={1}
      mininumValue={0}
      maximumValue={10}
      onValueChange={onChange}
      trackStyle={playalbum.track}
      thumbStyle={playalbum.thumb}
      style={playalbum.slider} />
    {next}
  </View>
);

export const MusicController = ({ prev, next, play }) => (
  <View style={playalbum.controllerInline}>
    <TouchableOpacity onPress={prev} style={playalbum.controllerButton}>
      <Utils.AllIcons type={"FW"} name={"backward"} size={30} />
    </TouchableOpacity>

    <TouchableOpacity onPress={play} style={playalbum.controllerButton}>
      <Utils.AllIcons type={"FW"} name={"play"} size={30} />
    </TouchableOpacity>

    <TouchableOpacity onPress={next} style={playalbum.controllerButton}>
      <Utils.AllIcons type={"FW"} name={"forward"} size={30} />
    </TouchableOpacity>
  </View>
);

export const Starts = ({ check, total, onCheck, onUnCheck }) => {
  const off = total - check;

  const forloop = (qt, type, comp) => {
    const list = [];
    for (let i = 0; i < qt; i++)
      list.push(comp)
    return list;
  }

  return (
    <View style={playalbum.controllerInline}>
      {forloop(check, "star", (
        <TouchableOpacity onPress={onUnCheck} style={{ margin: 5 }}>
          <Utils.AllIcons type={"FW"} name={"star"} size={15} />
        </TouchableOpacity>
      ))}
      {forloop(off, "staro", (
        <TouchableOpacity onPress={onCheck} style={{ margin: 5 }}>
          <Utils.AllIcons type={"FW"} name={"star-o"} size={15} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default class PlayAlbum extends React.Component {
  state = { time: 0, rate: 0 }

  onChange = e => this.setState({ time: e })
  onCheck = e => this.setState({ rate: this.state.rate + 1 })
  onUnCheck = e => this.setState({ rate: this.state.rate - 1 })

  render() {
    const { time, rate } = this.state;
    const { item } = this.props.navigation.state.params;

    const text = <Text>00:00</Text>
    return (
      <View style={playalbum.main}>
        <Image
          source={{ uri: item.banner }}
          style={playalbum.image} />

        <View style={playalbum.controllers}>
          <MusicSlider
            time={time} prev={text} next={text}
            onChange={this.onChange} />

          <Text style={playalbum.title}>{item.title}</Text>
          <Text style={playalbum.subtitle}>{item.artist}</Text>

          <Starts
            check={rate}
            total={5}
            onCheck={this.onCheck}
            onUnCheck={this.onUnCheck} />

          <MusicController />

          <MusicSlider
            time={time}
            prev={<Utils.AllIcons type={"FW"} name={"volume-off"} size={30} />}
            next={<Utils.AllIcons type={"FW"} name={"volume-up"} size={30} />}
            onChange={this.onChange} />
        </View>
      </View>
    )
  }
} 