// /posts	100 posts
import React from 'react';

const Postcards = (props) => {
    return (
        <>
        <div className="posts">
        <h1 className="Post-card-heading">  Post -  {props.id} </h1>
        <div className='post-card'>
            <h2> Id = {props.id}</h2>
            <h3>Tittle = {props.tittle}</h3>
            <p> Body = {props.body}</p> 
        </div>
        </div>
        </>
    );
}

export default Postcards;




