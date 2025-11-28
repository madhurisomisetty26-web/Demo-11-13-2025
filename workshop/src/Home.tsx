import { useEffect, useState } from 'react'
import axios from 'axios';
import Header from './Header';

export default function Home() {

    interface MyData{
    id:string,
    title:string,
    price:string,
    category:string,
    image:string,
    }


    const[data,setData]=useState<MyData[]>([]);

    useEffect(()=>{
        axios.get("https://api.mydummyapi.com/categories/products").then((result)=>{setData(result.data);

        });

    },[]
);

  return (
    <div>
      <Header/>
      <div className="card  text-center">
         <ul className="nav nav-tabs card-header-tabs">
        <li className ="nav-item">
            <a className="nav-link active" href="/Home">Home</a>

            </li>
            </ul>
            </div>
        {data.map((results) => (
  <div key={results.id}>
    {results.title}<br />
    {results.price}<br />
    {results.category}<br />
    <img src={results.image} height="100px" width="100px" /><br />
  </div>
))}
        
    </div>
  )
}

