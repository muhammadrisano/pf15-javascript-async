const link = "https://jsonplaceholder.typicode.com/todos";

const getDataTodos = (method, url) => {
  return new Promise((resolve, reject) => {
    const ajax = new XMLHttpRequest();
    ajax.open(method, url);
    ajax.send();

    ajax.onreadystatechange = () => {
      if (ajax.status === 200) {
        const result = JSON.parse(ajax.responseText);
        resolve(result);
      } else {
        const error = "terjadi error bro...";
        reject(error);
      }
    };
  });
};

// async await
const startApp = async () => {
  try {
    const result = await getDataTodos("GET", link);
    result.map((item) => {
      console.log(`title: ${item.title}`);
    });
  } catch (error) {
    console.log(error);
  }finally{
    console.log('applikasi selsai');
  }
 
};

startApp()
// then catch

// getDataTodos("GET", link)
//   .then((res) => {
//     console.log('then di eksekusi');
//     res.map((item) => {
//       console.log(`Title = ${item.title}`);
//     });
//   })
//   .catch((err) => {
//     console.log('catch di eksekusi');
//     console.log(err);
//   });

// Promise.all([getDataTodos("GET", link), getDataTodos("GET", link)])
// .then((res)=>{
//     console.log(res);
// })
