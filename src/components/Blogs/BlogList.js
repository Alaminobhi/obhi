import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'

const BlogList = ({ data }) => {
    const { title, description, img, technology, _id } = data;
    return (
        <div className="col-md-4 mb-2">
            <div className="m-2 bg-white rounded item shadow text-center">
                <Link to={"/projectDetails/" + _id}>
                    <div className="box img-thumbnail w-100 h-300" style={{ backgroundImage: `url(${img})` }}>
                        <div class="cover">
                           <h1>Details</h1>
                        </div>
                    </div>
                        <h3>{title}</h3>
                        <p>{technology}</p>
                </Link>
            </div>
        </div>

    );
};

export default BlogList;