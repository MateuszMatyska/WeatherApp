import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { View, Button, Icon } from "native-base";
import ModalComponent from "../../components/modal/ModalCompnent";

const Favourites = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <SafeAreaView>
      <View>
        <Text>Favourites Screen</Text>
        <Text>{isVisible ? "true" : "false"}</Text>
      </View>
      <View>
        <Button
          rounded
          large
          onPress={() => {
            setIsVisible(true);
          }}
        >
          <Text>Show Modal!</Text>
        </Button>
        <ModalComponent
          title="Alert Info"
          isVisible={isVisible}
          onClose={() => {
            setIsVisible(false);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Favourites;
