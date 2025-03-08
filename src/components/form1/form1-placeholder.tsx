import { useState } from 'react'
import Form1 from './form1'
import Form1Grid from './form1-grid'
import Form1Context from '../../context/form1-context'
import { UserFormModel } from '../../models/userModel';

function Form1Placeholder() {

    const [users, setUsers] = useState<UserFormModel[]>([]);

    return (
        <Form1Context.Provider value={{ users, setUsers }}>
            <div className='flex flex-row mx-auto m-5 justify-evenly'>
                <Form1 />
                <Form1Grid />
            </div>
        </Form1Context.Provider>
    )
}

export default Form1Placeholder