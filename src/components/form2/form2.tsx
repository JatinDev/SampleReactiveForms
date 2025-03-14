import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { addBlog, BlogState } from '../../features/blog/blogSlicer';
import { useDispatch } from 'react-redux';

function form2() {

    type BlogForm = {
        title: string,
        content: string,
    }

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<BlogForm>();

    const onSubmit: SubmitHandler<BlogForm> = (data) => {
        const id = crypto.randomUUID();
        const obj: BlogState = {
            id,
            title: data.title,
            content: data.content,
            datetime: new Date().toLocaleDateString()
        }
        dispatch(addBlog(obj));
        reset();
    };

    return (
        <div className=' p-10 border-rose-200 border rounded'>
            <span className="text-amber-950 text-2xl font-bold">Add Blog</span>
            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="relative z-0 w-full mb-5 group">
                    <input id="title" {...register("title", { required: true })}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title <span className="text-red-500">*</span></label>
                    {errors.title && <span className="text-red-500 text-[12px]">This field is required</span>}
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <textarea cols="40" rows="5" id="content" {...register("content", { required: true })}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="content" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Content <span className="text-red-500">*</span></label>
                    {errors.content && <span className="text-red-500 text-[12px]">This field is required</span>}
                </div>
                <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Submit" />
                <input type="button" onClick={() => { reset() }} className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 ml-2" value="Reset" />
            </form>
        </div>
    )
}

export default form2