/**
 * 方式一
 * 请求失败后，加入失败重试功能，如果5次全部失败，则返回失败结果，只要5次尝试中有任意一次成功，则返回成功
 * @param fn 绑定函数
 * @param times 请求次数
 * @param delay 延迟时间
 */
function retry(fn,times, delay){

  return new Promise((resolve,reject)=>{

    const func = function(){
      fn().then(resolve).catch((e)=>{
        if(times-- >0){
          console.log(`还有${times}次机会`)
          setTimeout(func, delay)
        }else{
          reject(e)
        }
      })
    }
    return func();

  });
}

function getUser() {
  return new Promise((resolve, reject) => {
      const result = Math.floor(Math.random() * 10)
      return result < 3 ? resolve({
          id: result,
          username: 'ming'
      }) : reject(new Error(`The ${result} is greater than 3`))
  })
}

retry(getUser, 5, 1000).then(r => {
  console.log(`The result is ${r.username}`)
})
