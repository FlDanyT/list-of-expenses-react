import React, { useState } from 'react'
import './CostForm.css'

const CostFrom = (props) => {
    const [inputName, setInputName] = useState('')
    const [inputAmout, setInputAmout] = useState('')
    const [inputDate, setInputDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     amout: '',
    //     date: ''
    // })

    const nameChangeHandler = (event) => {
        setInputName(event.target.value)
        //  console.log(inputName)

        // setUserInput({
        //     ...userInput,
        //     name: event.target.value
        // })

        // setUserInput((previousState) => {
        //     return {
        //         ...previousState,
        //         name: event.target.value

        //     }
        // })


    }
    const amoutChangeHandler = (event) => {
        setInputAmout(event.target.value)
        // console.log(amout)

        // setUserInput({
        //     ...userInput,
        //     amout: event.target.value
        // })
    }
    const dateChangeHandler = (event) => {
        setInputDate(event.target.value)
        // console.log(date)

        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // })

    }


const submitHandler = (event) => {
    event.preventDefault()

    const costDate = {
        description: inputName,
        amout: inputAmout,
        date: new Date(inputDate)
    }

    props.onSaveCostDate(costDate)
    setInputName('')
    setInputAmout('')
    setInputDate('')
}


    return <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Название</label>
                <input type='text' value={inputName} onChange={nameChangeHandler} />
            </div>
            <div className="new-cost__control">
                <label>Сумма</label>
                <input type='number' value={inputAmout} onChange={amoutChangeHandler} min='0.01' step='0.01' />
            </div>
            <div className="new-cost__control">
                <label>Дата</label>
                <input type='date' value={inputDate} onChange={dateChangeHandler} min='2019-01-01' step='2023-12-31' />
            </div>
            <div className="new-cost__actions">
                <button type="submit">
                    Добавить Расход
                    </button>
                    <button type='button' onClick={props.onCancel}>Отмена</button>
            </div>
        </div>
    </form>
}
export default CostFrom