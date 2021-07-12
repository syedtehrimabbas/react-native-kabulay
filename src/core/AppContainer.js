import React from "react";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import Loader from "./Loader";
import { AppStyles } from "../theme/styles";
import colors from "../theme/colors";

const AppContainer = ({ children, state }) => {
  return <View style={AppStyles.columnContainer}>
    <SafeAreaView />
    <StatusBar hidden={false} showHideTransition={true} backgroundColor={colors.primaryDarkColor} />
    <Loader loading={state.loading} />
      {children}
  </View>;
};
export default AppContainer;
