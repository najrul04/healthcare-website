import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import NavBar from '../Home/NavBar/NavBar';
import './BlogDetails.css';

const BlogDetails = () => {

    const { id } = useParams();

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/MD-Mehedi-Hasan18111/health-care-data/main/blogs.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const blogData = blogs.find(blog => blog.id == id);

    return (
        <div>
            <NavBar />
            <div className="container">
                <h1>{blogData?.name}</h1>
                <div className="text-center my-4">
                    <img height="400px" width="100%" src={blogData?.image} alt="" />
                </div>
                <p>{blogData?.description}</p>
                <div className="text-center my-3">
                    <Link to="/blogs">
                        <button className="btn btn-primary btn-lg">Back to blogs!</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BlogDetails;