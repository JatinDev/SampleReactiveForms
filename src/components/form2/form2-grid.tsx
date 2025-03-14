import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { addBlog, BlogState, removeBlog, resetBlogList } from '../../features/blog/blogSlicer';

function Form2Grid() {

    const blogList = useSelector((state: RootState) => state.blog)
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(resetBlogList());

        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(json => {
                    const top2 = json.slice(0, 2);
                    top2.map((d: any) => {
                        const obj: BlogState = {
                            id: d.id,
                            title: d.title,
                            content: d.body,
                            datetime: new Date().toLocaleDateString()
                        }
                        dispatch(addBlog(obj));
                    })
                })
        }, 2000);

    }, []);

    return (
        <>
            <div className=' p-10 border-rose-200 border rounded'>
                <span className="text-amber-950 text-2xl font-bold">Blog List</span>
                <div className="mt-5 overflow-x-auto">
                    {blogList.length > 0 ? (
                        <table className="w-full border border-gray-300 border-collapse">
                            <thead>
                                <tr>
                                    <th className='border border-gray-400 px-4 py-2'>Title</th>
                                    <th className='border border-gray-400 px-4 py-2'>Content</th>
                                    <th className='border border-gray-400 px-4 py-2'>DateTime</th>
                                    <th className='border border-gray-400 px-4 py-2'>Delet</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogList.map((blog, index) => (
                                    <tr key={index} className="hover:bg-gray-100">
                                        <td className="border border-gray-400 px-4 py-2">{blog.title}</td>
                                        <td className="border border-gray-400 px-4 py-2">{blog.content}</td>
                                        <td className="border border-gray-400 px-4 py-2">{blog.datetime}</td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            <input type="button" onClick={() => {
                                                dispatch(removeBlog(blog.id));
                                            }} className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 ml-2" value="Delete" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="py-2">
                            No users available
                        </p>
                    )}
                </div>
            </div>
        </>

    )
}

export default Form2Grid