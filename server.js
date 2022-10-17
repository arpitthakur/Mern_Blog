const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Blog = require("./models/blogModel");
const User = require("./models/userModel");
var cors = require("cors");
// const Category = require("./models/category");

var cors = require("cors");
app.use(express.json());
app.use(cors());
const port = 7000;

// app.post("/create_category", async (req, res) => {
//   const { category } = req.body;
//   try {
//     let category1 = await Category.create({
//       category,
//     });
//     res.json({
//       success: true,
//       message: "Category created successfully",
//     });
//   } catch (error) {
//     res.json({
//       success: false,
//       message: "Category not created",
//     });
//   }
// });

app.post("/create_blog", async (req, res) => {
  const { title, description } = req.body;
  try {
    // const findCategory = await Category.findOne({
    //   category,
    // });
    const blog = await Blog.create({
      Title: title,
      Description: description,
      // categoryID: findCategory._id,
    });

    res.json({
      success: true,
      message: "Data created successfully",
    });
  } catch (error) {}
});
app.post("/signup", async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  try {
    const user = await User.create({
      fullName: name,
      email,
      password,
    });
  } catch (error) {
    console.log(error);
  }
});
// app.get("/get_blog", async (req, res) => {
//   try {
//     const savedBlog = await Blog.find();
//     res.json({ savedBlog });
//   } catch (error) {
//     res.json("error");
//   }
// });
app.get("/get_blog", async (req, res) => {
  try {
    const blogs = await Blog.find()
    if (blogs.length) {
      res.status(200).json({
        data: blogs,
        status: 200,
      });
    } else {
      res.status(404).json({
        data: blogs,
        status: 404,
      });
    }
  } catch (error) {
    res.json("error");
  }
});
app.post("/logIn", async (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) {
    return res.send("not exist1");
  }
  try {
    let user = await User.findOne({email,password});
    // if(email.length > 0){
    //   res.send({"user is already registered"})
    //   return;
    // }
    // if (!user) {
    //   return res.json({
    //     success: false,
    //   });
    // }
    console.log(user)
    if(user&&Object.keys(user).length>0){
      res.status(200).json({
        success:true,
        "name":user
      })
    }else{
      res.status(400).json({
        success:false,
        // "name":user
        msg:"Email or password wrong"
      })
    }
    // if (user.password != password) {
    //   return res.json({
    //     success: false,
    //   });
    // }
    // return res.json({
    //   success: true,
    // });
  } catch (error) {
    console.log(error);
  }
});
app.get("/getUser",async(req,res)=>{
  let id = req.body.id
 try {
  const findId = await User.findById(id)
  console.log(findId)
  
 } catch (error) {
  
 }
  
  });


// app.get("/get_Value", async (req, res) => {
//   let name = req.query.name;
//   try {
//     const findCategory = await Category.findOne({
//       category: name,
//     });
//     let cId = findCategory._id;
//     const blogs = await Blog.find({ categoryID: cId });
//     console.log(blogs);
//     res.status(200).send(blogs);
//   } catch (e) {
//     console.log(e);
//   }
// });
app.get("/getBlog/:id", async (req, res) => {
  const id = req.params.id;
  try {
    console.log(id);
    const blogs = await Blog.findById(id);
    if (blogs) {
      return res.status(200).json({
        status: 200,
        data: blogs,
      });
    } else {
      return res.status(404).json({
        status: 404,
        data: {},
        message: "Data not found!",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});
mongoose
  .connect(
    "mongodb+srv://arpitThakur4931:Bullshit7@cluster0.l9btlcq.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected"))
  .catch(() => console.log("error"));
