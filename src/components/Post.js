import React from 'react';
import Comment from './Comment';

function Post({ data }){
  return (
    <div className="post">
      <div className="post-header">
        <img className="avatar" src={data.author.avatar} alt=""/>
          <div className="details">
            <span>{data.author.name}</span>
            {data.date}
          </div>         
      </div>
      <div className="post-content">
        {data.content}
      </div>
      {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
    </div>
  )
}

export default Post;