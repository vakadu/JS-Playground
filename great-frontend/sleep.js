function sleep(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

async function exec() {
  console.log("pause starts");
  await sleep(400);
  console.log("pause ends");
}

exec();
