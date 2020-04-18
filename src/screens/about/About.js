import React from 'react';
import {SafeAreaView} from 'react-native';
import {View, Text, Button} from 'native-base';
import {openDrawer} from 'src/navigation/NavigationRef';

const About = (props) => {
    return <SafeAreaView>
        <View>
            <Button onPress={() => {openDrawer()}}><Text>Open</Text></Button>
            <Text>About Screen</Text>
        </View>
    </SafeAreaView>
}

export default About;