import React, { useEffect } from "react";
import { Text, View, Image, Animated, Easing } from "react-native";

export default function SplashScreen() {
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.8);
  const waveAnim = new Animated.Value(0);

  useEffect(() => {
    // Animation sequence
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        tension: 30,
        useNativeDriver: true,
      }),
      Animated.loop(
        Animated.timing(waveAnim, {
          toValue: 1,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        })
      ),
    ]).start();
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-blue-50">
      <Animated.View 
        className="items-center justify-center"
        style={{
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }]
        }}
      >
        {/* Water-themed logo container */}
        <View className="relative mb-8">
          <View className="absolute -inset-4 bg-blue-200/30 rounded-full" />
          <Image
            source={require('../assets/tabs.png')}
            className="w-32 h-32"
          />
          
          {/* Static water level indicator */}
          <View className="absolute bottom-0 left-0 right-0 h-2 bg-blue-400/20 rounded-t-full" />
        </View>

        {/* App title */}
        <Text className="text-3xl font-bold text-blue-800 mb-2">
          PDAM
        </Text>
        <Text className="text-lg text-blue-600 mb-8">
          Air Bersih Untuk Semua
        </Text>

        {/* Wave loading indicator */}
        <View className="flex-row items-center space-x-2">
          {[0, 1, 2].map((i) => (
            <Animated.View
              key={i}
              className="w-3 h-3 bg-blue-500 rounded-full"
              style={{
                transform: [
                  {
                    translateY: waveAnim.interpolate({
                      inputRange: [0, 0.5, 1],
                      outputRange: [0, i % 2 === 0 ? -6 : 6, 0]
                    })
                  }
                ],
                opacity: waveAnim.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [0.6, 1, 0.6]
                })
              }}
            />
          ))}
        </View>
      </Animated.View>

      {/* Footer */}
      <Text className="absolute bottom-8 text-blue-500">
        © {new Date().getFullYear()} PDAM Kota Anda
      </Text>
    </View>
  );
}