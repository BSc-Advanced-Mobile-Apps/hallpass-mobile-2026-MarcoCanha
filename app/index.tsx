import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';

export default function HomeScreen() {
  return (
    <View className="bg-background flex flex-1 py-32">
      <View className="text-foreground flex flex-row text-center">HallPass!</View>
      <View className="border-foreground-transparent flex flex-row gap-5 py-4">
        <View className="flex w-16 items-center justify-center">
          <Checkbox className="border-2"></Checkbox>
        </View>
        <View className="border-foreground-transparent flex-1 border-b py-4">
          <Text className="text-foreground">Submit Assignment</Text>
          <Text className="text-foreground-transparent">Due: Oct 20</Text>
        </View>
      </View>
    </View>
  );
}
