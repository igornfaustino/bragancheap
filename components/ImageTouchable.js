import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';

const ImageTouchable = ({ source, imgStyle, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={imgStyle} source={source} />
    </TouchableOpacity>
  );
};

export default ImageTouchable;
