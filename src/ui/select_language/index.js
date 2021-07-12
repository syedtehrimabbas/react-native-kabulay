import React from "react";
import AppContainer from "../../core/AppContainer";
import { AppStyles } from "../../theme/styles";
import UserContext from "../../AuthContaxt";
import { images } from "../../assets";
import { Typography } from "../../theme/Typography";
import LinearGradient from "react-native-linear-gradient";
import gradiant_colors from "../../theme/gradiant_colors";
import { WELCOME } from "../../constants/ScreenNames";
import { GradiantButton } from "../../core/GradiantButton";
import { Image, Text, View } from "react-native";
import { ChakraTypography } from "../../theme/ChakraTypography";


const SelectLanguage = ({ navigation }) => {
  const state = React.useContext(UserContext);
  const LanguageComponent = ({ colors, text }) => {
    return <LinearGradient colors={colors} style={[AppStyles.centerItems, {
      width: 80,
      height: 80,
      borderRadius: 40,
      margin: 10,
    }]}>
      <Text style={[ChakraTypography.SmallRegular]}>{text}</Text>
    </LinearGradient>;
  };

  return (
    <AppContainer
      state={state}
      children={
        <View style={[AppStyles.columnContainer, AppStyles.centerItems]}>
          <Image
            source={images.logo}
            style={{ width: 144, height: 151 }} />

          <Text style={[Typography.Normal, { marginTop: 150 }]}>{"Select Language"}</Text>
          <View style={{ flex: 1, marginTop: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <LanguageComponent colors={gradiant_colors.pinkGradiant} text={"Dari"} />
              <LanguageComponent colors={gradiant_colors.yellowGradiant} text={"Pashto"} />

            </View>

            <View style={{ flexDirection: "row" }}>
              <LanguageComponent colors={gradiant_colors.greenGradiant} text={"Urdu"} />
              <LanguageComponent colors={gradiant_colors.blueGradiant} text={"English"} />

            </View>

          </View>

          <GradiantButton
            label="Submit"
            styles={{ position: "absolute", bottom: 30 }}
            onPress={() => {
              navigation.navigate(WELCOME);
            }}
            backgroundColor={gradiant_colors.pinkGradiant}
          />
        </View>
      } />
  );
};
export default SelectLanguage;
