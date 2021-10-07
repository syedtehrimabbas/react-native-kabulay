/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import "react-native-gesture-handler";
import { Image, LogBox, Platform, UIManager, useColorScheme ,Animated} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  BANK_ACCOUNT_ENTRY,
  CHECKIN_FIRST,
  DASHBOARD,
  FOLLOW_KABULAY,
  NOTIFICATIONS,
  OTP_VERIFICATION,
  PAYMENT_SELECTED,
  PAYMENT_SETUP,
  PAYMENTS,
  PAYPAL_PAYMENT_SELECTED,
  PERSONAL_DETAILS,
  PERSONAL_DETAILS_VIEW,
  PROFILE,
  SELECT_LANGUAGE,
  SETUP_PAYPAL,
  SETUP_WUNION, TASK_DETAILS, TASK_DETAILS_START,
  TASKS,
  WELCOME, WITHDRAW,
  WU_PAYMENT_SELECTED,
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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "./src/theme/colors";
import { images } from "./src/assets";
import Tasks from "./src/ui/dashboard/tasks";
import Payments from "./src/ui/dashboard/payments";
import Notifications from "./src/ui/dashboard/notifications";
import Profile from "./src/ui/dashboard/profile";
import TaskDetails from "./src/ui/dashboard/tasks/task_details";
import TaskDetailsStart from "./src/ui/dashboard/tasks/task_details_start";
import Withdraw from "./src/ui/dashboard/payments/withdraw";

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Dashboard = () => {
  return (
    <Tab.Navigator

      shifting={true}
      backBehavior="none"

      activeColor={colors.iconsColor}
      inactiveColor={colors.iconsColor}
      tabBarOptions={{
        showLabel: true,
        activeTintColor: colors.primaryColor,
      }}
    >
      <Tab.Screen
        name={TASKS}
        component={Tasks}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={images.nav_tasks}
                   style={{ width: 22, height: 18, resizeMode: "contain", tintColor: color }} />
          ),
        }}
      />

      <Tab.Screen
        name={PAYMENTS}
        component={Payments}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={images.nav_payments}
                   style={{ width: 22, height: 18, resizeMode: "contain", tintColor: color }} />
          ),
        }}
      />

      <Tab.Screen
        name={NOTIFICATIONS}
        component={Notifications}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={images.nav_notifications}
                   style={{ width: 22, height: 18, resizeMode: "contain", tintColor: color }} />
          ),
        }}
      />

      <Tab.Screen
        name={PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={images.nav_profile}
                   style={{ width: 22, height: 18, resizeMode: "contain", tintColor: color }} />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default function App() {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  /*App states*/
  const [isSplash, setSplash] = React.useState(true);
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  let state = {
    splash: isSplash,
    setSplash: setSplash,
    user: user,
    setUser: setUser,
    loading: loading,
    setLoading: setLoading,
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

  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  const navigatorOptions = {
    cardStyle: { backgroundColor: 'transparent' },
    gestureEnabled: true,
    cardStyleInterpolator: ({ current: { progress } }) => ({
      cardStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
      overlayStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
          extrapolate: 'clamp',
        }),
      },
    }),
  }
  if (isSplash) {
    return <Splash />;
  } else {
    return (
      <UserProvider value={state}>
        <NavigationContainer >
          <RootStack.Navigator headerMode="none" initialRouteName={SELECT_LANGUAGE}
                               backBehavior="none"
                               screenOptions={navigatorOptions}
                               mode="modal">
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
            <RootStack.Screen name={DASHBOARD} component={Dashboard} />
            <RootStack.Screen name={TASK_DETAILS} component={TaskDetails} />
            <RootStack.Screen name={TASK_DETAILS_START} component={TaskDetailsStart} />
            <RootStack.Screen name={WITHDRAW} component={Withdraw} />
          </RootStack.Navigator>
        </NavigationContainer>
      </UserProvider>
    );
  }
};
