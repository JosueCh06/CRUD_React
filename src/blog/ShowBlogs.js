import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:4000/blogs/';

const CompShowBlogs = () => {
    const [blogs, setBlog] = useState([])
    useEffect (()=>{
        getBlogs()
    },[])

    // procedimiento para mostrar todos los blogs
    const getBlogs = async() => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    // procedimiento para eliminar un autor
    const deleteBlog = async(id) => {
        await axios.delete(`${URI}${id}`)
        getBlogs()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'>Create</Link>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog) =>(
                                <tr key={blog.id}>
                                    <td>{blog.title}</td>
                                    <td>{blog.content}</td>
                                    <td>
                                    <Link to={`/edit/${blog.id}`} className='btn btn-info'>Editar</Link>
                                    <button onClick={()=>deleteBlog(blog.id)} className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr> 
                            ))} 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
                            
    )
}

export default CompShowBlogs