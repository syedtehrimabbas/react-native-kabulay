import { Image, Modal, Text, View } from "react-native";
import colors from "../theme/colors";
import { images } from "../assets";
import { ChakraTypography } from "../theme/ChakraTypography";
import { GradiantButton } from "./GradiantButton";
import gradiant_colors from "../theme/gradiant_colors";
import React from "react";

export const AppDialog = ({ title,visibility, onRequestClose, onClose }) => {
  return (
    <Modal animationType="slide"
           transparent={true}
           visible={visibility}
           onRequestClose={() => {
             onRequestClose(false);
           }}>
      <View style={{ flex: 1, backgroundColor: "transparent", justifyContent: "center" }}>

        <View style={{
          alignSelf: "center",
          backgroundColor: colors.primaryColor,
          padding: 20,
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 20,
          borderRadius: 20,
        }}>
          <Image source={images.check_icon} style={{ width: 65, height: 65, margin: 20 }} />
          <Text style={[ChakraTypography.Normal, {
            margin: 20,
            textAlign: "center",
          }]}>{title}</Text>
          <GradiantButton
            radius={30}
            label="Ok"
            onPress={() => {
              onClose(false);
            }}
            styles={{ width: 60, borderRadius: 40, margin: 20 }}
            backgroundColor={gradiant_colors.pinkGradiant}
          />
        </View>
      </View>

    </Modal>);
};
