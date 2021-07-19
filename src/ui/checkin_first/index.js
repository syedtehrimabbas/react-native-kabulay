import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import AppContainer from "../../core/AppContainer";
import { AppStyles } from "../../theme/styles";
import UserContext from "../../AuthContaxt";
import gradiant_colors from "../../theme/gradiant_colors";
import { GradiantButton } from "../../core/GradiantButton";
import { images } from "../../assets";
import { ChakraTypography } from "../../theme/ChakraTypography";
import { Typography } from "../../theme/Typography";

const CheckinFirst = ({ navigation }) => {
  const state = React.useContext(UserContext);

  return (
    <AppContainer
      state={state}
      children={
        <View style={[AppStyles.columnContainer]}>

          <Image
            source={images.logo}
            style={{ width: 144, height: 151, alignSelf: "center" }} />

          <Text style={[ChakraTypography.Normal, {
            fontSize: 22,
            marginTop: 10,
            alignSelf: "center",
          }]}>{"Please check-in for upcoming task"}</Text>

          <ImageBackground resizeMode="contain" source={images.blue_waves}
                           style={{
                             flex: 1,
                             marginTop:-100,
                             width: "100%",
                             justifyContent: "center",
                             alignItems: "center",
                           }}>
            <Text style={[ChakraTypography.Normal, {fontSize: 60,alignSelf:'center'}]}>{"30"}</Text>
          </ImageBackground>

          <GradiantButton
            label="Check-In"
            onPress={() => {

            }}
            styles={{ position: "absolute", marginTop: 10, bottom: 20 }}
            backgroundColor={gradiant_colors.pinkGradiant}
          />

        </View>
      } />
  );
};
export default CheckinFirst;
