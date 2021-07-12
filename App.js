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
import { PERSONAL_DETAILS, SELECT_LANGUAGE, WELCOME } from "./src/constants/ScreenNames";
import SelectLanguage from "./src/ui/select_language";
import Splash from "./src/ui/splash";
import { UserProvider } from "./src/AuthContaxt";
import Welcome from "./src/ui/welcome";
import PersonalDetails from "./src/ui/personal_details";

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
          </RootStack.Navigator>
        </NavigationContainer>
      </UserProvider>
    );
  }
};
