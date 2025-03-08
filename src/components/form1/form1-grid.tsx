import React, { useContext } from 'react'
import Form1Context, { Form1ContextType } from '../../context/form1-context';

function Form1Grid() {

    const { users } = useContext<Form1ContextType>(Form1Context);
    console.log('users->', users);


    return (
        <>
            <div className=' p-10 border-rose-200 border rounded'>
                <span className="text-amber-950 text-2xl font-bold">User List</span>
                <div className="mt-5 overflow-x-auto">
                    {users.length > 0 ? (
                        <table className="w-full border border-gray-300 border-collapse">
                            <thead>
                                <tr>
                                    <th className='border border-gray-400 px-4 py-2'>Email</th>
                                    <th className='border border-gray-400 px-4 py-2'>Password</th>
                                    <th className='border border-gray-400 px-4 py-2'>Name</th>
                                    <th className='border border-gray-400 px-4 py-2'>Phone no.</th>
                                    <th className='border border-gray-400 px-4 py-2'>Company</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index} className="hover:bg-gray-100">
                                        <td className="border border-gray-400 px-4 py-2">{user.emailAddress}</td>
                                        <td className="border border-gray-400 px-4 py-2">{user.password}</td>
                                        <td className="border border-gray-400 px-4 py-2">{user.firstName} {user.lastName}</td>
                                        <td className="border border-gray-400 px-4 py-2">{user.phoneNo}</td>
                                        <td className="border border-gray-400 px-4 py-2">{user.company}</td>
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

export default Form1Grid