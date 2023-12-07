
import BlogList from "./BlogList";
import Create from "./Create";
import useFetch from "./useFetch";
import {Route, Routes, useNavigate } from 'react-router-dom';


const  Blog = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/Create');
    };

    return ( 
        <div>
            <button className="add-blog-button" style={{ marginLeft: "auto" }} onClick={handleClick}> New Blog
            </button>

            <br />
            <Routes>
                <Route path="/Create" element={<Create />} />
            </Routes>
            
            <div className ="blog">
                {error && <div> { error } </div> }
                {isPending && <div> Loading ... </div>  }
                {blogs && <BlogList blogs={blogs} title={"All Blogs"}/>}
            </div> 
            <br />
        </div>

    );
}
 
export default Blog;


//<BlogList blogs={blogs.includes(blog) => blog.title == 'CODELancashire' title='Blogs about CODELancashire' />