import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Postcards from "../components/postcards";
import '../App.css'


const Fetchbyaxios = () => {
    const[value , setValue ] = useState([])
    useEffect(()=>{
        axios.get ("https://jsonplaceholder.typicode.com/posts")
        .then((post)=>
            setValue(post.data)
        // console.log (post)
        )

    } , [])
    return (
        <div>
              <h1 className='Post_card_main-heading'>100 Posts</h1>
            {
              value ? value.map((e)=> <Postcards tittle={e.title} body={e.body} id={e.id}/>) : <p>No Data</p>
             }
            </div>
    )
}

export default Fetchbyaxios;
