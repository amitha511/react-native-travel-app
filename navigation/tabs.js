import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screnns/HomeScreen";
import { StyleSheet, Text, View, Image } from "react-native";
import { BuildTripStack } from "./BuildTripStack";
import { ProfileStack } from "./ProfileStack";
import { ScheduleStack } from "./ScheduleStack";
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
          ...style.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/NavGraphIcons/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#6D71F5" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#6D71F5" : "#748c94", fontSize: 12 }}
              ></Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="My Trips"
        component={ScheduleStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/NavGraphIcons/myTrips.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#6D71F5" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#6D71F5" : "#748c94", fontSize: 12 }}
              ></Text>
            </View>
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="New Trip"
        component={BuildTripStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/NavGraphIcons/newTrip.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#6D71F5" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#6D71F5" : "#748c94", fontSize: 12 }}
              ></Text>
            </View>
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/NavGraphIcons/userIcon.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#6D71F5" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#6D71F5" : "#748c94", fontSize: 12 }}
              ></Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#6D71F5",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default Tabs;
