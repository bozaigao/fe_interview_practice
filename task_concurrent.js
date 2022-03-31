/**
 * 任务并发问题：在一个任务队列中有很多个异步任务，限定并发的数量，当队列不为空就一直执行
 */
//并发任务限制数量
const limit = 5;
//正在执行中的任务数量
let taskIdQueue = [];
function getDelay(miliseconds = 300) {
  return function delay(taskId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("执行", taskId);
        resolve();
        taskIdQueue.splice(taskIdQueue.indexOf(taskId), 1);
        deleteTask(taskId);
        if (taskQueue.length > 0 && taskIdQueue.length < limit) {
          exeTasks(taskQueue);
        }
      }, miliseconds);
    });
  };
}

function deleteTask(taskId) {
  for (let i = 0; i < taskQueue.length; i++) {
    if (taskQueue[i].taskId === taskId) {
      taskQueue.splice(i, 1);
    }
  }
}

var taskQueue = [
  { taskId: 0, task: getDelay(1000) },
  { taskId: 1, task: getDelay(2000) },
  { taskId: 2, task: getDelay(100) },
  { taskId: 3, task: getDelay(500) },
  { taskId: 4, task: getDelay(4000) },
  { taskId: 5, task: getDelay(400) },
  { taskId: 6, task: getDelay(1000) },
  { taskId: 7, task: getDelay(2000) },
  { taskId: 8, task: getDelay(100) },
  { taskId: 9, task: getDelay(500) },
];

function exeTasks(tasks) {
  for (let i = 0; i < tasks.length; i++) {
    if (taskIdQueue.length < limit) {
      const taskId = tasks[i].taskId;
      if (taskIdQueue.indexOf(taskId) === -1) {
        taskIdQueue.push(taskId);
        tasks[i].task(taskId);
      }
    }
  }
}

exeTasks(taskQueue);
