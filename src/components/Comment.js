import React from 'react';

function Comment({ data }){
  return(
    <div className="post-comments">
      <div className="divider"></div>
      <div className="comment">
        <img className="avatar" src={data.author.avatar} alt=""/>
        <p><span>{data.author.name}:</span> {data.content}</p> 
      </div>
    </div>
  )
}

export default Comment;