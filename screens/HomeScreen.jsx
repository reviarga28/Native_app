import { View, Text, Image } from 'react-native';
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
        <Text className=" text-gray-600 text-sm text-center mb-2">{tanggal}</Text>
        <Text className="text-xl font-bold text-center text-yellow-800">Selamat Datang di Al - Quran</Text>
        <Text className="text-center text-gray-500 mt-2">
          Temukan kedamaian dan petunjuk melalui ayat-ayat suci Al-Qur'an.
        </Text>
      </View>
    </View>
    <View className="absolute top-40 px-4">
    <View className="flex flex-row items-center gap-14 bg-YellowGray shadow-lg rounded-2xl p-6 mt-4">
      <Image source={require('../assets/Quran.png')} className="w-10 h-10"/>
      <Text className="text-xl font-bold text-white">سُوْرَۃُ الفَاتِحَة</Text>
      <Text className="bg-white px-4 py-2 rounded-lg text-YellowGray text-md font-semibold shadow">Lanjut Membaca</Text>
    </View>
      <Card/>
    </View>
    </View>
  );
}
