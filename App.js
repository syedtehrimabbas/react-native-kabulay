/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import "react-native-gesture-handler";
import { LogBox, Platform, UIManager, useColorScheme } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  BANK_ACCOUNT_ENTRY, CHECKIN_FIRST,
  FOLLOW_KABULAY,
  OTP_VERIFICATION,
  PAYMENT_SELECTED,
  PAYMENT_SETUP, PAYPAL_PAYMENT_SELECTED,
  PERSONAL_DETAILS,
  PERSONAL_DETAILS_VIEW,
  SELECT_LANGUAGE, SETUP_PAYPAL, SETUP_WUNION,
  WELCOME, WU_PAYMENT_SELECTED,
} from "./src/constants/ScreenNames";
import SelectLanguage from "./src/ui/select_language";
import Splash from "./src/ui/splash";
import { UserProvider } from "./src/AuthContaxt";
import Welcome from "./src/ui/welcome";
import PersonalDetails from "./src/ui/personal_details";
import PersonalDetailsView from "./src/ui/personal_details_view";
import FollowKabulay from "./src/ui/follow_social";
import OTPVerification from "./src/ui/otp_verification";
import PaymentSetup from "./src/ui/no_payment";
import BankAccountEntry from "./src/ui/bank_account";
import PaymentSelected from "./src/ui/payment_selected";
import SetupPayPal from "./src/ui/setup_paypal";
import PayPalPaymentSelected from "./src/ui/paypal_payment_selected";
import SetupWUnion from "./src/ui/setup_w_union";
import WUPaymentSelected from "./src/ui/wu_payment_selected";
import CheckinFirst from "./src/ui/checkin_first";

const RootStack = createStackNavigator();

export default function App() {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  /*App states*/
  const [isSplash, setSplash] = React.useState(true);
  const [user, setUser] = React.useState({});

  let state = {
    splash: isSplash,
    setSplash: setSplash,
    user: user,
    setUser: setUser,
  };

  React.useEffect(() => {
    if (
      Platform.OS === "android" &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
    LogBox.ignoreAllLogs();//Ignore all log notifications
    setTimeout(function() {
      setSplash(false);
    }, 3000);
  }, []);

  if (isSplash) {
    return <Splash />;
  } else {
    return (
      <UserProvider value={state}>
        <NavigationContainer>
          <RootStack.Navigator headerMode="none" initialRouteName="SelectLanguage"
                               backBehavior="none">
            <RootStack.Screen name={SELECT_LANGUAGE} component={SelectLanguage} />
            <RootStack.Screen name={WELCOME} component={Welcome} />
            <RootStack.Screen name={PERSONAL_DETAILS} component={PersonalDetails} />
            <RootStack.Screen name={PERSONAL_DETAILS_VIEW} component={PersonalDetailsView} />
            <RootStack.Screen name={FOLLOW_KABULAY} component={FollowKabulay} />
            <RootStack.Screen name={OTP_VERIFICATION} component={OTPVerification} />
            <RootStack.Screen name={PAYMENT_SETUP} component={PaymentSetup} />
            <RootStack.Screen name={BANK_ACCOUNT_ENTRY} component={BankAccountEntry} />
            <RootStack.Screen name={PAYMENT_SELECTED} component={PaymentSelected} />
            <RootStack.Screen name={SETUP_PAYPAL} component={SetupPayPal} />
            <RootStack.Screen name={PAYPAL_PAYMENT_SELECTED} component={PayPalPaymentSelected} />
            <RootStack.Screen name={SETUP_WUNION} component={SetupWUnion} />
            <RootStack.Screen name={WU_PAYMENT_SELECTED} component={WUPaymentSelected} />
            <RootStack.Screen name={CHECKIN_FIRST} component={CheckinFirst} />
          </RootStack.Navigator>
        </NavigationContainer>
      </UserProvider>
    );
  }
};
