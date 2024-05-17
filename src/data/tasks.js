import { nanoid } from 'nanoid';

export const initialTasks = [
  {
    id: nanoid(),
    name: 'Example',
    done: 0,
    description: 'This is an example task',
    tag: null,
    labels: [],
    subtasks: [],
  },
];
