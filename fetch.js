const link = "https://jsonplaceholder.typicode.com/todos";


// fetch(link)
// .then((res)=>{
//     // console.log(res);
//     return res.json()
   
// })
// .then((res)=>{
//     res.map((item)=>{
//         console.log(item.title);
//     })
// })
// .catch((err)=>{
//     console.log(err);
// })

const startApp = async()=>{
    try {
        const response = await fetch(link)
        const posts = await response.json()
        posts.map((item)=>{
            console.log(item.title);
        })
    } catch (error) {
        console.log(error);
    }

}

startApp()


https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png