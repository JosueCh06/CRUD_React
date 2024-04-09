import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:4000/blogs/';

const CompCreateBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    //procediminto de crear
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {title: title, content:content})
        navigate('/')
    }

    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form*label">Title: </label>
                    <input 
                        value={title}
                        onChange={(e)=> setTitle(e.target.value)}
                        type="text" 
                        className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form*label">Content: </label>
                    <textarea
                        value={content}
                        onChange={(e)=> setContent(e.target.value)}
                        type="text" 
                        className="form-control"/>
                    
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    )
}

export default CompCreateBlog