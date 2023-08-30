const cobaPromise = ()=>{
    return new Promise((resolve, reject)=>{
        resolve('helo')
        reject('test')

    })
}

cobaPromise()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(error);
})