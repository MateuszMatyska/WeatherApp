import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Weather.styles';

export default Weather = ({weather}) => {
    const {item} = weather;
    return <View>
        <Text>{`Stacja ${item.stacja}`}</Text>
    </View>
};


//weather.item.

// cisnienie: "1016.1"
// data_pomiaru: "2020-07-29"
// godzina_pomiaru: "18"
// id_stacji: "12295"
// kierunek_wiatru: "310"
// predkosc_wiatru: "1"
// stacja: "Białystok"
// suma_opadu: "0.4"
// temperatura: "20.6"
// wilgotnosc_wzgledna: "51.3"