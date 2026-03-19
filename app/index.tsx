import * as React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function HomeScreen() {
  const [checked, setChecked] = React.useState(true);

  function onCheckedChange() {
    setChecked(!checked);
  }

  return (
    <View className="bg-background flex-1 items-center justify-center gap-5 p-6">
      <View className="text-foreground flex flex-row text-center">HallPass!</View>
      <View className="flex w-full flex-row">
        <View className="flex h-full w-24 px-8 py-5">
          <Checkbox
            className="border-foreground checked:bg-foreground"
            checked={checked}
            onCheckedChange={setChecked}
          />
        </View>
        <View className="border-foreground-transparent flex h-full flex-1 gap-1 border-b py-4">
          <Text className="text-foreground text-xl">My test item</Text>
          <Text className="text-foreground-transparent text-xl">Test category</Text>
        </View>
      </View>
    </View>
  );
}
