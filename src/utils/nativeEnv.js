const nativeEnv = {
  isSupportXcx: null,
  _init: _init,
}

function getList(data){
  let time=3000;
  return new Promise((resolve,reject)=>{
    if(data){
      setTimeout(() => {
        resolve(`敌人还有${time / 1000}秒到达战场，全军出击`)
      }, time)
    }else{
      reject('请求异常')
    }
  })
}

function _init() {
  getList(true).then((r) => {
    if (r) {
      nativeEnv.isSupportXcx = r;
    }
  })
}

_init();

export default nativeEnv
