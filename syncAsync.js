
function sleep(millis, prosess)
{
    let date = new Date('12-10-2022');
    let curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
    console.log(prosess);
}

// sync

// console.log('printah1');
// sleep(2000, 'printah2' )
// console.log('printah3');




// async

// console.log('perintah 1');
// setTimeout(()=>{
//     console.log('perintah 2');
// },1000)
// console.log('perintah 3');


const penjumlahan = (val1, val2, callback) =>{
    setTimeout(()=>{
        const result = val1 + val2
        callback(result)
    }, 1000)
}


const pengurangan = (val1, val2, callback) =>{
    setTimeout(()=>{
        const result = val1 - val2
        callback(result)
    }, 1000)
}

penjumlahan(10, 15, (result)=>{
   const hasilPenjumlahan = result
   pengurangan(hasilPenjumlahan, 20, (result)=>{
    const hasilPengurangan = result
    console.log(hasilPengurangan);
   })
})

