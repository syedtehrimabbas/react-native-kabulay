import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import UserContext from "../../../AuthContaxt/index";
import { AppStyles } from "../../../theme/styles";
import { Typography } from "../../../theme/Typography";
import colors from "../../../theme/colors";
import AppContainer from "../../../core/AppContainer";
import { images } from "../../../assets";
import { ChakraTypography } from "../../../theme/ChakraTypography";
import { GradiantCircle } from "../../../core/GradiantCircle";
import gradiant_colors from "../../../theme/gradiant_colors";
import LinearGradient from "react-native-linear-gradient";
import { BADGE_ID, CONTACT_US, REFERRAL_SCREEN } from "../../../constants/ScreenNames";

const Profile = ({ navigation }) => {
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


  React.useEffect(() => {
    return () => {
    };
  }, []);
  const ProfileItemView = ({ gradiantColor, title, subTitle }) => {
    return <View style={{ flexDirection: "row", flex: 1 }}>
      <GradiantCircle size={20} colors={gradiantColor} />
      <View>
        <Text style={[ChakraTypography.Normal, { marginTop: 5 }]}>{title}</Text>
        <Text
          style={[ChakraTypography.SmallMedium, { fontSize: 12, color: colors.lightBlueDark }]}>{subTitle}</Text>
      </View>
    </View>;
  };

  const onItemClick = (item) => {
    let destination = "";
    switch (item.id) {
      case 1:
        destination = CONTACT_US;
        break;
      case 2:
        destination = BADGE_ID;
        break;
      case 3:
        destination = REFERRAL_SCREEN;
        break;
    }
    navigation.navigate(destination);
  };
  return (
    <AppContainer
      state={state}
      background={images.bg_small_squares}
      children={
        <View style={[AppStyles.columnContainer, { backgroundColor: "transparent", padding: hp(2) }]}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "column" }}>

              <Text style={[ChakraTypography.SmallRegular, { marginTop: 10 }]}>{"AVAILABLE BALANCE"}</Text>
              <Text style={[ChakraTypography.Normal, { fontSize: 22, color: colors.pinkLight }]}>{"$ 10.56"}</Text>

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
          <Text style={[ChakraTypography.Normal, { fontSize: 22 }]}>{"Profile"}</Text>

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
          <ScrollView showsVerticalScrollIndicator={false}
                      style={{ marginTop: 30 }}>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", paddingEnd: 20, marginTop: 10 }}>
                <ProfileItemView gradiantColor={gradiant_colors.greenGradiant} title={"Name"} subTitle={name} />
                <View style={[{ width: "4%" }]} />
                <ProfileItemView gradiantColor={gradiant_colors.yellowGradiant} title={"DOB"} subTitle={dob} />
              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between", paddingEnd: 20, marginTop: 10 }}>
                <ProfileItemView gradiantColor={gradiant_colors.blueGradiant} title={"Email"} subTitle={email} />
                <View style={[{ width: "4%" }]} />
                <ProfileItemView gradiantColor={gradiant_colors.pinkGradiant} title={"MOBILE NO"} subTitle={phone} />
              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between", paddingEnd: 20, marginTop: 50 }}>
                <ProfileItemView gradiantColor={gradiant_colors.blueGradiant} title={"City"} subTitle={city} />
                <View style={[{ width: "4%" }]} />
                <ProfileItemView gradiantColor={gradiant_colors.orangeGradiant} title={"State"}
                                 subTitle={countryState} />
              </View>

              <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingEnd: 20,
                marginTop: 10,
                paddingBottom: 10,
                borderBottomColor: colors.blueColor,
                borderBottomWidth: 1,
              }}>
                <ProfileItemView gradiantColor={gradiant_colors.greenGradiant} title={"Country"} subTitle={country} />

                <View style={[{ width: "4%" }]} />
                <ProfileItemView gradiantColor={gradiant_colors.yellowGradiant} title={"Zip Code"} subTitle={zipCode} />

              </View>
              <LinearGradient
                colors={gradiant_colors.blueGradiant}
                style={[{
                  marginTop: 20,
                  borderRadius: 15,
                  width: "100%",
                  justifyContent: "center",
                  paddingBottom:5
                }]}

              >
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={[
                    { id: 1, label: "Contact Us", icon: images.icon_email },
                    { id: 2, label: "Badge ID", icon: images.icon_badge },
                    { id: 3, label: "Referrals", icon: images.icon_refer },
                    { id: 4, label: "Sign out", icon: images.icon_logout }]}
                  renderItem={({ item }) => <TouchableOpacity activeOpacity={.7} onPress={() => onItemClick(item)}>
                    <View style={{
                      borderRadius: 15,
                      margin: 5,
                      marginBottom:0,
                      backgroundColor: colors.primaryDarkColor,
                      padding: 10,
                      paddingStart: 30,
                      flexDirection: "row",
                    }}>
                      <View style={{ flexDirection: "column", flex: 1 }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                          <Image source={item.icon}
                                 style={{ width: 30, height: 40, resizeMode: "contain", marginEnd: 10 }} />
                          <Text style={[ChakraTypography.MediumBold, { color: colors.grey2 }]}>{item.label}</Text>
                        </View>
                      </View>

                    </View>
                  </TouchableOpacity>}
                />
              </LinearGradient>

            </View>
          </ScrollView>

        </View>
      } />
  );
};

export default Profile;
