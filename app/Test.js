import React, { Component } from 'react';
import { Text } from 'react-native';
import ColorCircle from './components/ColorCircle';
import CounterScreen from './screens/CounterScreen';
//import ListScreen from './screens/ListScreen';

export default class Test extends Component {
    render() {
        return (
            <CounterScreen list={["a","b"]} listSize={2} addRandomItem={() => {alert("hello")}}>
                <Text>老牛</Text>
            </CounterScreen>
        );
    }
}