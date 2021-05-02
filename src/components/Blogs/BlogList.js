import React from 'react';

const BlogList = ({data}) => {
    const {title, description, img, technology} = data;
    return (
        <div className="col-md-6 mb-2">
        <div className="m-2 bg-white text-center">
            <img className="img-thumbnail" src={img} alt=""/> <br/>
            <h3>{title}</h3>
            <p>{technology}</p>
            <small>{description}</small>
            </div>
        </div>
    );
};

export default BlogList;