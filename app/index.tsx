import * as React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import Task from '@/components/task';
export interface ITask {
  title: string;
  category: string;
  isChecked: boolean;
}

export default function HomeScreen() {
  const task: ITask = {
    title: 'My test item',
    category: 'Test category',
    isChecked: false,
  };

  return (
    <View className="bg-background flex-1 items-center justify-center gap-5 p-6">
      <View className="text-foreground flex flex-row text-center">HallPass!</View>
      <Task task={task} />
    </View>
  );
}
