import React from "react";
import { TextInput, View } from "react-native";
import colors from "../theme/colors";
import { ChakraTypography } from "../theme/ChakraTypography";
import { AppStyles } from "../theme/styles";

class OtpInputs extends React.Component {

  state = { otp: [] };
  otpTextInput = [];

  componentDidMount() {
    this.otpTextInput[0].focus();
  }

  focusPrevious(key, index) {
    if (key === "Backspace" && index !== 0)
      this.otpTextInput[index - 1].focus();
  }

  focusNext(index, value) {
    const { getOtp } = this.props;
    if (index < this.otpTextInput.length - 1 && value) {
      this.otpTextInput[index + 1].focus();
    }
    if (index === this.otpTextInput.length - 1) {
      this.otpTextInput[index].blur();
    }
    const otp = this.state.otp;
    otp[index] = value;
    this.setState({ otp });
    console.log("OPT", otp.join(""));
    getOtp(otp.join(""));
  }


  render() {
    const { otpError, otpLength } = this.props;
    const inputs = Array(otpLength).fill(0);

    return (
      <View
        style={{ justifyContent: "center", alignItems: "center", height: 50, width: "100%", flexDirection: "row" }}>
        {inputs.map(
          (i, j) => <View style={{
            justifyContent: "center",
            alignItems: "center",
            height: 45,
            width: 45,
            margin: 5,
            backgroundColor: otpError ? "transparent" : colors.blueLight,
            borderColor: otpError ? colors.pinkLight : "transparent",
            borderWidth: otpError ? 2 : 0,
            borderRadius: 10,
          }}>
            <TextInput
              style={[ChakraTypography.ALargeBold, AppStyles.inputStyle, { textAlign: "center",color: otpError?colors.pinkLight:colors.white }]}
              onChangeText={v => this.focusNext(j, v)}
              keyboardType="numeric"
              maxLength={1}
              onKeyPress={e => this.focusPrevious(e.nativeEvent.key, j)}
              ref={ref => this.otpTextInput[j] = ref}
            />
          </View>,
        )}
      </View>
    );
  }
}

export default OtpInputs;
