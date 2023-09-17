const PENDING = 0;
const RESOLVED = 1;
const REJECTED = 2;

function customPromise(executor){

    let status = PENDING;
    let value = null;
    let taskFun = [];
    let errorFun = [];

    function resolve(result){
        if(status !== PENDING) return;

        status = RESOLVED;
        value = result;

        taskFun.forEach((t) => {t(value)})
    }

    function reject(err){
        if(status !== PENDING) return;

        status = REJECTED;
        value = err;

        errorFun.forEach((e) => {e(err)})
    }

    this.then = function(sucessCallBack){
        if(status === RESOLVED){
            sucessCallBack(value);
        }else{
            taskFun.push(sucessCallBack);
        }
        return this;
    }

    this.catch = function(failureCallBack){
        if(status === REJECTED){
            failureCallBack(value);
        }else{
            errorFun.push(failureCallBack);
        }
        return this;
    }

    executor(resolve, reject);
}

let task = (resolve, reject) => {

    let result = Math.floor(Math.random() * 100);

    if(result % 5 == 0){
        setTimeout(() => {
            resolve(result);
        }, 2000);
    }else{
        setTimeout(() => {
            reject(result);
        }, 2000);
    }

}

let varPromise = () => {
    let promise = new customPromise(task);
    return promise;
} 

varPromise().then((val) => {
    console.log(val);
    console.log("Resolved : " + val)
})
.then((val) => {
    console.log("Resolved : " + val)
})
.catch((err) => {
    console.log("Rejected : " + err)
})

