import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './index';

export interface Task {
  id: number;
  title: string;
  note: string;
  priority: string;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(
        task => task.id === action.payload.id,
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  },
});

export const {addTask, editTask, deleteTask} = tasksSlice.actions;

export const selectAllTasks = (state: RootState) => state.tasks.tasks;

export default tasksSlice.reducer;
