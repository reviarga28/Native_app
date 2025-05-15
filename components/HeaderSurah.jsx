import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function HeaderSurah({ surah }) {
  if (!surah) return null; // pastikan tidak error saat data belum ada

  return (
    <View className="p-6 bg-amber-500 rounded-b-3xl shadow-md">
      <View className="flex-row justify-between items-center">
        <View>
          <Text className="text-2xl font-bold text-white">{surah.namaLatin}</Text>
          <Text className="text-amber-100">{surah.nama}</Text>
        </View>
        <View className="bg-amber-400 p-3 rounded-full">
          <Text className="font-bold text-amber-900">{surah.nomor}</Text>
        </View>
      </View>

      <View className="mt-4 flex-row justify-between">
        <View className="flex-row items-center">
          <MaterialIcons name="place" size={16} color="#fef3c7" />
          <Text className="text-amber-100 ml-1">{surah.tempatTurun}</Text>
        </View>
        <Text className="text-amber-100">{surah.jumlahAyat} Ayat</Text>
      </View>
    </View>
  );
}
