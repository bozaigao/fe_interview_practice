const maxLimit = 5;
let taskIds = [];
let tasks = [];

function getTask(time) {
  return function (taskId) {
    setTimeout(() => {
      console.log(taskId);
      taskIds.splice(taskIds.indexOf(taskId), 1);
      deleteTask(taskId);
      if (tasks.length > 0 && taskIds.length < maxLimit) {
        executeTask(tasks);
      }
    }, time);
  };
}

function deleteTask(taskId) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].taskId === taskId) {
      tasks.splice(i, 1);
    }
  }
}

tasks = [
  { taskId: 1, task: getTask(1000) },
  { taskId: 2, task: getTask(1000) },
  { taskId: 3, task: getTask(1000) },
  { taskId: 4, task: getTask(1000) },
  { taskId: 5, task: getTask(1000) },
  { taskId: 6, task: getTask(1000) },
  { taskId: 7, task: getTask(1000) },
  { taskId: 8, task: getTask(1000) },
  { taskId: 9, task: getTask(1000) },
  { taskId: 10, task: getTask(1000) },
];

function executeTask(tasks) {
  for (let i = 0; i < tasks.length; i++) {
    if (taskIds.length < maxLimit && taskIds.indexOf(tasks[i].taskId) === -1) {
      taskIds.push(tasks[i].taskId);
      tasks[i].task(tasks[i].taskId);
    }
  }
}

executeTask(tasks);
