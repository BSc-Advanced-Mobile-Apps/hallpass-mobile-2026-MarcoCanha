import { render, screen } from '@testing-library/react-native';
import { Task } from '../components/Task';

describe('Task', () => {
  test('renders a task', () => {
    const task = {
      id: 1,
      title: 'Test Task',
      category: 'Test Category',
      isChecked: false,
    };

    render(<Task task={task} />);

    // Just check if the title and category are displayed
    const titleElement = screen.getByText('Test Task');
    const categoryElement = screen.getByText('Test Category');
    expect(titleElement).toBeTruthy();
    expect(categoryElement).toBeTruthy();
  });
});
