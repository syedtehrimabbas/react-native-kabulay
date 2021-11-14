import React from "react";
import { Image, Text, View } from "react-native";
import AppContainer from "../../../../core/AppContainer";
import UserContext from "../../../../AuthContaxt";
import { images } from "../../../../assets";
import { AppStyles } from "../../../../theme/styles";
import { BackToolbar } from "../../../../core/BackToolbar";
import { Typography } from "../../../../theme/Typography";
import colors from "../../../../theme/colors";
import { ChakraTypography } from "../../../../theme/ChakraTypography";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const BadgeId = ({ navigation }) => {
  const state = React.useContext(UserContext);

  return (
    <AppContainer
      state={state}
      children={
        <View style={[AppStyles.columnContainer, { height: "100%", backgroundColor: "transparent", padding: hp(2) }]}>
          <BackToolbar navigation={navigation} />
          <View style={{flexDirection:'row',alignItems:'baseline',justifyContent:'space-between',marginTop:-25}}>
            <Text style={[Typography.Normal, { marginStart: 10, fontSize: 22, marginTop: 10 }]}>{"Badge ID"}</Text>
            <Image
              source={images.logo}
              style={{ width: 93, height: 98 }} />
          </View>

          <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <View style={{
              backgroundColor: colors.white,
              width: "80%",
              paddingTop: 30,
              paddingBottom: 30,
              paddingLeft: 15,
              paddingRight: 15,
              borderRadius: 20,
              alignSelf: "center",
              alignItems: "center",
            }}>
              <Image source={images.avatar}
                     style={{ width: 80, height: 80, resizeMode: "contain", alignSelf: "center" }} />
              <Image source={images.qr_code}
                     style={{ width: "100%", height: 200, resizeMode: "contain", alignSelf: "center" }} />
              <Text style={[ChakraTypography.MediumBold, { color: colors.primaryDarkColor }]}>{"ID: 64374367"}</Text>
            </View>
          </View>

        </View>
      } />
  );
};
export default BadgeId;
