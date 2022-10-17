
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blog from './Blog';
import Signup from './Signup';
import NextBlog from './nextBlog';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Allblog from './Allblog';


function App() {

    
    return (
      <BrowserRouter>
        <Routes> 
        <Route path="/" element={<Blog />} />
        <Route path="/all-blog" element={<Allblog />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
       
          <Route path="/fullBlog/:id" element={<NextBlog />} />
          
          
          
        </Routes>
      </BrowserRouter>
      
    );
}

export default App;
