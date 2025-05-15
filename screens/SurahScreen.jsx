import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { fetchSurahs } from "../services/api";
import { Ionicons } from '@expo/vector-icons';

export default function SurahScreen({ navigation }) {
  const [surahs, setSurahs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSurahs = async () => {
      try {
        const data = await fetchSurahs();
        setSurahs(data);
      } catch (error) {
        console.error("Failed to fetch surahs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadSurahs();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50">
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text className="mt-4 text-gray-600">Memuat daftar surah...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-50">
      <FlatList
        data={surahs}
        keyExtractor={(item) => item.nomor.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("SurahDetail", { id: item.nomor })}
            className="mx-4 my-2 p-4 bg-white rounded-lg shadow-sm"
            activeOpacity={0.7}
          >
            <View className="flex-row items-start">
              <View className="bg-yellow-200 w-10 h-10 rounded-full items-center justify-center mr-3">
                <Text className="text-YellowGray font-bold">{item.nomor}</Text>
              </View>
              
              <View className="flex-1">
                <View className="flex-row justify-between items-start">
                  <View>
                    <Text className="text-lg font-bold text-gray-800">{item.namaLatin}</Text>
                    <Text className="text-sm text-gray-500">{item.arti}</Text>
                  </View>
                  <Text className="text-lg font-arabic text-right text-Yellows">
                    {item.nama}
                  </Text>
                </View>

                <View className="flex-row mt-2 items-center">
                  <View className="flex-row items-center mr-4">
                    <Ionicons name="book-outline" size={14} color="#6b7280" />
                    <Text className="text-xs text-gray-500 ml-1">{item.jumlahAyat} Ayat</Text>
                  </View>
                  <View className="flex-row items-center">
                    <Ionicons name="location-outline" size={14} color="#6b7280" />
                    <Text className="text-xs text-gray-500 ml-1">{item.tempatTurun}</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}