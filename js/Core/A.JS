let api="https://jsonplaceholder.typicode.com/posts";


let r=async()=>
{
    let res=await fetch(api);
    let data=await  res.json();
    data.map((x)=>
    {
        console.log(x.id);
        console.log(x.title);
    })
}

r();