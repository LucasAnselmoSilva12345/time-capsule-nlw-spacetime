import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-950">
      <Text className="text-2xl font-bold text-violet-700">
        Hello NLW SPACETIME!
      </Text>
      <StatusBar style="light" />
    </View>
  );
}
