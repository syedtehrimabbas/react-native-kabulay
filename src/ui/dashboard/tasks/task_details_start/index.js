import React, { useState } from "react";
import { FlatList, ImageBackground, Text, View,ScrollView } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import UserContext from "../../../../AuthContaxt";
import AppContainer from "../../../../core/AppContainer";
import { AppStyles } from "../../../../theme/styles";
import { BackToolbar } from "../../../../core/BackToolbar";
import { Typography } from "../../../../theme/Typography";
import { ChakraTypography } from "../../../../theme/ChakraTypography";
import colors from "../../../../theme/colors";
import { GradiantButton } from "../../../../core/GradiantButton";
import gradiant_colors from "../../../../theme/gradiant_colors";
import { images } from "../../../../assets";


const TaskDetailsStart = ({ navigation }) => {
  const state = React.useContext(UserContext);
  const [activeTabSelect, setActiveTabSelect] = useState(true);
  const [completedTabSelect, setCompletedTabSelect] = useState(false);
  React.useEffect(() => {
    return () => {
    };
  }, []);


  return (
    <AppContainer
      state={state}
      children={
        <ScrollView>
          <View style={[AppStyles.columnContainer, { padding: hp(2) }]}>
            <BackToolbar navigation={navigation} />
            <Text style={[Typography.Normal, { marginTop: 10, fontSize: 22 }]}>{"Task Details"}</Text>

            <Text style={[ChakraTypography.Normal, {
              fontSize: 19,
              color: colors.green,
            }]}>{"Please follow the link and submit your process."}</Text>

            <Text style={[ChakraTypography.Normal, {
              fontSize: 15,
              color: colors.white,
            }]}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n" +
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}</Text>

            <Text style={[ChakraTypography.SmallBold, { fontSize: 19 }]}>{"Instructions:"}</Text>
            <FlatList data={[1, 1, 1, 1, 1, 1]}
                      renderItem={({index,item}) => <Text style={ChakraTypography.SmallRegular}>{`${index+1} - Loream Ipsum dolaremit sit. consectiurt`}</Text>}
            />

            <ImageBackground resizeMode="contain" source={images.blue_waves}
                             style={{
                               flex: 1,
                               alignSelf:'center',
                               marginTop:20,
                               width: 250,
                               height:250,
                               justifyContent: "center",
                               alignItems: "center",
                             }}>
              <Text style={[ChakraTypography.Normal, {fontSize: 20,alignSelf:'center'}]}>{"12:03:57"}</Text>
            </ImageBackground>

            <Text style={[ChakraTypography.Normal, { fontSize: 19, marginTop:20,alignSelf:'center',color: colors.green }]}>{"Budget: $10"}</Text>


            <GradiantButton
              label="Upload Task"
              onPress={() => {

              }}
              styles={{marginTop:20,marginBottom:20}}
              backgroundColor={gradiant_colors.pinkGradiant}
            />

          </View>
        </ScrollView>
      } />
  );
};

export default TaskDetailsStart;
