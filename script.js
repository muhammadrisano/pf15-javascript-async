// const url = 'https://jsonplaceholder.typicode.com/todos'
// const ajax = new XMLHttpRequest();
// ajax.open("GET", "https://jsonplaceholder.typicode.com/todos");
// ajax.send();

// ajax.onreadystatechange = () => {
//   if (ajax.status === 200) {
//     const result = JSON.parse(ajax.responseText);
//     console.log(result);
//   } else {
//     console.log("prosess gagal");
//   }
// };


const getDataTodos = (method, url, callback) =>{
    const ajax = new XMLHttpRequest();
    ajax.open(method, url);
    ajax.send();
    
    ajax.onreadystatechange = () => {
      if (ajax.status === 200) {
        const result = JSON.parse(ajax.responseText);
        callback(null, result);
      } else {
       callback('ada error bro..', null)
      }
    };
    // lopping dan tampilkan titlenya aja
}


getDataTodos('GET', url, (error, result)=>{

    if(error){
        console.log(error);
        return 
    }

    result.map((item)=>{
        console.log(`Tittle: ${item.title}`);
    })
})


