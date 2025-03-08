import { SubmitHandler, useForm } from "react-hook-form"
import Form1Context from "../../context/form1-context";
import { useContext, useId } from "react";

type UserForm = {
    id: string,
    emailAddress: string,
    password: string,
    cPassword: string,
    firstName: string,
    lastName: string,
    phoneNo: string,
    company: string
}

function Form1() {

    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        reset,
        watch,
        formState: { errors },
    } = useForm<UserForm>();

    const pass = watch("password");

    const ConfirmPasswordChange = (data: string) => {
        if (data != pass && pass && data) {
            setError("cPassword", {
                type: "custom",
                message: "Password does not match!",
            })
        } else {
            clearErrors("cPassword")
        }

        if (!data) {
            setError("cPassword", { message: "This field is required" })
        }
    }

    const { users, setUsers } = useContext(Form1Context);

    const onSubmit: SubmitHandler<UserForm> = (data) => {
        const id = crypto.randomUUID();
        setUsers(prev => [
            ...prev,
            {
                id,
                emailAddress: data.emailAddress,
                cPassword: '',
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName,
                phoneNo: data.phoneNo,
                company: data.company
            }
        ]);
        reset();
    }
    return (
        <div className=' p-10 border-rose-200 border rounded'>
            <span className="text-amber-950 text-2xl font-bold">User Form</span>
            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="relative z-0 w-full mb-5 group">
                    <input id="emailAddress" {...register("emailAddress", { required: true })}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="emailAddress" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address <span className="text-red-500">*</span></label>
                    {errors.emailAddress && <span className="text-red-500 text-[12px]">This field is required</span>}
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" id="password" {...register("password", { required: true })}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password <span className="text-red-500">*</span></label>
                    {errors.password && <span className="text-red-500 text-[12px]">This field is required</span>}
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" id="floating_repeat_password" {...register("cPassword", { required: true })} onChange={() => ConfirmPasswordChange((event?.target as HTMLInputElement)?.value)}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password <span className="text-red-500">*</span></label>
                    {errors.cPassword && !errors.cPassword.message && <span className="text-red-500 text-[12px]">This field is required</span>}
                    {errors.cPassword && errors.cPassword.message && <span className="text-red-500 text-[12px]"> {errors.cPassword.message}</span>}
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" id="firstName" {...register("firstName", { required: true })}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="firstName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name <span className="text-red-500">*</span></label>
                        {errors.firstName && <span className="text-red-500 text-[12px]">This field is required</span>}
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" id="floating_last_name" {...register("lastName", { required: true })}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name <span className="text-red-500">*</span></label>
                        {errors.lastName && <span className="text-red-500 text-[12px]">This field is required</span>}
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input id="phoneNo" {...register("phoneNo")}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="phoneNo" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" id="company" {...register("company")}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company</label>
                    </div>
                </div>
                <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Submit" />
                <input type="button" onClick={() => { reset() }} className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 ml-2" value="Reset" />
            </form>
        </div>
    )
}

export default Form1