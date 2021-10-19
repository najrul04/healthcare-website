import React, { useEffect, useState } from 'react';
import Footer from '../Home/Footer/Footer';
import NavBar from '../Home/NavBar/NavBar';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/MD-Mehedi-Hasan18111/health-care-data/main/blogs.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <NavBar />
            <div className="container">
                <h2 className="heading my-3 text-center">Our <span>Health Care</span> Blogs</h2>
                <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
                    {
                        blogs?.map(blog => <SingleBlog key={blog.id} blog={blog} />)
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blogs;