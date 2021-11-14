import React, { useState } from "react";
import { Image, Picker, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import AppContainer from "../../core/AppContainer";
import { AppStyles } from "../../theme/styles";
import UserContext from "../../AuthContaxt";
import gradiant_colors from "../../theme/gradiant_colors";
import { GradiantButton } from "../../core/GradiantButton";
import { BackToolbar } from "../../core/BackToolbar";
import { Typography } from "../../theme/Typography";
import { images } from "../../assets";
import colors from "../../theme/colors";
import { ChakraTypography } from "../../theme/ChakraTypography";
import { PERSONAL_DETAILS_VIEW } from "../../constants/ScreenNames";
import HttpService from "../../networking";

const PersonalDetails = ({ navigation }) => {
  const state = React.useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+92");
  const [phone, setPhone] = useState("");
  const [dob, setDOB] = useState("");
  const [locationData, setLocationDate] = useState({
    lat: "",
    lng: "",
    city: "Lahore",
    state: "Punjab",
    country: "Pakistan",
    zip_code: "53700",
  });

  const onCreateUser = () => {
    state.setLoading(true);
    let data=new FormData();

    data.append("name",name)
    let formData = {
      name: name,
      email: email,
      dob: dob,
      mobile: phone,
      address: "",
      country: locationData.country,
      ccode: countryCode,
      city: locationData.city,
      state: locationData.state,
      zipcode: locationData.zip_code,
      fb_username: "",
      ins_username: "",
      tw_username: "",
      yt_username: "",
      userImage: "",
      payoutoption: "",
      paypal_email: "",
      bank_acct_number: "",
      bank_routing_number: "",
      bank_address: "",
      bank_swift_code: "",
      refcode: "",
    };

    HttpService.createUser(data, (status, res) => {
      console.log("res", res);
      state.setLoading(false);
      if (status && res.status) {
        // successSnack(res.message);
        // navigation.navigate(VERIFY_EMAIL, {email: email, plan: plan});
      } else {
        // errorSnack(res.message)
      }
    });
  };
  return (
    <AppContainer
      state={state}
      background={images.bg_small_squares}
      children={
        <ScrollView>
          <View style={[AppStyles.columnContainer, { backgroundColor: "transparent" }]}>
            <BackToolbar navigation={navigation} />

            <Text
              style={[Typography.Normal, { marginStart: 13, marginTop: 10, fontSize: 22 }]}>{"Personal\nDetails"}</Text>

            <TouchableOpacity activeOpacity={.7} style={{ width: 100, alignSelf: "center" }}>
              <View style={[AppStyles.centerItems, {
                width: 80,
                height: 80,
                borderRadius: 40,
                backgroundColor: colors.blueLight,
                alignSelf: "center",
              }]}>
                <Image source={images.user} style={{ width: 20, height: 20, resizeMode: "contain" }} />

              </View>
              <View style={[AppStyles.centerItems, {
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: colors.pinkLight,
                position: "absolute",
                bottom: 0,
                end: 0,
              }]}>
                <Image source={images.plus} style={{ width: 20, height: 20, resizeMode: "contain" }} />
              </View>
            </TouchableOpacity>

            <View style={[AppStyles.inputContainerStyle, { marginTop: 20 }]}>
              <Image source={images.username}
                     style={{ width: 20, height: 20, resizeMode: "contain", alignSelf: "center" }} />
              <TextInput
                style={[ChakraTypography.MediumRegular, AppStyles.inputStyle]}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholderTextColor={"#97A1E5"}
                returnKeyType="next"
                placeholder="Name"
              />

            </View>

            <View style={AppStyles.inputContainerStyle}>
              <Image source={images.email}
                     style={{ width: 20, height: 20, resizeMode: "contain", alignSelf: "center" }} />
              <TextInput
                style={[ChakraTypography.MediumRegular, AppStyles.inputStyle]}
                onChangeText={text => setName(text)}
                value={name}
                placeholderTextColor={"#97A1E5"}
                returnKeyType="next"
                placeholder="Email"
              />

            </View>

            <View style={AppStyles.inputContainerStyle}>
              <Image source={images.calender}
                     style={{ width: 20, height: 20, resizeMode: "contain", alignSelf: "center" }} />
              <TextInput
                style={[ChakraTypography.MediumRegular, AppStyles.inputStyle]}
                onChangeText={text => setDOB(text)}
                value={dob}
                placeholderTextColor={"#97A1E5"}
                returnKeyType="next"
                placeholder="Date of Birth"
              />

            </View>

            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <View style={[AppStyles.inputContainerStyle, { width: "30%" }]}>
                <Picker
                  selectedValue={countryCode}
                  style={[Typography.SmallMedium,{ width: "90%", color: "white" }]}
                  mode={"dialog"}
                  onValueChange={(itemValue, itemIndex) => setCountryCode(itemValue)}
                >
                  <Picker.Item label="+92" value="+92" />
                  <Picker.Item label="+91" value="+91" />
                </Picker>
              </View>

              <View style={[{ width: "5%" }]} />

              <View style={[AppStyles.inputContainerStyle, { width: "55%", paddingEnd: 10 }]}>

                <TextInput
                  style={[ChakraTypography.MediumRegular, AppStyles.inputStyle]}
                  onChangeText={text => setPhone(text)}
                  value={phone}
                  placeholderTextColor={"#97A1E5"}
                  returnKeyType="next"
                  placeholder="123-456-78-90"
                  keyboardType="phone-pad"
                />
                <Image source={images.us}
                       style={{ width: 20, height: 20, resizeMode: "contain", alignSelf: "center" }} />
              </View>
            </View>

            <GradiantButton
              label="Use my current location"
              onPress={() => {
                console.log("Button press");
              }}
              styles={{ marginTop: 15 }}
              backgroundColor={gradiant_colors.blueGradiant}
            />

            <View style={{ flexDirection: "row", alignSelf: "center" }}>

              <View style={[AppStyles.inputContainerStyle, { width: "43%", paddingEnd: 10 }]}>
                <Image source={images.city}
                       style={{ width: 15, height: 15, resizeMode: "contain", alignSelf: "center" }} />
                <TextInput
                  style={[ChakraTypography.MediumRegular, AppStyles.inputStyle]}
                  value={locationData.city}
                  placeholderTextColor={"#97A1E5"}
                  returnKeyType="next"
                  placeholder="City"
                  editable={false}
                />

              </View>

              <View style={[{ width: "4%" }]} />

              <View style={[AppStyles.inputContainerStyle, { width: "43%", paddingEnd: 10 }]}>
                <Image source={images.state}
                       style={{ width: 15, height: 15, resizeMode: "contain", alignSelf: "center" }} />
                <TextInput
                  style={[ChakraTypography.MediumRegular, AppStyles.inputStyle]}
                  value={locationData.state}
                  placeholderTextColor={"#97A1E5"}
                  returnKeyType="next"
                  placeholder="State"
                  editable={false}
                />

              </View>
            </View>


            <View style={{ flexDirection: "row", alignSelf: "center" }}>

              <View style={[AppStyles.inputContainerStyle, { width: "43%", paddingEnd: 10 }]}>
                <Image source={images.country}
                       style={{ width: 15, height: 15, resizeMode: "contain", alignSelf: "center" }} />
                <TextInput
                  style={[ChakraTypography.MediumRegular, AppStyles.inputStyle]}
                  value={locationData.country}
                  placeholderTextColor={"#97A1E5"}
                  returnKeyType="next"
                  placeholder="Country"
                  editable={false}
                />

              </View>

              <View style={[{ width: "4%" }]} />

              <View style={[AppStyles.inputContainerStyle, { width: "43%", paddingEnd: 10 }]}>
                <Image source={images.zip_code}
                       style={{ width: 15, height: 15, resizeMode: "contain", alignSelf: "center" }} />
                <TextInput
                  style={[ChakraTypography.MediumRegular, AppStyles.inputStyle]}
                  value={locationData.zip_code}
                  placeholderTextColor={"#97A1E5"}
                  returnKeyType="done"
                  placeholder="Zip Code"
                  editable={false}
                />

              </View>
            </View>

            <GradiantButton
              label="Next"
              onPress={() => {
                // onCreateUser()
                navigation.navigate(PERSONAL_DETAILS_VIEW);
              }}
              styles={{ marginTop: 15, marginBottom: 15 }}
              backgroundColor={gradiant_colors.pinkGradiant}
            />

          </View>
        </ScrollView>
      } />
  );
};
export default PersonalDetails;
