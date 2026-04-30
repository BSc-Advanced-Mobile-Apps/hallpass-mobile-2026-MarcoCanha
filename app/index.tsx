import * as React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import Task from '@/components/task';
export interface ITask {
  id: number;
  title: string;
  category: string;
  isChecked: boolean;
}

export default function HomeScreen() {
  const initialTasks: ITask[] = [
    {
      id: 1,
      title: 'Task 1',
      category: 'Category 1',
      isChecked: false,
    },
    {
      id: 2,
      title: 'Task 2',
      category: 'Category 2',
      isChecked: true,
    },
    {
      id: 3,
      title: 'Task 3',
      category: 'Category 3',
      isChecked: false,
    },
  ];
  return (
    <View className="bg-background flex-1 items-center justify-center gap-5 p-6">
      <View className="text-foreground flex flex-row text-center">HallPass!</View>
      {initialTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </View>
  );
}
