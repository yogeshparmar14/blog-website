import React, { useEffect, useState } from "react";
import "./Posts.css";
const Posts = () => {
  const [comment, setComment] = useState("")
  const [blogPost, setBlogPost] = useState([])
  const [submit, setSubmit] = useState()
  useEffect(() => {
    const blogPosts = [
      {
        title: "JAVASCRIPT",
        body: `JavaScript is the world most popular 
        lightweight, interpreted compiled programming 
        language. It is also known as scripting 
        language for web pages. It is well-known for 
        the development of web pages, many non-browser 
        environments also use it. JavaScript can be 
        used for Client-side developments as well as 
        Server-side developments`,
        imgUrl:
          "./claudio-schwarz-i25aqE_YUZs-unsplash.jpg",
        like: false,
        comment: ""

      },
      {
        title: "Data Structure ",
        body: `There are many real-life examples of 
        a stack. Consider an example of plates stacked 
        over one another in the canteen. The plate 
        which is at the top is the first one to be 
        removed, i.e. the plate which has been placed 
        at the bottommost position remains in the 
        stack for the longest period of time. So, it 
        can be simply seen to follow LIFO(Last In 
        First Out)/FILO(First In Last Out) order.`,
        imgUrl:
          "./ak (1).jpg",
        like: false,
        comment: ""

      },
      {
        title: "Algorithm",
        body: `The word Algorithm means “a process 
        or set of rules to be followed in calculations 
        or other problem-solving operations”. Therefore 
        Algorithm refers to a set of rules/instructions 
        that step-by-step define how a work is to be 
        executed upon in order to get the expected 
        results. `,
        imgUrl:
          "./ak (2).jpg",
        like: false,
        comment: ""

      },
      {
        title: "Computer Network",
        body: `An interconnection of multiple devices, 
        also known as hosts, that are connected using 
        multiple paths for the purpose of sending/
        receiving data media. Computer networks can 
        also include multiple devices/mediums which 
        help in the communication between two different 
        devices; these are known as Network devices
        and include things such as routers, switches,
        hubs, and bridges. `,
        imgUrl:
          "./ak (3).jpg",
        like: false,
        comment: ""

      },
    ];
    setBlogPost(blogPosts)
  }, [])

  console.log("blogPost", blogPost)
  const handleChange = (index) => {
    console.log(index)
    let array = [...blogPost]
    array[index].like = !blogPost[index].like
    setBlogPost(array)
  }

  const handleSave = (index,value) => {
    console.log("comment", comment)
    let array = [...blogPost]
    array[index].comment = value
    setBlogPost(array)
    // setSubmit(index)
  }

  const handleSubmit =(index)=>{
    setSubmit(index)
  }

  return (
    <div className="posts-container">
      {blogPost?.map((post, index) => {
        {/* console.log(post) */ }
        return (
          <div >
            <div className="post-container">
              <h1 className="heading">{post.title}</h1>
              <img className="image" src={post.imgUrl} alt="post" />
              <p>{post.body}</p>
              <div className="customContaine">
                <button type="button" className="btn btn-primary" onClick={() => { handleChange(index) }}>
                  {post.like ? "liked" : "unlike"}  </button>
              </div>
              {/* <button type="button" onClick={()=>{handleChange(index)}}>Click Me!</button> */}
              <textarea 
                placeholder="Enter Your Comment"
                style={{ marginTop: "10px", height: "59px" }}
                type='text'
                value={post.comment}
                onChange={(e) => {
                  // console.log(e.target.value)
                  // setComment(e.target.value)
                  handleSave(index,e.target.value)
                }}></textarea>
              {submit === index ? <button type="button" disabled style={{ marginTop: "10px" }}>Submitted</button> : <button type="button" onClick={() => { handleSubmit(index) }} style={{ marginTop: "10px" }}>Submit</button>}
            </div>
          </div>
        )
      }
      )}
    </div>
  );
};

export default Posts;