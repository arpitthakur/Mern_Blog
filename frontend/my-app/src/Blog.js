import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";




function Blog() {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [msg, setMsg] = useState("");
  // const [blog, setBlog] = useState([])
 
  

  // const categoryFunc = (e) => {
  //   console.log(e.target.value);
  //   setCategory(e.target.value);
  // };
  // const getCategory = async(e)=>{
  //   let value=e.target.value
  //   console.log(value)
  //   try {
  //     const { data } = await axios.get(`http://localhost:7000/get_Value?name=${value}`);
  //     setMsg(data.message);
  //     console.log(data)
  //     setBlog(data)
  //   } catch (error) {
  //     console.log(error);
  //   }

  // }
  useEffect(() => {
    loginCheck()
  }, []);

  const loginCheck = async() => {
    console.log("cosebvcjkd")
    let val = localStorage.getItem("id")
    if(val){
      console.log(val)
      // try {
      //   const data = await axios.post("http://localhost:7000/getUser", { val});
      //   console.log(data.data)
      // } catch (error) {
      //   console.log(error);
      // }

    }
    else{
      navigate('/login')
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    if (!title && !description) {
      setMsg("All fields are required");
      setTimeout(() => {
        setMsg("");
      }, [3000]);
      return;
    }
    try {
      const { data } = await axios.post("http://localhost:7000/create_blog", {
        title,
        description,
        
      });
      setMsg(data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (

    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">Blogger</Navbar.Brand>
          <Nav className="d-flex justify-content-between w-25">
            <Link to = {'/all-blog'}>All blogs</Link>
            {/* <Nav.Link href="">Log In</Nav.Link> */}
            <Link to = {'/signup'}>Sign Up</Link>
            <Link to ={'/login'}>Log In</Link>
            {/* <Nav.Link href="">Sign Up</Nav.Link> */}
          
          </Nav>
        </Container>
      </Navbar>
      <br />
      
     
    
    <div className="container">
    <h3>Blog</h3>
      <div className="message_div">
        <h3>{msg}</h3>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
     
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="" 
          id="title"
          name="title" value={title}
          onChange={(e) => setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} type="text"
          id="description"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setdescription(e.target.value)} />
          <br/>
           <Button as="input" type="submit" value="Submit" />{' '}
      </Form.Group>
      </form>
        {/* <select name="category" id="category" onChange={(e) => {
          categoryFunc(e)
          getCategory(e)
          }}>
          <option value="novalue">Select category</option>
          <option value="listening">listening</option>
          <option value="reading">reading</option>
          <option value="writing">writing</option>
          <option value="learning"> learning</option>
        </select>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        <br/>
      
        <button>Submit</button>
      </form> */}

      {/* {blog?blog.map((item,index)=>{
        return<div className="block"><h1 >
          {item.Title} 

          <Link to = {"/fullBlog/"+item._id}>
                  Full blog
                  </Link>
          </h1></div>
      })
      :
      ""
      } */}
      </div>
    </>
    
  );
}

export default Blog;
