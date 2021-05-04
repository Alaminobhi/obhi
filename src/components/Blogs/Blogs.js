import React, { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Blogs = () => {

    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-plateau-09251.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setBlogData(data))
    }, [])

    return (
        <section className="mt-5 m-4">
            <div className="text-center bg-secondary">
            <h1 style={{color: '#1CC7C1'}}>Blogs </h1><hr/>
            </div>
            <div className="row">
                {
                    blogData.map(data => <BlogList key={data._id} data ={data}></BlogList>)
                }
            </div>
        </section>
    );
};

export default Blogs;