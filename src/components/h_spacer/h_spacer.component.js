import React from 'react';
import { View } from 'react-native';

const HSpacerComponent = ({ space }) => (
    <View style={{ marginTop: `${space*10}` }} />
);

export default HSpacerComponent;
