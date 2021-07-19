import React from "react";
import { Image, Text, View } from "react-native";
import AppContainer from "../../core/AppContainer";
import { AppStyles } from "../../theme/styles";
import UserContext from "../../AuthContaxt";
import gradiant_colors from "../../theme/gradiant_colors";
import { GradiantButton } from "../../core/GradiantButton";
import { BackToolbar } from "../../core/BackToolbar";
import { Typography } from "../../theme/Typography";
import { GradiantCircle } from "../../core/GradiantCircle";
import { images } from "../../assets";
import { OTP_VERIFICATION } from "../../constants/ScreenNames";

const FollowKabulay = ({ navigation }) => {
  const state = React.useContext(UserContext);

  return (
    <AppContainer
      state={state}
      children={
        <View style={[AppStyles.columnContainer]}>
          <BackToolbar navigation={navigation} />
          <View style={{ flexDirection: "row", justifyContent: "space-between", paddingStart: 10 }}>
            <View style={{ flexDirection: "column" }}>

              <Text style={[Typography.Normal, { fontSize: 22, marginTop: 10 }]}>{"Follow Kabulay on\n" +
              "Social Media"}</Text>

            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
            <View style={{ flexDirection: "column", alignItems: "center", flex: 1 }}>
              <GradiantCircle size={60} colors={gradiant_colors.greenGradiant} iconSrc={images.facebook} />
              <Text
                numberOfLines={1}
                style={[Typography.SmallRegular, {
                  ellipsizeMode: "middle",
                }]}>{"Follow"}</Text>
            </View>

            <View style={{ flexDirection: "column", alignItems: "center", flex: 1 }}>
              <GradiantCircle size={60} colors={gradiant_colors.pinkGradiantLight} iconSrc={images.insta} />
              <Text
                numberOfLines={1}
                style={[Typography.SmallRegular, {
                  ellipsizeMode: "middle",
                }]}>{"Following"}</Text>
            </View>


            <View style={{ flexDirection: "column", alignItems: "center", flex: 1 }}>
              <GradiantCircle size={60} colors={gradiant_colors.yellowGradiant} iconSrc={images.youtube} />
              <Text
                numberOfLines={1}
                style={[Typography.SmallRegular, {
                  ellipsizeMode: "middle",
                }]}>{"Follow"}</Text>
            </View>

          </View>

          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <GradiantCircle size={60} colors={gradiant_colors.blueGradiant} iconSrc={images.twitter} />
            <Text
              numberOfLines={1}
              style={[Typography.SmallRegular, {
                ellipsizeMode: "middle",
              }]}>{"Follow"}</Text>
          </View>

          <Image source={images.progress_view}
                 style={{ width: 113, height: 113, alignSelf:'center', resizeMode: "contain", margin: 20 }} />

          <GradiantButton
            label="Update Profile"
            onPress={() => navigation.navigate(OTP_VERIFICATION)}
            styles={{ position: "absolute", marginTop: 10, bottom: 20 }}
            backgroundColor={gradiant_colors.pinkGradiant}
          />

        </View>
      } />
  );
};
export default FollowKabulay;
