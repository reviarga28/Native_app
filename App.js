import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import "./global.css";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import JuzScreen from "./screens/JuzScreen";
import SurahScreen from "./screens/SurahScreen";
import BookMarkScreen from "./screens/BookMarkScreen";
import HalamanScreen from "./screens/HalamanScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import SurahDetailScreen from "./screens/SurahDetailScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CustomHeader() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Al - Quran</Text>
    </View>
  );
}

function HeaderStack(props) {
  const navigation = useNavigation();
  const { title } = props;
  return (
    <View className="flex flex-row items-center justify-between px-6 bg-Yellows h-36 pt-10">
      <View className="flex flex-row items-center gap-4">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack("Surah")}
        >
          <Ionicons
            name="arrow-back"
            size={25}
            style={{ fontStyle: "bold" }}
            color="white"
          />
        </TouchableOpacity>
        <Text className="text-3xl font-bold text-white">{title}</Text>
      </View>
      <Ionicons
        name="search-sharp"
        size={23}
        style={{ fontStyle: "bold" }}
        color="white"
      />
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Al - Quran"
        component={HomeScreen}
        options={{
          header: () => <CustomHeader />,
        }}
      />
      <Stack.Screen
        name="Juz"
        component={JuzScreen}
        headerShown={false}
        options={{ header: () => <HeaderStack title="Juz" /> }}
      />
      <Stack.Screen
        name="Surah"
        component={SurahScreen}
        headerShown={false}
        options={{ header: () => <HeaderStack title="Daftar Surah Al-Qur'an" /> }}
      />
      <Stack.Screen
        name="SurahDetail"
        component={SurahDetailScreen}
        headerShown={false}
        options={{ header: () => <HeaderStack title="SurahDetail" /> }}
      />
      <Stack.Screen
        name="Halaman"
        component={HalamanScreen}
        headerShown={false}
        options={{ header: () => <HeaderStack title="Halaman" /> }}
      />
      <Stack.Screen
        name="BookMark"
        component={BookMarkScreen}
        headerShown={false}
        options={{ header: () => <HeaderStack title="BookMark" /> }}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

function MainTab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeStack} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#ffd700",
    height: 100,
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingStart: 20,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
