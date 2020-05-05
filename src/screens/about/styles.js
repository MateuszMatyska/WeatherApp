import { StyleSheet } from "react-native";
import { colors } from "src/const/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  titleContainer: {
    width: wp("100%"),
    alignItems: "center",
  },
  title: {
    fontSize: hp("5%"),
  },
  statusContainer: {
    width: wp("100%"),
  },
  percentContainer: {
    width: wp("100%"),
    height: hp("5%"),
    alignItems: "center",
    position: "absolute",
  },
  percentText: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: hp("4%"),
  },
  statusBar: {
    backgroundColor: colors.primary,
    height: hp("5%"),
  },
  scrollContainer: {
    marginTop: hp("1%"),
    width: wp("90%"),
    height: hp("75%"),
    borderWidth: hp("0.1%"),
    elevation: 5,
    backgroundColor: colors.white,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
});
