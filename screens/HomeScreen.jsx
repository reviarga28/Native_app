import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import Card from '../components/Card';

export default function HomeScreen() {
  const [tanggal, setTanggal] = useState('');

  useEffect(() => {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('id-ID', options);
    setTanggal(formattedDate);
  }, []);

  return (
    <View>
      <View className="bg-Yellows h-20 rounded-b-[40px]"></View>
    <View className="ablosulute bottom-20 items-center bg-gradient-to-b from-yellow-100 to-white px-4">
      <View className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm">
        <Text className="text-gray-600 text-sm text-center mb-2">{tanggal}</Text>
        <Text className="text-xl font-bold text-center text-yellow-800">Selamat Datang di Al - Quran</Text>
        <Text className="text-center text-gray-500 mt-2">
          Temukan kedamaian dan petunjuk melalui ayat-ayat suci Al-Qur'an.
        </Text>
      </View>
    </View>
    <View className=" px-4">
    <View className="bg-white shadow-lg rounded-2xl p-6 mt-4">
      <Text>سُوْرَۃُ الفَاتِحَة</Text>
    </View>
    </View>
    <View>
      <Card/>
    </View>
    </View>
  );
}
