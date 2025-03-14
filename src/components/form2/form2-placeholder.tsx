import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import { Form2 } from '..'
import Form2Grid from './form2-grid'

function form2Placeholder() {
    return (
        <Provider store={store}>
            <div className='flex flex-row mx-auto m-5 justify-evenly'>
                <div style={{ width: "30%" }}>
                    <Form2 />
                </div>
                <div style={{ width: "50%" }}>
                    <Form2Grid />
                </div>
            </div>
        </Provider>
    )
}

export default form2Placeholder