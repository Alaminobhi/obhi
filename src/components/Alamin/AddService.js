import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
    // const { register, handleSubmit, watch, error } = useForm();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [imgURL, setImgURL] = useState(null);
    const onSubmit = data => {
        const eventData = {
            title: data.title,
            live: data.live,
            code: data.code,
            technology: data.technology,
            category: data.category,
            description: data.description,
            img: imgURL
        };
        console.log(eventData);
        const url = 'https://sheltered-plateau-09251.herokuapp.com/addProject';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server', res))
    };
    const handleUploadImg = event => {
        const imageData = new FormData();
        imageData.set('key', 'c0b1940244d5fc981bc8e84ede322a1b');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImgURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="bg-gradient">
            <div className="bg-secondary mx-5 text-dark text-center">
            <h3 className="text-center">Add Project or Blog</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("title", { required: true })} placeholder="Project Title" />
                    <br />
                    {errors.name && "Title is required"}<br />
                    <input {...register("live", { required: true })} placeholder="Live" /> <br />
                    {errors.live && "Live is required"}
                    <br />
                    <input {...register("code", { required: true })} placeholder="Code" /> <br />
                    {errors.code && "Code is required"}
                    <br />
                    <input {...register("technology", { required: true })} placeholder="Technology" /> <br />
                    {errors.technology && "Technology is required"}
                    <br />
                    <input {...register("description", { required: true })} placeholder="Description" />
                    <br />
                    {errors.description && "Description is required"}<br />
                    <select {...register("category")}>
                        <option value="project">Project</option>
                        <option value="blog">Blog</option>
                        <option value="other">other</option>
                    </select> <br/><br/>
                    <input name="img" type="file" onChange={handleUploadImg} /> <br />
                    <input className="btn btn-success" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddService;