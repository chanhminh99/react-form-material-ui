import React, {useCallback, useState} from 'react'
import './App.css'
import Form from './components/Form'



const App = () => {
    const [fields, setFields] = useState({})


    const _onChange = useCallback((updateValue) => {
        setFields((preFields) => {
            return {
                ...preFields,
                ...updateValue
            }
        })
    }, [])

    return (
        <div className="App">
            <Form onChange={_onChange} />
            <p>
                {JSON.stringify(fields, null, 2)}
            </p>
        </div>
    )
}

export default App