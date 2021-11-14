import React from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import AppContainer from "../../core/AppContainer";
import { AppStyles } from "../../theme/styles";
import UserContext from "../../AuthContaxt";
import gradiant_colors from "../../theme/gradiant_colors";
import { GradiantButton } from "../../core/GradiantButton";
import { images } from "../../assets";
import { ChakraTypography } from "../../theme/ChakraTypography";
import { DASHBOARD } from "../../constants/ScreenNames";

const CheckinFirst = ({ navigation }) => {
  const state = React.useContext(UserContext);

  return (
    <AppContainer
      state={state}
      background={images.bg_small_squares}
      children={
        <View style={{ height: "100%" }}>
          <ScrollView>
            <View style={[AppStyles.columnContainer, { height: "100%", backgroundColor: "transparent" }]}>

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
                                 alignSelf: "center",
                                 marginTop: 100,
                                 width: 250,
                                 height: 250,
                                 justifyContent: "center",
                                 alignItems: "center",
                               }}>
                <Text style={[ChakraTypography.Normal, { fontSize: 60, alignSelf: "center" }]}>{"30"}</Text>
              </ImageBackground>

            </View>
          </ScrollView>
          <GradiantButton
            label="Check-In"
            onPress={() => {
              navigation.navigate(DASHBOARD);
            }}
            styles={{ position: "absolute", marginTop: 10, bottom: 20 }}
            backgroundColor={gradiant_colors.pinkGradiant}
          />
        </View>
      } />
  );
};
export default CheckinFirst;
