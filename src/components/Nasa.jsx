import React from 'react';

const Nasa = (props) => {
    return (
        <>
        <div className="posts">
        <div className='post-card'>
            <h2> Id = {props.id}</h2>
            <h3>Tittle = {props.tittle}</h3>
            <img src={props.url}  />
        </div>
        </div>
        </>
    );
}

export default Nasa;