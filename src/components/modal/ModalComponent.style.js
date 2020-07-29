import {StyleSheet} from 'react-native';
import {colors} from 'src/const/colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.75)'
      },
      modalView: {
        backgroundColor: colors.white,
        borderRadius: wp('5%'),
        alignItems: "center",
      },
      content: {
        width: wp('50%'),
        justifyContent: "center",
        alignItems: "center",
        padding: wp('7%'),
      },
      header: {
        flexDirection: 'row',
        height: hp('5%'),
        borderBottomWidth: hp('0.5%'),
        borderBottomColor: 'rgba(0,0,0,0.2)',
      },
      title: {
        margin: wp('1%'),
      }
}); 