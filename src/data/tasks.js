export let id = 1;
export const initialTasks = [
  {
    id: id++,
    name: 'Example',
    description: 'This is an example task',
    subtasks: [
      {
        id: id++,
        name: 'Subtask 1',
        description: 'This is a subtask',
        subtasks: [],
      },
      {
        id: id++,
        name: 'Subtask 2',
        description: 'This is another subtask',
        subtasks: [],
      },
    ],
  },
  {
    id: id++,
    name: 'Another Example',
    description: 'This is another example task',
    subtasks: [
      {
        id: id++,
        name: 'Subtask 1',
        description: 'This is a subtask',
        subtasks: [],
      },
      {
        id: id++,
        name: 'Subtask 2',
        description: 'This is another subtask',
        subtasks: [],
      },
    ],
  },
];
