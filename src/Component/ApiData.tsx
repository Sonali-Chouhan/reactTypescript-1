import React ,{useState} from "react"
interface IPost {
    userId : number ;
    id : number ;
    title  : string ;
    body : string ;
  }
  function ApiData ()  {
    const [ state, setState ] = 
    React.useState<IPost[]>([]);
  
    const getPosts = async () => {
  
      const res : 
      Response = await fetch(
     "https://jsonplaceholder.typicode.com/posts");
      const posts : IPost[] = await res.json();
      setState(posts);
    }
  
    React.useEffect(() => {
        getPosts();
    }, []);
  
    return (
        <>
            {
              state.slice(0,2).map( (post,index) => 
              <div key={index}>
                    <h2>{post.title}</h2>
                    <div>{post.id}</div>
                    <p>{post.body}</p>
                </div>
              )
            }
        </>
    )
  }

export default ApiData;
