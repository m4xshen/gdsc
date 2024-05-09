export let id = 1;
export const initialTasks = [
  {
    id: id++,
    name: 'Example',
    done: 0,
    description: 'This is an example task',
    subtasks: [
      {
        id: id++,
        name: 'Subtask 1',
        done: 0,
        description: 'This is a subtask',
        subtasks: [],
      },
      {
        id: id++,
        name: 'Subtask 2',
        done: 0,
        description: 'This is another subtask',
        subtasks: [],
      },
      {
        id: id++,
        name: 'Subtask 3',
        done: 0,
        description: 'This is a subtask yooo~',
        subtasks: [],
      },

    ],
  },
  {
    id: id++,
    name: 'Another Example',
    done: 0,
    description: 'This is another example task',
    subtasks: [
      {
        id: id++,
        name: 'Subtask 1',
        done: 0,
        description: 'This is a subtask',
        subtasks: [],
      },
      {
        id: id++,
        name: 'Subtask 2',
        done: 0,
        description: 'This is another subtask',
        subtasks: [],
      },
    ],
  },
  {
    id: id++,
    name: 'Yet Another Example',
    done: 0,
    description: 'This is yet another example task',
    subtasks: [],
  },
];