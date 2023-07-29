import React, { useEffect, useState } from "react";
import "./BlogsStyles.css";
import {useNavigate } from 'react-router-dom'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(null);
  // const [comment, setComment] = useState('')
  // const [content, setContent] = useState('')

  let navigate = useNavigate()


  // const addComment = () => {
  //   const addedComment = {content}
  //   fetch(`http://localhost:2000/comments`, {
  //     method: 'POST',
  //     body: JSON.stringify(addedComment),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(data => setComment(comment => [addedComment, ...comment]))
  //   }

  const getBlogs = () => {
    fetch("http://localhost:2000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
  }

  // const hideBlog = () => {
  //   setBlogs(null);
  // };

  const addBlog = async (e) => {
    const addedBlog = {title, body, author}
    if(! title || !body || !author) {
      console.log("please insert data")
    } else {
      const response = await fetch("http://localhost:2000/blogs", {
        method:"POST",
        body: JSON.stringify(addedBlog),
        headers: {
          'Content-Type': 'application/json'
        }
        })
        const json = await response.json()
        if(!response.ok) {
          setError(error)
        }
        if(response.ok) {
          setBlogs(blogs => [...blogs, addedBlog])
          setTitle('')
          setBody('')
          setAuthor('')
          setError(null)
          console.log("new blog added", addedBlog, json)
          navigate('/')
        }
        // window.location.reload()

      }
  };

  // const updateBlog = (id) => {
  //   const updatedBlog = {title: title, body: body, author:author};
  //   fetch(`http://localhost:2000/blogs/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(updatedBlog)
  //   })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log('Data updated successfully:', data);
  //     // setBlogs(prevBlogs => prevBlogs.map(item => item.id === id ? blogs : item));
  //   })
  //   .catch(error => {
  //     console.error('Error updating data:', error);
  //   });
  // }


    const deleteBlog = (id) => {
      fetch(`http://localhost:2000/blogs/${id}`, {
        method: 'DELETE'
      })
      .then(res => {
        if(res.ok) {
          setBlogs((blogs.filter((blog) => {
            return blog.id !== id
          })))
        }
        navigate('/')
        // window.location.reload()
      })
    }

    useEffect(() => {
      getBlogs()
    },[])

  return (
    <>
      <div className="form">
        <div className="info">
          <h1>ALL BLOGS</h1>
          {/* <button onClick={getBlogs}>Fetch All Blogs</button>
          <button onClick={hideBlog}>Hide All Blogs</button> */}
          {blogs &&
            blogs.map((item) => (
              <div key={item.blog_id} className="blog">
                <h2>{item.title}</h2>
                <span>Posted {formatDistanceToNow(new Date(item.date_created), {addSuffix: true})}</span>
                <br></br>
                <br></br>
                <p>{item.body}</p>
                <br></br>
                <span>Written by {item.author}</span>
                <button onClick={() => deleteBlog(item.blog_id)}>delete</button>
                {/* <button onClick={() => updateBlog(item.blog_id)}>edit</button> */}
                {/* <br></br>
                <textarea rows={5} placeholder="please leave your comment here..." value={content} onChange={(e) => {setContent(e.target.value)}}></textarea>
                <br></br>
                <button onClick={addComment}>Add your comment</button>
                <br></br>
                <p>comment: </p> */}
              </div>
            ))}
          <br></br>
          <h2>Add Your Blog !</h2>
          <input
            type="text"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br></br>
          <input
            type="text"
            placeholder="Body"
            required
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
          <br></br>
          <input
            type="text"
            placeholder="Author"
            required
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
          <br></br>
          <button onClick={addBlog}>Add To Blogs</button>
        </div>
      </div>
    </>
  );
}

export default Blogs;
