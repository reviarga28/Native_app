import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function Card() {
  // Sample data for cards
  const cardData = [
    { 
      title: "Al-Fatihah", 
      subtitle: "Pembukaan", 
      ayah: "7 Ayat",
      color: "bg-emerald-100"
    },
    { 
      title: "Al-Baqarah", 
      subtitle: "Sapi Betina", 
      ayah: "286 Ayat",
      color: "bg-blue-100"
    },
    { 
      title: "Ali 'Imran", 
      subtitle: "Keluarga Imran", 
      ayah: "200 Ayat",
      color: "bg-purple-100"
    },
    { 
      title: "An-Nisa", 
      subtitle: "Wanita", 
      ayah: "176 Ayat",
      color: "bg-amber-100"
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
            className={`w-[48%] mb-4 ${card.color} rounded-xl shadow-md overflow-hidden`}
          >
            <View className="p-4">
              <Text className="text-lg font-bold text-gray-800">{card.title}</Text>
              <Text className="text-sm text-gray-600">{card.subtitle}</Text>
              
              <View className="mt-4 flex-row items-center justify-between">
                <Text className="text-xs text-gray-500">{card.ayah}</Text>
                <View className="bg-white rounded-full w-6 h-6 items-center justify-center">
                  <Text className="text-xs">﷽</Text>
                </View>
              </View>
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
              <Text className="text-emerald-600 font-medium">Baca</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}