import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'


const ReactQueryPage = () => {
    const fetchPost = () =>{
        return axios.get('http://localhost:3000/posts')
    }
    const {data, isLoading, isError, error} = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPost, 
    retry: 1,       //재시도 횟수 설정
    select: (data)=>{
        return data.data;
    }
    });
    console.log('d',data, isLoading);
    console.log('error',isError, error);

    if(isLoading){
        return <h1>Loading</h1>
    }
    if(isError){
        return <h1>{error.message}</h1>
    }
  return (
    <div>
      return <h1>{data.map(item=><div>{item.title}</div>)}</h1>
    </div>
  )
}

export default ReactQueryPage
