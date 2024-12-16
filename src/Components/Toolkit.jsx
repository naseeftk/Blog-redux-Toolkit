import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Toolkit = () => {
  const { id } = useParams();
  const blogs = useSelector((state) => state.blogg.blogs);
  const color = useSelector((state) => state.blogg.color);
  const blog = blogs.find((item) => item.id === Number(id));
  
  return (
    <div>
      {blog && (
        <div style={{ backgroundColor: color }}>
          <h1>{blog.text}</h1>
          <h3>{blog.body}</h3>
        </div>
      )}
    </div>
  );
};

export default Toolkit;
