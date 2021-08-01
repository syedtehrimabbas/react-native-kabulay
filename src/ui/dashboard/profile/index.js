import React from "react";
import { Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import UserContext from "../../../AuthContaxt/index";
import { AppStyles } from "../../../theme/styles";
import { Typography } from "../../../theme/Typography";
import colors from "../../../theme/colors";
import AppContainer from "../../../core/AppContainer";

const Profile = ({ navigation }) => {
  const state = React.useContext(UserContext);
  React.useEffect(() => {
    return () => {
    };
  }, []);

  return (
    <AppContainer
      state={state}
      children={
        <View style={[AppStyles.columnContainer, { padding: hp(2) }]}>
          <Text style={[Typography.MediumRegular, {
            fontSize: 22,
            color: colors.redColor,
            textAlign: "center",
          }]}>{"Profile"}</Text>

        </View>
      } />
  );
};

export default Profile;
