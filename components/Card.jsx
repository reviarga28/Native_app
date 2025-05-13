import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

export default function Card() {
    const navigation = useNavigation();
  // Sample data for cards
  const cardData = [
    { 
      title: "Juz", 
      screen: "Juz",
      image: require("../assets/quran1 1.png")
    },
    { 
      title: "Surah", 
      screen: "Surah",
      image: require("../assets/mosque.png")
    },
    { 
      title: "Halaman", 
      screen: "Halaman",
      image: require("../assets/goto-page.png")
    },
    { 
      title: "BookMark", 
      screen: "BookMark",
      image: require("../assets/bookmark 1.png")
    }
  ];

  return (
    <View className="p-4">
      {/* Grid Container */}
      <View className="flex flex-row flex-wrap justify-between">
        {cardData.map((card, index) => (
          <TouchableOpacity 
            key={index}
            activeOpacity={0.8}
             onPress={() => navigation.navigate(card.screen)}
            className="bg-white w-48 rounded-xl shadow-lg mb-4"
          >
            <View className="flex justify-center items-center p-4">
              <Image source={card.image} className="w-12 h-12"/>
              <Text className="text-md font-semibold text-gray-800">{card.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Featured Card */}
      <View className="mt-4 bg-emerald-600 rounded-xl shadow-lg overflow-hidden">
        <View className="p-6">
          <Text className="text-white font-bold text-xl">Baca Hari Ini</Text>
          <Text className="text-emerald-100 mt-1">Al-Kahf: 1-10</Text>
          
          <View className="mt-6 flex-row items-center justify-between">
            <Text className="text-white text-sm">10 Ayat</Text>
            <TouchableOpacity 
              activeOpacity={0.7}
              className="bg-white px-4 py-2 rounded-full"
            >
              <Text onPress={() => navigation.navigate('Detail')} className="text-emerald-600 font-medium">Baca</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}