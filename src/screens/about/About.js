import React, { useRef, useState, useEffect } from "react";
import { SafeAreaView, ScrollView, PanResponder, Animated } from "react-native";
import { View, Text, Button } from "native-base";
import { text } from "./text";
import { styles } from "./styles";

const About = (props) => {
  const [scrollViewHeight, setScrollViewHeight] = useState(0);
  const [scrollViewContentHeight, setScrollViewContentHeight] = useState(0);
  const [number, setNumber] = useState(0);

  const status = useRef(new Animated.Value(0)).current;
  const statusColor = useRef(new Animated.Value(0)).current;
  const colorPercent = useRef(new Animated.Value(0)).current;
  const opacityPercent = useRef(new Animated.Value(0)).current;

  const getPercentageValue = (value) => {
    const max = scrollViewContentHeight - scrollViewHeight;

    if (max > 0) {
      return Math.round((value * 100) / max);
    }

    return 0;
  };

  const setStatus = (value) => {
    const percent = getPercentageValue(value);

    setNumber(percent);
    setStatusColor(percent);
    Animated.timing(status, {
      toValue: value,
      duration: 1000,
    }).start();

    if (percent >= 58) {
      setColorPercent(1);
    } else {
      setColorPercent(0);
    }

    if (percent > 0) {
      setOpacityPercent(1);
    } else {
      setOpacityPercent(0);
    }
  };

  const setColorPercent = (value) => {
    Animated.timing(colorPercent, {
      toValue: value,
      duration: 1000,
    }).start();
  };

  const setOpacityPercent = (value) => {
    Animated.timing(opacityPercent, {
      toValue: value,
      duration: 500,
    }).start();
  };

  const setStatusColor = (value) => {
    Animated.timing(statusColor, {
      toValue: value,
      duration: 1000,
    }).start();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>About Screen</Text>
      </View>
      <View style={styles.statusContainer}>
        <Animated.View
          style={[
            styles.statusBar,
            {
              width: status.interpolate({
                inputRange: [
                  0,
                  scrollViewContentHeight - scrollViewHeight > 0
                    ? scrollViewContentHeight - scrollViewHeight
                    : 0,
                ],
                outputRange: ["0%", "100%"],
              }),
              backgroundColor: statusColor.interpolate({
                inputRange: [
                  0,50,100
                ],
                outputRange: ['#0BABD9','#0B7AE3', '#0033CC'],
              })
            },
          ]}
        />
        <View style={styles.percentContainer}>
          <Animated.Text
            style={[
              styles.percentText,
              {
                color: colorPercent.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["#000000", "#ffffff"],
                }),
                opacity: opacityPercent,
              },
            ]}
          >
            {`${number}%`}
          </Animated.Text>
        </View>
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView
          onScroll={(event) => {
            setStatus(event.nativeEvent.contentOffset.y);
          }}
          onContentSizeChange={(width, height) => {
            setScrollViewContentHeight(height);
          }}
          onLayout={(event) => {
            setScrollViewHeight(event.nativeEvent.layout.height);
          }}
        >
          <Text>{text}</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default About;
