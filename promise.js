// const janji = (ditunaikan)=>{
//     return new Promise((resolve, reject)=>{
//         if(ditunaikan){
//             return resolve(`janji ditunaikan ${ditunaikan}`)
//         }else{
//             return reject(`janji tidak ditunaikan`)
//         }
//     })
// }

// const result = janji(false)
// console.log(result);


const penjumlahan = (val1, val2)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof(val1) !== 'number' || typeof(val2)!== 'number'){
                reject('parameter harus number')
                return
            }
            const result = val1 + val2
            resolve(result)
        },3000)
    })
}
const hasilPenjumlahan = penjumlahan('ab', 24)

// console.log(hasilPenjumlahan);
hasilPenjumlahan
.then((res)=>{
console.log(res);
})
.catch((err)=>{
    console.log(err);
})