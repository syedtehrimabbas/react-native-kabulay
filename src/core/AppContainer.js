import React from "react";
import { ImageBackground, SafeAreaView, StatusBar, View } from "react-native";
import Loader from "./Loader";
import { AppStyles } from "../theme/styles";
import colors from "../theme/colors";

const AppContainer = ({ children, state, background }) => {
  return <View
    style={AppStyles.columnContainer}>
    <SafeAreaView />
    <StatusBar hidden={false} showHideTransition={true} backgroundColor={colors.primaryDarkColor} />
    <Loader loading={state.loading} />
    {background !== undefined ?
      <ImageBackground source={background} style={{ width: "100%", height: "100%" }}>
        {children}
      </ImageBackground> : children}
  </View>;
};
export default AppContainer;
