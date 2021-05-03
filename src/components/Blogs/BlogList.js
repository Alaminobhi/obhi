import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({data}) => {
    const {title, description, img, technology, _id} = data;
    return (
        <div className="col-md-6 mb-2">
        <div className="m-2 bg-white hover-zoom hover-shadow text-center">
        <Link to={"/projectDetails/"+_id}>
            <img className="img-thumbnail w-100 hover-zoom" src={img} alt=""/> <br/>
            <h3>{title}</h3>
            <p>{technology}</p>
            </Link>
            </div>
        </div>
    );
};

export default BlogList;