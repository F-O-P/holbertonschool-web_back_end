export default function taskBlock(trueOrFalse) {
  let task;
  let task2;
  task = false;
  task2 = true;
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
