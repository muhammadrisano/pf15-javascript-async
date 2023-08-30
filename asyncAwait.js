const penjumlahan = (val1, val2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof val1 !== "number" || typeof val2 !== "number") {
        reject("parameter harus number");
        return;
      }
      const result = val1 + val2;
      resolve(result);
    }, 3000);
  });
};
// penjumlahan(30, 24)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const aplikasiMulai = async()=>{
    try{
        console.log('perintah 1');
        const result = await penjumlahan('helo', 20)
        console.log(result);
        console.log('perintah 3');
    }catch(error){
        console.log(error);
    }
   
}

aplikasiMulai()
// async function aplikasiMulai2(){

// }