
const startApp = (angka)=>{
    try {
        if(typeof(angka) !== 'number'){
            throw new Error('parameter harus angka')
        }
        console.log(`angka yang kamu masukan adalah ${angka}`);


    } catch (error) {
        console.log(error.message);
    }

}

startApp('budi')