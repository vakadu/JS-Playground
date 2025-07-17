const sleep = (val, time) => () => new Promise(res => setTimeout(() => res(val), time));

const tasks = [
  sleep(1, 300),
  sleep(2, 200),
  sleep(3, 100),
  sleep(4, 100),
];

// async function parallelLimit(tasks, k) {

//     let result = [], index=0;

//     while(index < tasks.length) {
//         const tempTasks = tasks.slice(index, index + k);
//         const res = await Promise.all(tempTasks.map((task) => task()));
//         result.push(...res)               
//         index+=k
//     }

//     return result
// }

async function parallelLimit(tasks, limit) {
  const results = [];
  let i = 0;

  debugger
  const runners = Array(limit).fill(null).map(async () => {
    while (i < tasks.length) {
      const currentIndex = i++;
      results[currentIndex] = await tasks[currentIndex]();
    }
  });
  console.log(runners);
  

  await Promise.all(runners);
  return results;
}

parallelLimit(tasks, 2).then(console.log); // [1, 2, 3, 4] (order preserved)

