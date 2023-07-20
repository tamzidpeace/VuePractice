import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', () => {
  const task = ref<string>('');
  const tasks = ref<string[]>(['Task 1', 'Task 2', 'Task 3']);
  const visible = ref<boolean>(false);
  const temp = ref<boolean>(false);

  const removeTask = (index: number) =>  tasks.value.splice(index, 1);

  const updateTask = (index: number, task: string) => tasks.value[index] = task;

  const addTask = () => {
    if(!task.value) {
      alert('Task cannot be empty');
      return;
    }
    tasks.value.push(task?.value);
    task.value = '';
  }


  return {
    // states
    task,
    tasks,
    visible,
    temp,


    // methods
    removeTask,
    addTask,
    updateTask,
  }
})
