import React from "react";

const Photos = (props) => {
  return (
    <>
      <section>
      <div className="posts">
        <div className="post-card">
          
          {/* <h3>Tittle = {props.tittle}</h3> */}
          <img src={props.url} />
          <h2> Id = {props.id}</h2>
          {/* <img src= {props.thumbnailUrl} /> */}
        </div>
      </div>
      </section>
    </>
  );
};

export default Photos;
