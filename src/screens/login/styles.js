import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {colors} from 'src/const/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        justifyContent: "flex-start",
    },
    fadedContainer: {
        marginVertical: hp('10%'),
    },
    borderedInput: {
        height: hp('5%'),
        width: wp('90%'),
        borderColor: colors.primary,
        borderWidth: hp('0.2%'),
        fontSize: hp('2.5%'),
        color: colors.black,
        borderRadius: wp('50%'),
        paddingHorizontal: wp('5%'),
        paddingVertical:0,
        marginVertical: hp('2%')
    }
})