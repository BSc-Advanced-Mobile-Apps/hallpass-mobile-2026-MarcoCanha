import * as React from 'react';
import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { Card } from '@/components/ui/card';

export default function SettingsScreen() {
  return (
    <View className="bg-background flex-1 items-center justify-center px-4">
      <Card className="mx-4 mb-4 w-full">
        <Text variant="h1" className="font-semibold">
          Settings
        </Text>
      </Card>
      <Card className="mx-4 w-full">
        <Text variant="h1" className="font-semibold">
          Settings
        </Text>
      </Card>
    </View>
  );
}
