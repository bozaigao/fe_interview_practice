/**
 * retry实现，当其中一次操作执行成功就进入then，当出现报错就进行延迟再次尝试，知道尝试次数用完
 */
function delay(seconds = 500) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve();
    }, seconds);
  });
}

function retry(fn, retries) {
  try {
    fn();
    return Promise.resolve();
  } catch (e) {
    if (retries > 0) {
      return delay(1000).then(() => {
        return retry(fn, retries - 1);
      });
    } else {
      return Promise.reject(e);
    }
  }
}

retry(() => {
  console.log(qwe);
}, 3).then(
  () => {
    console.log("执行成功");
  },
  (e) => {
    console.log("报错了kjskjdf", e);
  }
);
