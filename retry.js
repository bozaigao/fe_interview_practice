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

//同步版retry
function retry(fn, retries) {
  try {
    console.log("retries", retries);
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

//异步版retry
function retry(fn, retries) {
  try {
    console.log("retries", retries);
    return fn()
      .then(() => {
        return Promise.resolve();
      })
      .catch((e) => {
        if (retries > 0) {
          return delay(1000).then(() => {
            return retry(fn, retries - 1);
          });
        } else {
          return Promise.reject(e);
        }
      });
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
  //异步任务
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log(qwe);
        resolve();
      } catch (e) {
        reject(e);
      }
    }, 200);
  });
}, 3).then(
  () => {
    console.log("执行成功");
  },
  (e) => {
    console.log("报错了kjskjdf", e);
  }
);
