import axios from "axios";
import React, { useEffect, useState } from "react";

function Allblog() {
  const [Blog, setBlog] = useState([]);
  useEffect(() => {
    getBlogs();
  }, []);
  const getBlogs = async () => {
    try {
      const { data } = await axios.get("http://localhost:7000/get_blog");

      console.log(data);
      setBlog(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <h3>All Blogs</h3>
    <div className="row">
     <div className="col-md-3  "></div>
     <div className="col-6">
      {Blog.map((ele, key) => (
       
        <div className=" allblog text-center mt-5 ">

        <h4>{ele.Title.toUpperCase()}</h4>
        <p>{ele.Description}</p></div>
        ))}
        </div>
        <div className="col-md-3"></div>
        </div>
        </>
  );
}

export default Allblog;
