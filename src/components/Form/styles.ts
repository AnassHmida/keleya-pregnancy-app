import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export const SubmitButtonStyles = StyleSheet.create({
    containerstyle: {
      position: 'absolute',
      bottom: 0,
      marginBottom: 20,
      paddingVertical: 15,
      width: '90%',
      borderRadius: 10,
      backgroundColor: Colors.LIGHT_TEAL,
    },
    textstyle: {
        fontSize: 25,
        fontFamily:'MuseoSansRounded-500',
        textAlign:'center',
        color: Colors.WHITE,
      },
  });