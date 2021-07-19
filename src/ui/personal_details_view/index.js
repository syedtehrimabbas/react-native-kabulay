import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

import AppContainer from "../../core/AppContainer";
import { AppStyles } from "../../theme/styles";
import UserContext from "../../AuthContaxt";
import gradiant_colors from "../../theme/gradiant_colors";
import { GradiantButton } from "../../core/GradiantButton";
import { BackToolbar } from "../../core/BackToolbar";
import { Typography } from "../../theme/Typography";
import { images } from "../../assets";
import colors from "../../theme/colors";
import { GradiantCircle } from "../../core/GradiantCircle";
import { ChakraTypography } from "../../theme/ChakraTypography";
import { FOLLOW_KABULAY } from "../../constants/ScreenNames";

const PersonalDetailsView = ({ navigation }) => {
  const state = React.useContext(UserContext);
  const [name, setName] = useState("Tehrim Abbas");
  const [email, setEmail] = useState("abc@gmail.com");
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("0340 5104524");
  const [dob, setDOB] = useState("April 14, 1998");
  const [city, setCity] = useState("New York");
  const [country, setCountry] = useState("United State");
  const [countryState, setCountryState] = useState("new York State");
  const [zipCode, setZipCode] = useState("100001");

  const ProfileItemView = ({ gradiantColor, title, subTitle }) => {
    return <View style={{ flexDirection: "row" }}>
      <GradiantCircle size={20} colors={gradiantColor} />
      <View>
        <Text style={[ChakraTypography.Normal, { marginTop: 5 }]}>{title}</Text>
        <Text
          style={[ChakraTypography.SmallMedium, { fontSize: 12, color: colors.lightBlueDark }]}>{subTitle}</Text>
      </View>
    </View>;
  };
  return (
    <AppContainer
      state={state}
      children={
        <ScrollView>
          <View style={[AppStyles.columnContainer]}>
            <BackToolbar navigation={navigation} />
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingStart: 10 }}>
              <View style={{ flexDirection: "column" }}>

                <Text style={[Typography.SmallRegular, { marginTop: 10 }]}>{"My Profile"}</Text>
                <Text style={[Typography.Normal, { fontSize: 22 }]}>{name}</Text>

              </View>

              <View style={[AppStyles.centerItems, {
                width: 60,
                height: 60,
                borderRadius: 30,
                marginEnd: 10,
                backgroundColor: colors.blueLight,
                alignSelf: "center",
              }]}>
                <Image source={images.avatar} style={{ width: 60, height: 60, resizeMode: "contain" }} />

              </View>

            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
              <View style={{ flexDirection: "column", alignItems: "center", flex: 1 }}>
                <GradiantCircle size={60} colors={gradiant_colors.greenGradiant} iconSrc={images.email} />
                <Text
                  numberOfLines={1}
                  style={[Typography.SmallRegular, {
                    marginTop: 10,
                    ellipsizeMode: "middle",
                  }]}>{email}</Text>
              </View>

              <View style={{ flexDirection: "column", alignItems: "center", flex: 1 }}>
                <GradiantCircle size={60} colors={gradiant_colors.pinkGradiant} iconSrc={images.phone} />
                <Text
                  numberOfLines={1}
                  style={[Typography.SmallRegular, {
                    marginTop: 10,
                    ellipsizeMode: "middle",
                  }]}>{phone}</Text>
              </View>

              <View style={{ flexDirection: "column", alignItems: "center", flex: 1 }}>
                <GradiantCircle size={60} colors={gradiant_colors.yellowGradiant} iconSrc={images.calender} />
                <Text numberOfLines={1}
                      style={[Typography.SmallRegular, {
                        marginTop: 10,
                        ellipsizeMode: "middle",
                      }]}>{dob}</Text>
              </View>

            </View>

            <ProfileItemView gradiantColor={gradiant_colors.greenGradiant} title={"Name"} subTitle={name} />
            <ProfileItemView gradiantColor={gradiant_colors.blueGradiant} title={"Email"} subTitle={email} />
            <ProfileItemView gradiantColor={gradiant_colors.yellowGradiant} title={"DOB"} subTitle={dob} />
            <ProfileItemView gradiantColor={gradiant_colors.pinkGradiant} title={"MOBILE NO"} subTitle={phone} />

            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingEnd: 20 }}>
              <ProfileItemView gradiantColor={gradiant_colors.blueGradiant} title={"City"} subTitle={city} />

              <View style={[{ width: "4%" }]} />
              <ProfileItemView gradiantColor={gradiant_colors.yellowGradiant} title={"State"} subTitle={countryState} />

            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingEnd: 20 }}>
              <ProfileItemView gradiantColor={gradiant_colors.yellowGradiant} title={"Country"} subTitle={country} />

              <View style={[{ width: "4%" }]} />
              <ProfileItemView gradiantColor={gradiant_colors.greenGradiant} title={"Zip Code"} subTitle={zipCode} />

            </View>

            <GradiantButton
              label="Next"
              onPress={() => {
                navigation.navigate(FOLLOW_KABULAY);
              }}
              styles={{ marginTop: 15, marginBottom: 15 }}
              backgroundColor={gradiant_colors.pinkGradiant}
            />

          </View>
        </ScrollView>
      } />
  );
};
export default PersonalDetailsView;
